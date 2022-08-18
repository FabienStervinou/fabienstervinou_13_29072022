import { compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { authReducer } from './authReducer.js';

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const store = configureStore({
  reducer: {
    auth: authReducer
  },
  composeEnhancers
}); 

export default store;
