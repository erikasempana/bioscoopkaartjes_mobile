import axios from '../../utils/axios';

export const GetUserById = id => {
  return {
    type: 'GET_USER_BY_ID',
    payload: axios.get(`user/${id}`),
  };
};

export const UpdateProfile = (id, form) => {
  return {
    type: 'UPDATE_PROFILE',
    payload: axios.patch(`/user/profile/${id}`, form),
  };
};

export const UpdateImage = (id, body) => {
  return {
    type: 'UPDATE_IMAGE',
    payload: axios.patch(`user/image/${id}`, body),
  };
};

export const UpdatePassword = form => {
  return {
    type: 'UPDATE_PASSWORD',
    payload: axios.patch('user/password', form),
  };
};
