(( Phaser, Game, CFG ) => {
  let hero;
  let platforms = [];
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

    let p = new Game.Platform(game, 0, 200, 4);
    platforms.push(p); // gross, fix this
    Game.platformsGroup.add(p.sprite);
    p = new Game.Platform(game, 550, 880, 4);
    platforms.push(p); // gross, fix this
    Game.platformsGroup.add(p.sprite);
    p = new Game.Platform(game, 300, 480, 4);
    platforms.push(p); // gross, fix this
    Game.platformsGroup.add(p.sprite);

    p = new Game.Platform(game, -100, 80, 4);
    platforms.push(p); // gross, fix this
    Game.platformsGroup.add(p.sprite);
    p = new Game.Platform(game, 300, 80, 4);
    platforms.push(p); // gross, fix this
    Game.platformsGroup.add(p.sprite);
    p = new Game.Platform(game, 700, 80, 2);
    platforms.push(p); // gross, fix this
    Game.platformsGroup.add(p.sprite);

    hero = new Game.Hero(game, 500, CFG.GAME_HEIGHT - 200);
  };

  const update = _ => {
  };

  const game = new Phaser.Game(CFG.GAME_WIDTH, CFG.GAME_HEIGHT, Phaser.AUTO, CFG.GAME_CONTAINER_ID, { preload, create, update });

})(window.Phaser, window.Game, window.Game.Configuration);
