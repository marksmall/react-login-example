import React from 'react';
import PropTypes from 'prop-types';

import { Popup } from 'react-mapbox-gl';

import { ReactComponent as CloseIcon } from './close.svg';
import styles from './popup.module.css';

const MapPopup = ({ feature, close }) => (
  <>
    {feature._geometry && (
      <Popup coordinates={feature._geometry.coordinates}>
        <div className={styles.popup}>
          <div className={styles['popup-header']}>
            <h3>{feature.properties.Team}</h3>
            <button onClick={close} className={styles['close-btn']}>
              <CloseIcon className={styles.icon} alt="Close" />
            </button>
          </div>

          <div className={styles['popup-body']}>
            <ul>
              {Object.keys(feature.properties).map(key => (
                <li key={key}>
                  {key}: {feature.properties[key]}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Popup>
    )}
  </>
);

MapPopup.propTypes = {
  feature: PropTypes.object.isRequired,
  close: PropTypes.func.isRequired
};

export default MapPopup;
