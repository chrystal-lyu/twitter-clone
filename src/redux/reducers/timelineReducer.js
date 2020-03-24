import actionTypes from '../actions/actionTypes';

const initialState = {
  timeline: [],
  trends: [],
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

    case actionTypes.REQUEST_TREND_JSON: {
      return state;
    }

    case actionTypes.RECEIVE_TREND_JSON: {
      const { trends } = action;
      return {
        ...state,
        trends
      }
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
