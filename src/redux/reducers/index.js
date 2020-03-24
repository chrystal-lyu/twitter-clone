import { combineReducers } from 'redux';
import timelineReducer from './timelineReducer';
import trendReducer from './trendReducer';
import searchReducer from './searchReducer';

export default combineReducers({ 
  timelineReducer,
  trendReducer,
  searchReducer
});
