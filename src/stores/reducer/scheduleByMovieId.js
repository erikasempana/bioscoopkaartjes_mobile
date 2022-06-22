const initialState = {
  isLoading: false,
  isError: false,
  msg: '',
  data: [],
};

const scheduleByMovieId = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SCHEDULE_BY_MOVIE_ID_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'GET_SCHEDULE_BY_MOVIE_ID_FULFILLED': {
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
      };
    }
    case 'GET_SCHEDULE_BY_MOVIE_ID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: [],
      };
    }
    default: {
      return state;
    }
  }
};

export default scheduleByMovieId;
