((Phaser, Game, CFG) => {
  // get or create Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  const SCALE = 1;
  // const MOVE_SPEED = 850;
  // const JUMP_VELOCITY = 2950; // also height, gravity:9750 jumpVel:2950 = can clear 400px

  Game.Enemy = class{
    constructor(game, x, y, spriteLabel){
      this.game = game;
      this.sprite = this.game.add.sprite(x, y, CFG.ASSETS.GFX, spriteLabel);
      this.sprite.scale.set(SCALE);
      this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
      // this.sprite.body.setSize(30, 80, 52, 25);

      // allows passing through platforms
      // #TODO this will be bad for checking other objects though
      this.sprite.body.checkCollision.up =
      this.sprite.body.checkCollision.left =
      this.sprite.body.checkCollision.right = false;

      this.sprite.update = this.update.bind(this);
    }

    update(){
      let hitPlatform = this.game.physics.arcade.collide(this.sprite, Game.platformsGroup);
      // let jumping = this.sprite.body.velocity.y !== 0;

      // wrap around stage
      if(this.sprite.x > CFG.GAME_WIDTH){
        this.sprite.x = -this.sprite.width;
      } else if(this.sprite.x < -this.sprite.width){
        this.sprite.x = CFG.GAME_WIDTH;
      }

    }
  };

})(window.Phaser, window.Game, window.Game.Configuration);

