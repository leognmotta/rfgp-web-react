import { createActions, createReducer } from 'reduxsauce';

/**
 * Create action types & creators
 */
export const { Types, Creators } = createActions({
  sideDrawerToggle: [''],
});

/**
 * Create reducers handlers
 */
const INITIAL_STATE = {
  showSideDrawer: false,
};

const sideDrawerToggle = (state = INITIAL_STATE, action) => ({
  ...state,
  showSideDrawer: !state.showSideDrawer,
});

/**
 * Create reducers
 */
export default createReducer(INITIAL_STATE, {
  [Types.SIDE_DRAWER_TOGGLE]: sideDrawerToggle,
});
