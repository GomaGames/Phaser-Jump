((Phaser, Game, CFG) => {
  // get or create Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  Game.GhostEnemy = class extends Game.Enemy{
    constructor(){

    }
  };

})(window.Phaser, window.Game, window.Game.Configuration);


