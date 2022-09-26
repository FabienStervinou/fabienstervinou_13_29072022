export const initialAuthState = {
  isAuthenticated: JSON.parse(window.localStorage.getItem('authenticated')),
  token: null,
  error: null,
  fetching: false,
  user: []
};

export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILED = 'AUTH_LOGIN_FAILED';
export const AUTH_LOGIN_LOADING = 'AUTH_LOGIN_LOADING';
export const AUTH_PROFILE_SUCCESS = 'AUTH_PROFILE_SUCCESS';
export const AUTH_PROFILE_CHANGE = 'AUTH_PROFILE_CHANGE';
export const AUTH_LOGOUT = 'AUTH_LOGOUT';

export const authReducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        fetching: false,
        token: action.payload.token
      };
    case AUTH_LOGIN_FAILED: 
      return {
        fetching: false,
        error: action.payload.error
      };
    case AUTH_LOGIN_LOADING: 
      return {
        ...state,
        fetching: true
      };
    case AUTH_PROFILE_SUCCESS:
      return {
        ...state,
        fetching: false,
        user: action.payload.user
      };
    case AUTH_PROFILE_CHANGE:
      return {
        ...state,
        user: action.payload.user
      };
    case AUTH_LOGOUT: 
      return initialAuthState;
    
    default:
      return state;
  }
};
