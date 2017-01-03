(Game => {
  // get or create our Game module
  if( Game === undefined ){
    Game = window.Game = {};
  }

  const STAGE_WIDTH = 750;
  const STAGE_HEIGHT = 1334;

  Game.Configuration = {
    GAME_CONTAINER_ID : 'game-container',
    BG_COLOR : '#F9F99E',
    STAGE_WIDTH,
    STAGE_HEIGHT,
    GAME_WIDTH : STAGE_WIDTH,
    GAME_HEIGHT : STAGE_HEIGHT*10,
    GRAVITY : 9750,
    CAMERA_LERP : 0.25,
    ASSETS : {
      GFX : 'GFX',
      ATLAS_PNG_PATH : '/assets/texture-atlas/jump.png',
      ATLAS_JSON_PATH : '/assets/texture-atlas/jump.json'
    }
  };

})(window.Game);
