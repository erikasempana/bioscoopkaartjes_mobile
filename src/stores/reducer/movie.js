const initialState = {
  isLoading: false,
  isError: false,
  msg: '',
  data: {},
};

const movie = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_MOVIE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'GET_ALL_MOVIE_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: {...action.payload.data.data},
        msg: action.payload.data.msg,
      };
    }
    case 'GET_ALL_MOVIE_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
        msg: action.payload.response.data.msg,
      };
    }
    default: {
      return state;
    }
  }
};

export default movie;
