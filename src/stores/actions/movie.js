import axios from '../../utils/axios';

export const getAllMovie = page => {
  return {
    type: 'GET_ALL_MOVIE',
    payload: axios.get(`movie/?page=${page}&limit=4`),
  };
};

export const getMovieById = id => {
  return {
    type: 'GET_MOVIE_BY_ID',
    payload: axios.get(`movie/${id}`),
  };
};

export const GetMovieNowShowing = month => {
  return {
    type: 'GET_MOVIE_NOW_SHOWING',
    payload: axios.get(`movie/?searchRelease=${month}`),
  };
};

export const GetMovieUpcoming = params => {
  return {
    type: 'GET_MOVIE_UPCOMING',
    payload: axios.get(`movie/?searchRelease=${params}`),
  };
};
