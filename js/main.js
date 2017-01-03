(( Phaser, Game, CFG ) => {
  let hero;
  let platforms = [];
  let platformsGroup;
  let cursors;

  const preload = _ => {
    game.load.atlasJSONHash(CFG.ASSETS.GFX, CFG.ASSETS.ATLAS_PNG_PATH, CFG.ASSETS.ATLAS_JSON_PATH);
  };

  const create = _ => {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = CFG.GRAVITY;
    game.stage.backgroundColor = CFG.BG_COLOR;

    cursors = game.input.keyboard.createCursorKeys();

    // add some platforms
    platformsGroup = game.add.group();

    let p = new Game.Platform(game, 0, 200, 4);
    platforms.push(p); // gross, fix this
    platformsGroup.add(p.sprite);
    p = new Game.Platform(game, 550, 880, 4);
    platforms.push(p); // gross, fix this
    platformsGroup.add(p.sprite);
    p = new Game.Platform(game, 300, 480, 4);
    platforms.push(p); // gross, fix this
    platformsGroup.add(p.sprite);

    p = new Game.Platform(game, 0, 80, 4);
    platforms.push(p); // gross, fix this
    platformsGroup.add(p.sprite);
    p = new Game.Platform(game, 400, 80, 4);
    platforms.push(p); // gross, fix this
    platformsGroup.add(p.sprite);

    hero = new Game.Hero(game, 500, CFG.GAME_HEIGHT - 200);
  };

  const update = _ => {
    var hitPlatform = game.physics.arcade.collide(hero.sprite, platformsGroup);

    hero.sprite.body.velocity.x = 0;
    if (cursors.left.isDown) {
      hero.sprite.body.velocity.x = -150;
      // player.animations.play('left');
    } else if (cursors.right.isDown) {
      hero.sprite.body.velocity.x = 150;
      // player.animations.play('right');
    } else {
      //  Stand still
      // player.animations.stop();
    }

    //  Allow the player to jump if they are touching the ground.
    if (cursors.up.isDown && hero.sprite.body.touching.down && hitPlatform)
    {
      hero.sprite.body.velocity.y = -1350;
    }
  };

  const game = new Phaser.Game(CFG.GAME_WIDTH, CFG.GAME_HEIGHT, Phaser.AUTO, CFG.GAME_CONTAINER_ID, { preload, create, update });

})(window.Phaser, window.Game, window.Game.Configuration);
