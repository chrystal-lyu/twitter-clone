import actionTypes from '../actions/actionTypes';

const initialState = {
  timeline: [],
  trends: [],
  searchResult: []
}

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TIMELINE:
      const { timeline } = action;
      return {
        ...state,
        timeline 
      };
    default:
      return state;
  }
}

export default timelineReducer;
