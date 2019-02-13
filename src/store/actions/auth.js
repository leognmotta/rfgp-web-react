import * as actionTypes from './actionTypes';

export const login = () => {
  return {
    type: actionTypes.LOGIN
  };
};

export const logout = () => {
  localStorage.removeItem('rfgptoken:');
  localStorage.removeItem('rfgpuserid:');
  return {
    type: actionTypes.LOGOUT
  };
};
