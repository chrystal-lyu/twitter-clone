import actionTypes from '../actions/actionTypes';

const initialState = {
  user: []
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      const { user } = action
      return {
        user
      }

    case actionTypes.LOGOUT:
      return {};
      
    default:
      return state;
  }
};

export default authReducer;
