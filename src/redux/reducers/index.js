import { combineReducers } from 'redux';
import timelineReducer from './timelineReducer';
import trendReducer from './trendReducer';

export default combineReducers({ 
  timelineReducer,
  trendReducer
});
