import React from 'react';
import PropTypes from 'prop-types';

import { Layer, Source } from 'react-mapbox-gl';

const StadiumLayer = ({ selectStadium }) => (
  <>
    <Source
      id="stadiums-source"
      tileJsonSource={{
        type: 'vector',
        url: 'mapbox://marksmall.cjrp328yu0uvq2rnv31cnin31-2ymq4'
      }}
    />
    <Layer
      type="symbol"
      id="stadiums"
      sourceId="stadiums-source"
      sourceLayer="stadiums-2015-03-02"
      onClick={selectStadium}
      layout={{ visibility: 'visible', 'icon-image': 'stadium-15' }}
    />
  </>
);

StadiumLayer.propTypes = {
  selectStadium: PropTypes.func.isRequired
};

export default StadiumLayer;
