export const getBasemaps = state => state.map.basemaps;

export const getSelectedBasemap = state => state.map.selectedBasemap;

export const isPopupVisible = state => state.map.isPopupVisible;

export const getToggleableLayers = state => Array.from(state.map.layers);
