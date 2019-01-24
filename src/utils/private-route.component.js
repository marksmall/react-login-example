import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const fakeAuth = {
  isAuthenticated: false,
  athenticate(callback) {
    this.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  logout(callback) {
    this.isAuthenticated = false;
    setTimeout(callback, 100);
  }
};

const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      user ? <Component {...props} /> : <Redirect to="/login" />
    }
  />
);

PrivateRoute.propTypes = {
  // onSubmit: PropTypes.func.isRequired,
  // onChange: PropTypes.func.isRequired,
  // errors: PropTypes.object.isRequired,
  // user: PropTypes.object.isRequired
};

export default PrivateRoute;
