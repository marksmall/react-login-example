import React from 'react';
import PropTypes from 'prop-types';

import style from './layer-switcher.module.css';

const LayerSwitcher = ({ layers, toggleLayerVisibility }) => (
  <ul className={style['layer-switcher-container']}>
    {layers.map(layer => (
      <li key={layer.layer} className={style.layer}>
        <input
          id={layer.layer}
          name="basemap"
          type="checkbox"
          onChange={() => toggleLayerVisibility(layer.layer)}
          checked={layer.visible}
        />
        <label htmlFor={layer.layer}>{layer.layer}</label>
      </li>
    ))}
  </ul>
);

LayerSwitcher.propTypes = {
  layers: PropTypes.array.isRequired,
  toggleLayerVisibility: PropTypes.func.isRequired
};

export default LayerSwitcher;
