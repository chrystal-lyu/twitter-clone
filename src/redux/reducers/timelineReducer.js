import actionTypes from '../actions/actionTypes';

const initialState = {
  timeline: [],
  searchResult: []
}

const timelineReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_TIMELINE_JSON: {
      return state;
    }

    case actionTypes.RECEIVE_TIMELINE_JSON: {
      const { timeline } = action;
      return {
        ...state,
        timeline
      };
    }

    case actionTypes.RECEIVE_SEARCH_JSON: {
      const { result } = action;
      return {
        ...state,
        searchResult: result
      }
    }
    
    default:
      return state;
  }
}

export default timelineReducer;
