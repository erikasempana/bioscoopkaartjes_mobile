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
    case 'GET_MOVIE_BY_ID_PENDING': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'GET_MOVIE_BY_ID_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: {...action.payload.data.data[0]},
      };
    }
    case 'GET_MOVIE_BY_ID_REJECTED': {
      return {
        ...state,
        isLoading: false,
        isError: true,
        data: {},
      };
    }
    default: {
      return state;
    }
  }
};

export default movie;
