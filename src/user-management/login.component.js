import React from 'react';
import PropTypes from 'prop-types';

import LoginForm from './login-form.component';

import style from './login.module.css';

const Login = ({ login, location }) => (
  <div className={style['login-container']}>
    <LoginForm login={login} location={location} />
  </div>
);

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default Login;
