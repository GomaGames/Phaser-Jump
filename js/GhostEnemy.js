((Phaser, Game, CFG) => {
  // get or create Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  const SPAWN_Y_OFFSET = 97;

  Game.GhostEnemy = class extends Game.Enemy{
    constructor(game, x, y){
      super(game, x, y + SPAWN_Y_OFFSET, 'baddie-2.png');
      this.sprite.body.setSize(5, 72, 100, 22);
    }
  };

})(window.Phaser, window.Game, window.Game.Configuration);


