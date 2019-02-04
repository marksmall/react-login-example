import React from 'react';
import PropTypes from 'prop-types';

import style from './mapstyle-switcher.module.css';

const MapStyleSwitcher = ({ basemaps, selectedBasemap, selectBasemap }) => {
  console.log('SELECTED BASEMPA: ', selectedBasemap);
  return (
    <ul className={style['mapstyle-switcher-container']}>
      {basemaps.map((basemap, index) => (
        <li key={index} className={style.basemap}>
          <input
            id={basemap}
            name="basemap"
            type="radio"
            onChange={() => selectBasemap(basemap)}
            value={basemap}
            checked={basemap === selectedBasemap ? true : false}
          />
          <label htmlFor={basemap}>{basemap}</label>
        </li>
      ))}
    </ul>
  );
};

MapStyleSwitcher.propTypes = {
  basemaps: PropTypes.array.isRequired,
  selectBasemap: PropTypes.func.isRequired
};

export default MapStyleSwitcher;
