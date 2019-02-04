import { STADIUM_SELECTED } from './stadiums.actions';

const initialState = {
  selectedStadium: null,
  layers: new Set([
    { layer: 'contours', visible: true },
    { layer: 'stadiums', visible: true }
  ])
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STADIUM_SELECTED:
      return {
        ...state,
        selectedStadium: action.stadium
      };

    default:
      return state;
  }
};

export default reducer;
