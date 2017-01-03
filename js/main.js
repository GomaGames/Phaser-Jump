(( Phaser, Game, CFG ) => {
  let hero;
  let platforms = [];
  let platformsGroup;

  const preload = _ => {
    game.load.atlasJSONHash(CFG.ASSETS.GFX, CFG.ASSETS.ATLAS_PNG_PATH, CFG.ASSETS.ATLAS_JSON_PATH);
  };

  const create = _ => {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = CFG.GRAVITY;
    game.stage.backgroundColor = CFG.BG_COLOR;
    hero = new Game.Hero(game);

    // add some platforms
    platformsGroup = game.add.group();
    let p = new Game.Platform(game, 0, 200, 4);
    platforms.push(p); // gross, fix this
    platformsGroup.add(p.sprite);
  };

  const update = _ => {
    var hitPlatform = game.physics.arcade.collide(hero.sprite, platformsGroup);
  };

  const game = new Phaser.Game(CFG.GAME_WIDTH, CFG.GAME_HEIGHT, Phaser.AUTO, CFG.GAME_CONTAINER_ID, { preload, create, update });

})(window.Phaser, window.Game, window.Game.Configuration);
