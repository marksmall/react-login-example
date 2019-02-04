import { openPopup } from '../map/map.actions';

export const STADIUM_SELECTED = 'STADIUM_SELECTED';

export const selectStadium = event => dispatch => {
  console.log('Select Stadium: ', event);
  // Get map and point clicked from the event.
  const map = event.target;
  const { point } = event;
  // Get the feature clicked.
  const stadium = map.queryRenderedFeatures(point, {
    layers: ['stadiums']
  })[0];

  dispatch({ type: STADIUM_SELECTED, stadium });
  dispatch(openPopup());
};
