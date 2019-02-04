import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  getBasemaps,
  getSelectedBasemap,
  isPopupVisible,
  getToggleableLayers
} from '../map/map.selector';
import { getSelectedStadium } from './stadiums.selector';
import {
  selectBasemap,
  closePopup,
  toggleLayerVisibility
} from '../map/map.actions';
import { selectStadium } from './stadiums.actions';

import StadiumsMap from './stadiums-map.component';

const mapStateToProps = state => {
  return {
    basemaps: getBasemaps(state),
    selectedBasemap: getSelectedBasemap(state),
    selectedStadium: getSelectedStadium(state),
    isPopupVisible: isPopupVisible(state),
    layers: getToggleableLayers(state)
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    { selectBasemap, selectStadium, closePopup, toggleLayerVisibility },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StadiumsMap);
