import ServerAuth from '../services/auth';
import { AUTH_LOGIN_FAILED, AUTH_LOGIN_LOADING, AUTH_LOGIN_SUCCESS } from './authReducer';

const backend = new ServerAuth();

export const doLoginSuccess = (paylaod) => ({
  type: AUTH_LOGIN_SUCCESS,
  paylaod
});

export const doLoginFailed = (paylaod) => ({
  type: AUTH_LOGIN_FAILED,
  paylaod
});

export const doLoginLoading = () => ({
  type: AUTH_LOGIN_LOADING
});

export const doLogin = (email, password) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_LOADING });
  try {
    const response = await backend.getToken(email, password);
    return dispatch({ type: AUTH_LOGIN_SUCCESS, payload: response.data.body.token });
  } catch (error) {
    return dispatch(doLoginFailed(error.message));
  }
};
