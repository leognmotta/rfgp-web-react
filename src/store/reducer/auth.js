import * as actionTypes from '../actions/actionTypes';

const initialState = {
  isLogged: 'sometext'
};

const reducer = (state = initialState, action) => {
  switch (action) {
    case actionTypes.LOGIN:
      return {
        ...state,
        isLogged: true
      };
    default:
      return state;
  }
};

export default reducer;
