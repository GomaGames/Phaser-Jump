(window => {
  // get or create our Game module
  window.Game = window.Game || {};

  window.Game.Configuration = {
    GAME_CONTAINER_ID : 'game-container',
    GAME_WIDTH : 750,
    GAME_HEIGHT : 1334,
    ASSETS : {
      GFX : 'GFX',
      ATLAS_PNG_PATH : '/assets/texture-atlas/jump.png',
      ATLAS_JSON_PATH : '/assets/texture-atlas/jump.json'
    }
  };

})(window);
