import { combineReducers } from 'redux';
import timelineReducer from './timelineReducer';
import trendReducer from './trendReducer';
import searchReducer from './searchReducer';
import authReducer from './authReducer';

export default combineReducers({ 
  timelineReducer,
  trendReducer,
  searchReducer,
  auth: authReducer
});
