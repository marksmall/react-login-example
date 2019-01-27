import { postData } from '../utils/http';

export const LOGIN_REQUESTED_SUCCESS = 'LOGIN_REQUESTED_SUCCESS';
export const LOGIN_REQUESTED_FAILURE = 'LOGIN_REQUESTED_FAILURE';
export const VALIDATE_REGISTRATION = 'VALIDATE_REGISTRATION';

export const REGISTER_REQUESTED_SUCCESS = 'REGISTER_REQUESTED_SUCCESS';
export const REGISTER_REQUESTED_FAILURE = 'REGISTER_REQUESTED_FAILURE';

export const LOGOUT_REQUESTED_SUCCESS = 'LOGOUT_REQUESTED_SUCCESS';
export const LOGOUT_REQUESTED_FAILURE = 'LOGOUT_REQUESTED_FAILURE';

const API_PREFIX = '/api';
const API = {
  login: API_PREFIX + '/login',
  register: API_PREFIX + '/register',
  logout: API_PREFIX + '/logout'
};

/**
 * Call API with user credentials and receive a user object in response.
 * If there is an problem with the request, then dispatch an error action,
 * otherwise, dispatch a success action.
 */
export const login = (form, callback) => async dispatch => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  const response = await postData(API.login, JSON.stringify(form), headers);

  if (!response.ok) {
    const error = new Error();
    error.message = response.statusText;
    alert('Error logging in');

    return dispatch({
      type: LOGIN_REQUESTED_FAILURE,
      error
    });
  }

  const user = await response.json();
  dispatch({ type: LOGIN_REQUESTED_SUCCESS, user });
  callback();
};

/**
 * Call API with user details. If there is an problem with the
 * request, then dispatch an error action, otherwise, dispatch
 * a success action.
 */
export const register = form => async dispatch => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  const response = await postData(API.register, JSON.stringify(form), headers);

  if (!response.ok) {
    const error = new Error();
    error.message = response.statusText;
    alert('Error registering');

    return dispatch({
      type: REGISTER_REQUESTED_FAILURE,
      error
    });
  }

  dispatch({ type: REGISTER_REQUESTED_SUCCESS });
};

export const logout = () => async dispatch => {
  const response = await postData(API.logout, JSON.stringify({}));

  if (!response.ok) {
    const error = new Error();
    error.message = response.statusText;
    alert('Error logging out');

    return dispatch({
      type: LOGOUT_REQUESTED_FAILURE,
      error
    });
  }

  dispatch({ type: LOGOUT_REQUESTED_SUCCESS });
};
