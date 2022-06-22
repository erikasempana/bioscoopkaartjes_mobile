import axios from '../../utils/axios';

export const getAllSchedule = page => {
  return {
    type: 'GET_ALL_SCHEDULE',
    payload: axios.get(`schedule?limit=2&page=${page}`),
  };
};

export const getScheduleByMovieId = movieId => {
  return {
    type: 'GET_SCHEDULE_BY_MOVIE_ID',
    payload: axios.get(`schedule/movie/${movieId}`),
  };
};

export const getScheduleById = scheduleId => {
  return {
    type: 'GET_SCHEDULE_BY_ID',
    payload: axios.get(`schedule/${scheduleId}`),
  };
};

export const dataOrder = body => {
  return {
    type: 'DATA_ORDER',
    payload: body,
  };
};
