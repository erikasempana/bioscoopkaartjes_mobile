const initialState = {
  isLoading: false,
  isError: false,
  msg: '',
  data: [],
};

const schedule = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_SCHEDULE_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    }
    case 'GET_ALL_SCHEDULE_FULFILLED': {
      console.log('ABC', action.payload);
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
      };
    }
    case 'GET_ALL_SCHEDULE_REJECTED': {
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

export default schedule;
