import ServerAuth from '../../services/auth';
import { 
  AUTH_LOGIN_FAILED, 
  AUTH_LOGIN_LOADING, 
  AUTH_LOGIN_SUCCESS, 
  AUTH_LOGOUT,
  AUTH_PROFILE_SUCCESS,
  AUTH_PROFILE_CHANGE
} from './auth.reducer';

const backend = new ServerAuth();

export const doLoginFailed = (error) => ({
  type: AUTH_LOGIN_FAILED,
  payload : {
    error : {
      message: error.response.data.message,
      status : error.response.data.status
    }
  }
});

export const doLogin = (email, password) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    const response = await backend.getToken(email, password);
    dispatch({ 
      type: AUTH_LOGIN_SUCCESS, 
      payload: { 
        token: response.data.body.token 
      } 
    });

    const responseProfil = await backend.getProfile(response.data.body.token);
    dispatch({
      type: AUTH_PROFILE_SUCCESS, 
      payload: {
        user: responseProfil.data.body
      }
    });
  } catch (error) {
    return dispatch(
      doLoginFailed(error)
    );
  }
};

export const doLogout = () => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    return dispatch({ type: AUTH_LOGOUT });
  } catch (error) {
    return dispatch(doLoginFailed(error));
  }
};

export const doChangeProfile = (firstName, lastName, token) => async (dispatch) => {
  try {
    const responseProfilChange = await backend.putProfile(firstName, lastName, token);
    dispatch({ 
      type: AUTH_PROFILE_CHANGE,
      payload: {
        user: responseProfilChange.data.body
      }
    });
  } catch (error) {
    return dispatch(doLoginFailed(error));
  }
};
