import React, { Component } from 'react';

import ReactMapboxGl from 'react-mapbox-gl';

import { ScaleControl, NavigationControl } from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

import { geocoder } from '../map/map-utils.js';
import MapPopup from './popup.component';
import { MAPBOX_TOKEN } from './map-utils';

const styles = {
  map: {
    position: 'absolute',
    left: 500,
    right: 0,
    bottom: 0,
    top: 0
  }
};

const Map = ReactMapboxGl({
  accessToken: MAPBOX_TOKEN
});

class AbstractMap extends Component {
  // map = null;

  onStyleLoad = map => {
    console.log('AbstractMap onStyleLoad');
    map.addControl(geocoder);
    map.addControl(new ScaleControl(), 'bottom-right');
    map.addControl(
      new NavigationControl({ showCompass: false }),
      'bottom-right'
    );

    this.props.onStyleLoad();
  };

  // componentDidUpdate = () => {
  //   if (this.map && this.map.state.map) {
  //     const stylemark = this.map.state.map.getStyle();
  //     console.log('MAP STLE: ', stylemark);
  //     const mapStyle = this.map.state.map.getStyle();
  //     if (mapStyle.name.toLowerCase() !== this.props.selectedBasemap) {
  //       this.map.state.map.setStyle(
  //         `mapbox://styles/mapbox/${this.props.selectedBasemap}-v9`
  //       );
  //     }
  //   }
  // };

  render() {
    const {
      center,
      zoom,
      selectedBasemap,
      selectedFeature,
      isPopupVisible,
      closePopup,
      children
    } = this.props;
    console.log('ABSTRACT MAP PROPS: ', this.props);

    return (
      <Map
        zoom={zoom}
        center={center}
        style={`mapbox://styles/mapbox/${selectedBasemap}-v9`}
        // style={'mapbox://styles/mapbox/basic-v9'}
        containerStyle={styles.map}
        onStyleLoad={this.onStyleLoad}
        // ref={el => (this.map = el)}
      >
        {isPopupVisible && selectedFeature && (
          <MapPopup feature={selectedFeature} close={closePopup} />
        )}
        {children}
      </Map>
    );
  }
}

export default AbstractMap;
