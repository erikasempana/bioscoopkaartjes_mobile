import axios from '../../utils/axios';

export const loginAction = form => {
  return {
    type: 'LOGIN',
    payload: axios.post('auth/login', form),
  };
};

export const logoutAction = body => {
  return {
    type: 'LOGOUT',
    payload: axios.post('auth/logout', body),
  };
};
