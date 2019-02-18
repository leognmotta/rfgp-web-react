import { createActions, createReducer } from 'reduxsauce';
import { updateObject } from '../../helper/immutableRedux';

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

const sideDrawerToggle = (state = INITIAL_STATE) => updateObject(state, { showSideDrawer: !state.showSideDrawer });

/**
 * Create reducers
 */
export default createReducer(INITIAL_STATE, {
  [Types.SIDE_DRAWER_TOGGLE]: sideDrawerToggle,
});
