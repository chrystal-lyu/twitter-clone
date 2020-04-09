import actionTypes from '../actions/actionTypes';

const initialState = {
  timeline: [],
  profile_timeline: []
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

    case actionTypes.RECEIVE_PROFILE_TIMELINE_JSON: {
      const { profile_timeline } = action;
      return {
        ...state,
        profile_timeline
      }
    }

    default:
      return state;
  }
}

export default timelineReducer;
