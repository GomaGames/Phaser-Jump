((Phaser, Game, CFG) => {
  // get or create Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  const SCALE = 1;
  const SPAWN_Y_OFFSET = -84;
  const SPAWN_X_OFFSET = -32;

  Game.Ammo = class{
    constructor(game, x, y){
      this.game = game;
      this.sprite = this.game.add.sprite(x + SPAWN_X_OFFSET, CFG.GAME_HEIGHT - y + SPAWN_Y_OFFSET, CFG.ASSETS.GFX, 'power1-3.png');
      this.sprite.scale.set(SCALE);

      this.sprite.update = this.update.bind(this);
    }

    update(){

    }
  };

})(window.Phaser, window.Game, window.Game.Configuration);


