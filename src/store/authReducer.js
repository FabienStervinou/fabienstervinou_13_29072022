export const initialAuthState = {
  token: undefined,
  error: undefined,
  fetching: false
};

export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED';
export const AUTH_LOGIN_LOADING = 'AUTH_LOGIN_LOADING';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        fetching: false,
        error: undefined,
        token: action.paylaod
      };
    case AUTH_LOGIN_FAILED: 
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    case AUTH_LOGIN_LOADING: 
      return {
        ...state,
        fetching: true
      };
    case AUTH_LOGOUT: 
      return {
        initialAuthState
      };
    
    default:
      return state;
  }
};