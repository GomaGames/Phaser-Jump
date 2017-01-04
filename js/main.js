(( Phaser, Game, CFG ) => {
  let hero;
  Game.platformsGroup;
  Game.cursors = null;

  const preload = _ => {
    game.load.atlasJSONHash(CFG.ASSETS.GFX, CFG.ASSETS.ATLAS_PNG_PATH, CFG.ASSETS.ATLAS_JSON_PATH);
  };

  const create = _ => {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = CFG.GRAVITY;
    game.stage.backgroundColor = CFG.BG_COLOR;

    Game.cursors = game.input.keyboard.createCursorKeys();

    // add some platforms
    Game.platformsGroup = game.add.group();
    Game.LevelDesigner.load(game, 1);

    // Level loader sets CFG.GAME_HEIGHT
    game.world.setBounds(0, 0, CFG.GAME_WIDTH, CFG.GAME_HEIGHT);

    hero = new Game.Hero(game, 500, CFG.GAME_HEIGHT - 200);
    game.camera.follow(hero.sprite, null, CFG.CAMERA_LERP, CFG.CAMERA_LERP);

    let testBaddy = new Game.GhostEnemy(game, 200, 3000);
    let testBaddy2 = new Game.SparkEnemy(game, 400, 3400);
  };

  const update = _ => {
  };

  const game = new Phaser.Game(CFG.STAGE_WIDTH, CFG.STAGE_HEIGHT, Phaser.AUTO, CFG.GAME_CONTAINER_ID, { preload, create, update });

})(window.Phaser, window.Game, window.Game.Configuration);
