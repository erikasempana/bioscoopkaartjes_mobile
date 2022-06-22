const initialState = {
  isLoading: false,
  isError: false,
  msg: '',
  data: {},
};

const booking = (state = initialState, action) => {
  switch (action.type) {
    case 'CREATE_BOOKING_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'CREATE_BOOKING_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: {...action.payload.data.data},
        msg: action.payload.data.msg,
      };
    }
    case 'CREATE_BOOKING_REJECTED': {
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

export default booking;
