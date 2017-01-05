((Phaser, Game, CFG) => {
  // get or create Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  Game.SparkEnemy = class extends Game.Enemy{
    constructor(){

    }
  };

})(window.Phaser, window.Game, window.Game.Configuration);

