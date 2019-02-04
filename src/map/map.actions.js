export const BASEMAP_SELECTED = 'BASEMAP_SELECTED';

export const OPEN_POPUP = 'OPEN_POPUP';
export const CLOSE_POPUP = 'CLOSE_POPUP';
export const TOGGLE_LAYER_VISIBILITY = 'TOGGLE_LAYER_VISIBILITY';

export const selectBasemap = basemap => ({ type: BASEMAP_SELECTED, basemap });

export const openPopup = () => ({ type: OPEN_POPUP });

export const closePopup = () => ({ type: CLOSE_POPUP });

export const toggleLayerVisibility = layer => ({
  type: TOGGLE_LAYER_VISIBILITY,
  layer
});
