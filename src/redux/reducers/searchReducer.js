import actionTypes from '../actions/actionTypes';

const initialState = {
  searchResult: []
}

const searchReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.RECEIVE_SEARCH_JSON: {
      const { result } = action;
      return {
        searchResult: result
      };
    }
    default:
      return state;
  }
}

export default searchReducer;
