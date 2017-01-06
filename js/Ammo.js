((Phaser, Game, CFG) => {
  // get or create Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  const SCALE = 1;
  const SPAWN_Y_OFFSET = -84;
  const SPAWN_X_OFFSET = -32;
  const UI_X_SPACING = 64;
  const UI_X_OFFSET = -60;
  const UI_Y_OFFSET = 10;

  Game.Ammo = class{
    constructor(game, x, y){
      this.game = game;
      this.collected = false;
      this.vx = 0;
      this.sprite = this.game.add.sprite(x + SPAWN_X_OFFSET, CFG.GAME_HEIGHT - y + SPAWN_Y_OFFSET, CFG.ASSETS.GFX, 'power1-3.png');
      this.sprite.scale.set(SCALE);

      this.sprite.update = this.update.bind(this);
    }

    update(){
      if(!this.collected && this.sprite.overlap(Game.hero.sprite)){
        Game.hero.collect(this);
        this.collect();
      }
      this.sprite.x += this.vx;

    }

    collect(){
      this.collected = true;

      // "remove" from stage
      // stick to camera
      this.sprite.fixedToCamera = true;
      this.sprite.cameraOffset.setTo(
        ( Game.hero.ammo.length * UI_X_SPACING ) + UI_X_OFFSET,
        UI_Y_OFFSET
      );
    }
  };

})(window.Phaser, window.Game, window.Game.Configuration);


