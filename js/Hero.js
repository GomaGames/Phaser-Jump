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

      // allows passing through platforms
      // #TODO this will be bad for checking other objects though
      this.sprite.body.checkCollision.up =
      this.sprite.body.checkCollision.left =
      this.sprite.body.checkCollision.right = false;

      // start with idle animation
      this.animations.idle.play(ANIMATIONS.IDLE_SPEED, true);

      this.sprite.update = this.update.bind(this);
    }

    update(){
      let hitPlatform = this.game.physics.arcade.collide(this.sprite, Game.platformsGroup);

      this.sprite.body.velocity.x = 0;
      if (Game.cursors.left.isDown) {
        this.sprite.body.velocity.x = -MOVE_SPEED;
        // player.animations.play('left');
      } else if (Game.cursors.right.isDown) {
        this.sprite.body.velocity.x = MOVE_SPEED;
        // player.animations.play('right');
      } else {
        //  Stand still
        // player.animations.stop();
      }

      //  Allow the player to jump if they are touching the ground.
      if (Game.cursors.up.isDown && this.sprite.body.touching.down && hitPlatform)
      {
        this.sprite.body.velocity.y = -JUMP_VELOCITY;
      }

    }
  };

})(window.Phaser, window.Game, window.Game.Configuration);
