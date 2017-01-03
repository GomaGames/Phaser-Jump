(( Phaser, CFG ) => {
  let hero;

  const preload = _ => {
    game.load.atlasJSONHash(CFG.ASSETS.GFX, CFG.ASSETS.ATLAS_PNG_PATH, CFG.ASSETS.ATLAS_JSON_PATH);
  };

  const create = _ => {
    hero = game.add.sprite(100, 100, CFG.ASSETS.GFX, 'hero-idle-1.png');
    hero.scale.setTo(0.5, 0.5);
  };

  const update = _ => {

  };

  const game = new Phaser.Game(CFG.GAME_WIDTH, CFG.GAME_HEIGHT, Phaser.AUTO, CFG.GAME_CONTAINER_ID, { preload, create, update });

})(window.Phaser, window.Game.Configuration);
