import axios from '../../utils/axios';

export const loginAction = form => {
  return {
    type: 'LOGIN',
    payload: axios.post('auth/login', form),
  };
};
