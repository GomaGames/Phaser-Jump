(( Phaser, Game, CFG ) => {
  Game.hero = null;
  Game.platformsGroup = null;
  Game.enemiesGroup = null;
  Game.cursors = null;

  const preload = _ => {
    game.load.atlasJSONHash(CFG.ASSETS.GFX, CFG.ASSETS.ATLAS_PNG_PATH, CFG.ASSETS.ATLAS_JSON_PATH);
  };

  const create = _ => {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = CFG.GRAVITY;
    game.stage.backgroundColor = CFG.BG_COLOR;

    // keep track of enemies
    Game.enemiesGroup = game.add.group();

    // add some platforms
    Game.platformsGroup = game.add.group();
    Game.LevelDesigner.load(game, 1);

    // Level loader sets CFG.GAME_HEIGHT
    game.world.setBounds(0, 0, CFG.GAME_WIDTH, CFG.GAME_HEIGHT);

    Game.hero = new Game.Hero(game, 500, CFG.GAME_HEIGHT - 200);
    game.camera.follow(Game.hero.sprite, null, CFG.CAMERA_LERP, CFG.CAMERA_LERP);

    Game.cursors = game.input.keyboard.createCursorKeys();
    Game.cursors.fire = game.input.keyboard.addKey(Phaser.KeyCode.SPACEBAR);
    Game.cursors.fire.onUp.add( Game.hero.handleFire.bind(Game.hero) );

  };

  const update = _ => {
  };

  const game = new Phaser.Game(CFG.STAGE_WIDTH, CFG.STAGE_HEIGHT, Phaser.AUTO, CFG.GAME_CONTAINER_ID, { preload, create, update });

})(window.Phaser, window.Game, window.Game.Configuration);
