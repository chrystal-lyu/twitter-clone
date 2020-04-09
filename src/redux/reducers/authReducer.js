import actionTypes from '../actions/actionTypes';

const initialState = {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return action.currentUser;
    default:
      return state;
  }
};

export default authReducer;
