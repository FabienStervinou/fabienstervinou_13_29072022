import { combineReducers } from 'redux';
import { authReducer } from '../features/auth/auth.reducer.js';

export default combineReducers({
  auth: authReducer
});
