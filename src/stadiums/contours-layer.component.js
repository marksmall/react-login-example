import React from 'react';
import PropTypes from 'prop-types';

import { Layer, Source } from 'react-mapbox-gl';

const ContoursLayer = () => (
  <>
    <Source
      id="contours-source"
      tileJsonSource={{
        type: 'vector',
        url: 'mapbox://mapbox.mapbox-terrain-v2'
      }}
    />
    <Layer
      type="line"
      id="contours"
      sourceId="contours-source"
      sourceLayer="contour"
      layout={{
        visibility: 'visible',
        'line-join': 'round',
        'line-cap': 'round'
      }}
      paint={{ 'line-color': '#877b59', 'line-width': 1 }}
    />
  </>
);

ContoursLayer.propTypes = {};

export default ContoursLayer;
