import actionTypes from '../actions/actionTypes';

const initialState = {
  trends: []
}

const trendReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_TREND_JSON: {
      return state;
    }

    case actionTypes.RECEIVE_TREND_JSON: {
      const { trends } = action;
      return {
        trends
      }
    }
    
    default:
      return state;
  }
}

export default trendReducer;