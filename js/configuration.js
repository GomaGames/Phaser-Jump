(Game => {
  // get or create our Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  Game.Configuration = {
    GAME_CONTAINER_ID : 'game-container',
    BG_COLOR : '#F9F99E',
    GAME_WIDTH : 750,
    GAME_HEIGHT : 1334,
    ASSETS : {
      GFX : 'GFX',
      ATLAS_PNG_PATH : '/assets/texture-atlas/jump.png',
      ATLAS_JSON_PATH : '/assets/texture-atlas/jump.json'
    }
  };

})(window.Game);
