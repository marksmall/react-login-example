import { postData } from '../utils/http';

export const LOGIN_REQUESTED_SUCCESS = 'LOGIN_REQUESTED_SUCCESS';
export const LOGIN_REQUESTED_FAILURE = 'LOGIN_REQUESTED_FAILURE';
export const LOGIN_VALIDATED = 'LOGIN_VALIDATED';

export const REGISTER_REQUESTED_SUCCESS = 'REGISTER_REQUESTED_SUCCESS';
export const REGISTER_REQUESTED_FAILURE = 'REGISTER_REQUESTED_FAILURE';

/**
 * Call API with user credentials and receive a user object in response.
 * If there is an problem with the request, then dispatch an error action,
 * otherwise, dispatch a success action.
 */
export const login = form => async dispatch => {
  console.log('FORM: ', form);
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  const response = await postData('/api/login', JSON.stringify(form), headers);

  if (!response.ok) {
    const error = new Error();
    error.message = response.statusText;

    return dispatch({
      type: LOGIN_REQUESTED_FAILURE,
      error
    });
  }

  const user = await response.json();
  console.log('USER: ', user);
  dispatch({ type: LOGIN_REQUESTED_SUCCESS, user });
};

/**
 * Call API with user credentials and receive a user object in response.
 * If there is an problem with the request, then dispatch an error action,
 * otherwise, dispatch a success action.
 */
export const register = form => async dispatch => {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
  const response = await postData('/api/register', form, headers);

  if (!response.ok) {
    const error = new Error();
    error.message = response.statusText;

    return dispatch({
      type: REGISTER_REQUESTED_FAILURE,
      error
    });
  }

  const user = response.json();
  dispatch({ type: REGISTER_REQUESTED_SUCCESS, user });
};
