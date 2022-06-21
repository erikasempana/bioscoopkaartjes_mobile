import axios from '../../utils/axios';

export const getAllMovie = page => {
  return {
    type: 'GET_ALL_MOVIE',
    payload: axios.get(`movie/?page=${page}&limit=4`),
  };
};
