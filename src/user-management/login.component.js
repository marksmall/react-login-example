import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

import LoginForm from './login-form.component';

import style from './login.module.css';

const Login = ({ login, location }) => (
  <div className={style['login-container']}>
    <DocumentTitle title="Login">
      <LoginForm login={login} location={location} />
    </DocumentTitle>
  </div>
);

Login.propTypes = {
  login: PropTypes.func.isRequired
};

export default Login;
