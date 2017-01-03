((Phaser, Game, CFG) => {
  // get or create Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  const SCALE = 1;
  const MOVE_SPEED = 850;
  const JUMP_VELOCITY = 2950; // also height, gravity:9750 jumpVel:2950 = can clear 400px
  const ANIMATIONS = {
    IDLE_SPEED : 8,
    LEFT_SPEED : 8,
    RIGHT_SPEED : 8,
    JUMP_SPEED : 4,
  };

  Game.Hero = class{
    constructor(game, x, y){
      this.game = game;
      this.sprite = this.game.add.sprite(x, y, CFG.ASSETS.GFX);
      this.sprite.scale.set(SCALE);
      this.game.physics.enable(this.sprite, Phaser.Physics.ARCADE);
      this.sprite.body.setSize(30, 80, 52, 25);
      this.animations = {
        idle : this.sprite.animations.add('idle', [ 'hero-idle-1.png', 'hero-idle-2.png' ]),
        left : this.sprite.animations.add('left', [ 'hero-left-1.png', 'hero-left-2.png' ]),
        right : this.sprite.animations.add('right', [ 'hero-right-1.png', 'hero-right-2.png' ]),
        jump : this.sprite.animations.add('jump', [ 'hero-jump-2.png', 'hero-jump-1.png' ]),
      };

      // allows passing through platforms
      // #TODO this will be bad for checking other objects though
      this.sprite.body.checkCollision.up =
      this.sprite.body.checkCollision.left =
      this.sprite.body.checkCollision.right = false;

      this.sprite.update = this.update.bind(this);
    }

    update(){
      let hitPlatform = this.game.physics.arcade.collide(this.sprite, Game.platformsGroup);
      let jumping = this.sprite.body.velocity.y !== 0;

      this.sprite.body.velocity.x = 0;
      if (Game.cursors.left.isDown) {
        this.sprite.body.velocity.x = -MOVE_SPEED;
        if(!jumping && this.sprite.animations.currentAnim !== this.animations.left){
          this.animations.left.play(ANIMATIONS.LEFT_SPEED, true);
        }
      } else if (Game.cursors.right.isDown) {
        this.sprite.body.velocity.x = MOVE_SPEED;
        if(!jumping && this.sprite.animations.currentAnim !== this.animations.right){
          this.animations.right.play(ANIMATIONS.RIGHT_SPEED, true);
        }
      } else if(!jumping){
        //  Stand still
        if(this.sprite.animations.currentAnim !== this.animations.idle){
          this.animations.idle.play(ANIMATIONS.IDLE_SPEED, true);
        }
      }

      //  Allow the player to jump if they are touching the ground.
      if (Game.cursors.up.isDown && this.sprite.body.touching.down && hitPlatform)
      {
        this.sprite.body.velocity.y = -JUMP_VELOCITY;
        if(this.sprite.animations.currentAnim !== this.animations.jump){
          this.animations.jump.play(ANIMATIONS.JUMP_SPEED, false);
        }
      }

      // wrap around stage
      if(this.sprite.x > CFG.GAME_WIDTH){
        this.sprite.x = -this.sprite.width;
      } else if(this.sprite.x < -this.sprite.width){
        this.sprite.x = CFG.GAME_WIDTH;
      }

    }
  };

})(window.Phaser, window.Game, window.Game.Configuration);
