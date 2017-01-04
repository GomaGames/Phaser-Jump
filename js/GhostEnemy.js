((Phaser, Game, CFG) => {
  // get or create Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  Game.GhostEnemy = class extends Game.Enemy{
    constructor(game, x, y){
      super(game, x, y, 'baddie-2.png');
    }
  };

})(window.Phaser, window.Game, window.Game.Configuration);


