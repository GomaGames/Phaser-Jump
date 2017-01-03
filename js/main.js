(( Phaser, CFG ) => {
  let hero;
  let heroIdleAnim;

  const preload = _ => {
    game.load.atlasJSONHash(CFG.ASSETS.GFX, CFG.ASSETS.ATLAS_PNG_PATH, CFG.ASSETS.ATLAS_JSON_PATH);
  };

  const create = _ => {
    game.stage.backgroundColor = "#F9F99E";
    hero = game.add.sprite(100, 100, CFG.ASSETS.GFX);
    hero.scale.set(0.5);
    heroIdleAnim = hero.animations.add('idle', [ 'hero-idle-1.png', 'hero-idle-2.png' ]);

    heroIdleAnim.play(8, true);
  };

  const update = _ => {

  };

  const game = new Phaser.Game(CFG.GAME_WIDTH, CFG.GAME_HEIGHT, Phaser.AUTO, CFG.GAME_CONTAINER_ID, { preload, create, update });

})(window.Phaser, window.Game.Configuration);
