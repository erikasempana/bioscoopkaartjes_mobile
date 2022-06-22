import axios from '../../utils/axios';

export const getAllSchedule = page => {
  return {
    type: 'GET_ALL_SCHEDULE',
    payload: axios.get(`schedule?limit=2&page=${page}`),
  };
};

export const dataOrder = body => {
  return {
    type: 'DATA_ORDER',
    payload: body,
  };
};
