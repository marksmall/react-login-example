import React from 'react';
import { Link } from 'react-router-dom';

import style from './logout.module.css';

const Logout = () => (
  <div className={style['logout-container']}>
    <h3>Logout</h3>

    <p>
      You have successfully logged out. <Link to="/login">Log in again?</Link>
    </p>
  </div>
);

export default Logout;
