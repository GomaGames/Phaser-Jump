((Phaser, Game, CFG) => {
  // get or create Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  const SCALE = 0.5;
  const ANIMATIONS = {
    IDLE_SPEED : 8,
  };

  Game.Hero = class{
    constructor(game, x, y){
      this.game = game;
      this.sprite = this.game.add.sprite(x, y, CFG.ASSETS.GFX);
      this.sprite.scale.set(SCALE);
      this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
      this.sprite.body.collideWorldBounds = true;
      this.animations = {
        idle : this.sprite.animations.add('idle', [ 'hero-idle-1.png', 'hero-idle-2.png' ]),
      };

      // start with idle animation
      this.animations.idle.play(ANIMATIONS.IDLE_SPEED, true);
    }
  };

})(window.Phaser, window.Game, window.Game.Configuration);
