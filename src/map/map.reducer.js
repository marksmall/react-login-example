import {
  BASEMAP_SELECTED,
  OPEN_POPUP,
  CLOSE_POPUP,
  TOGGLE_LAYER_VISIBILITY
} from './map.actions';

const basemaps = ['basic', 'streets', 'bright', 'light', 'dark', 'satellite'];

const initialState = {
  isLoading: false,
  error: null,
  basemaps,
  selectedBasemap: 'basic',
  isPopupVisible: false,
  layers: new Set([
    { layer: 'contours', visible: true },
    { layer: 'stadiums', visible: true }
  ])
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BASEMAP_SELECTED:
      return { ...state, selectedBasemap: action.basemap };

    case OPEN_POPUP:
      return {
        ...state,
        isPopupVisible: true
      };

    case CLOSE_POPUP:
      return {
        ...state,
        isPopupVisible: false
      };

    case TOGGLE_LAYER_VISIBILITY:
      // Toggle whether layer is visible or not.
      const layersArray = Array.from(state.layers).map(layer => {
        if (layer.layer === action.layer) {
          return {
            ...layer,
            visible: !layer.visible
          };
        } else {
          return layer;
        }
      });

      return {
        ...state,
        layers: new Set(layersArray)
      };

    default:
      return state;
  }
};

export default reducer;
