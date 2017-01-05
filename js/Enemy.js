((Phaser, Game, CFG) => {
  // get or create Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  Game.Enemy = class{
    constructor(){

    }

  };

})(window.Phaser, window.Game, window.Game.Configuration);

