/*

  level width = 750
  designer breaks it in 50px chunks
  15wide
  level1, 3000px : 40 blocks

  ## Should dynamically set the game vertical bounds, remove from CFG

  level format

`---------------































        _      |
               |
  ___          |
               |
       __      |
               |
             __|
               |
         __    |
               |
     __        |
               |
 ___           | // hero can jump up "3" rows
               |
               |
               |
---------------|

*/
((Phaser, Game, CFG) => {
  // get or create Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  const PARTS = {
    PLATFORM : '_',
    WALL : '|',
    SPACE : ' ',
  };
  const COL_WIDTH = 50;
  const ROW_HEIGHT = 100;
  const ROW_OFFSET = 100;

  const levels = {
    1 :
`---------------
































        _      |
               |
  ___          |
               |
       __      |
               |
             __|
               |
____           |
               |
     __     ___|
               |
               |
 ___           |
               |
               |
---------------|` // level 1
  };

  const spawnPlatform = (game, x, y, size) => {
    x *= COL_WIDTH;
    y *= ROW_HEIGHT;
    y += ROW_OFFSET;
    Game.platformsGroup.add(new Game.Platform(game, x, y, size).sprite);
  };

  const spawnRow = game => ( row, y ) => {
    // discover platforms
    let parts = row.split('');
    let spawns = parts
      .map( cell => cell === PARTS.WALL ? PARTS.SPACE : cell )
      .reduce((lastPart, curPart, x) => {
        // building a platform at the end of a sequence of underscores
        if( curPart === PARTS.PLATFORM ){ // add to the sequence
          return lastPart + curPart;
        } else { // not in sequence
          if( lastPart.length > 0 ){ // end of a sequence
            spawnPlatform(game, x-lastPart.length, y, lastPart.length);
          }
          return ''; // reset sequence
        }
      }, '');
  };

  const load = ( game, levelId ) => {

    if( !levels.hasOwnProperty(levelId) ){
      throw RangeError(`Level ID:${levelId} has not yet been designed.`);
    }

    // spawn the floor
    spawnPlatform(game, -2, -1, 4);
    spawnPlatform(game, 6, -1, 4);
    spawnPlatform(game, 14, -1, 4);

    let level = levels[levelId];
    // ignore top and bottom rows, always have a floor
    // scan each row from bottom(end) to top(beginning)
    let levelRows = level.split(`\n`).reverse();
    levelRows.pop();
    levelRows.shift();
    levelRows.forEach(spawnRow(game));
  };

  Game.LevelDesigner = {
    load
  };

})(window.Phaser, window.Game, window.Game.Configuration);

