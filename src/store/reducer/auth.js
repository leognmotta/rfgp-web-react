import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLogged: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogged: true
      };
    case actionTypes.LOGOUT:
      return {
        ...state,
        isLogged: false
      };
    default:
      return state;
  }
};

export default reducer;
