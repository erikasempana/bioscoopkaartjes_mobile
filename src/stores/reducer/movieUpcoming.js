const initialState = {
  isLoading: false,
  isError: false,
  msg: '',
  data: [],
};

const movieUpcoming = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MOVIE_UPCOMING_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'GET_MOVIE_UPCOMING_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
      };
    }
    case 'GET_MOVIE_UPCOMING_REJECTED': {
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

export default movieUpcoming;
