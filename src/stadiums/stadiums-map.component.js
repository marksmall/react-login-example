import React, { Component } from 'react';

import AbstractMap from '../map/map.component';
import MapStyleSwitcher from '../mapstyle-switcher/mapstyle-switcher.component';
import LayerSwitcher from '../layer-switcher/layer-switcher.component';
import StadiumLayer from './stadiums-layer.component';
import ContoursLayer from './contours-layer.component';
class StormerMap extends Component {
  state = {
    center: [-3.165556, 55.961667],
    zoom: [5],
    selectedAdminProvince: null
  };

  onStyleLoad = map => {
    console.log('Stadiums onStyleLoad');
  };

  render() {
    const {
      basemaps,
      selectBasemap,
      selectedBasemap,
      selectStadium,
      isPopupVisible,
      closePopup,
      selectedStadium,
      layers,
      toggleLayerVisibility
    } = this.props;
    console.log('STADIUMS MAP PROPS: ', this.props);

    return (
      <AbstractMap
        selectedBasemap={selectedBasemap}
        zoom={this.state.zoom}
        center={this.state.center}
        onStyleLoad={this.onStyleLoad}
        selectedFeature={selectedStadium}
        isPopupVisible={isPopupVisible}
        closePopup={closePopup}
      >
        <MapStyleSwitcher
          basemaps={basemaps}
          selectedBasemap={selectedBasemap}
          selectBasemap={selectBasemap}
        />
        <LayerSwitcher
          layers={Array.from(layers)}
          toggleLayerVisibility={toggleLayerVisibility}
        />
        {/* <ContoursLayer />
        <StadiumLayer selectStadium={selectStadium} /> */}
        {layers.map(layer => {
          if (layer.layer === 'contours' && layer.visible) {
            return <ContoursLayer key={layer.layer} />;
          } else if (layer.layer === 'stadiums' && layer.visible) {
            return (
              <StadiumLayer key={layer.layer} selectStadium={selectStadium} />
            );
          } else {
            return null;
          }
        })}
      </AbstractMap>
    );
  }
}

export default StormerMap;
