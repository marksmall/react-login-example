import {
  LOGIN_REQUESTED_SUCCESS,
  LOGIN_REQUESTED_FAILURE,
  LOGIN_VALIDATED
} from './user-management.actions';

const initialState = {
  user: null,
  error: null,
  login: {
    errors: {
      summary: null,
      email: null,
      password: null
    }
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUESTED_SUCCESS:
      return {
        ...state,
        user: action.user,
        error: null
      };
    case LOGIN_REQUESTED_FAILURE:
      return { ...state, error: action.error };
    case LOGIN_VALIDATED:
      return {
        ...state,
        login: {
          errors: action.errors
        }
      };

    default:
      return state;
  }
};

export default reducer;
