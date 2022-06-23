const initialState = {
  isLoading: false,
  isError: false,
  msg: '',
  data: {},
};

const statusBooking = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_STATUS_BOOKING_PENDING': {
      return {
        ...state,
        isLoading: true,
        isError: false,
        msg: '',
      };
    }
    case 'UPDATE_STATUS_BOOKING_FULFILLED': {
      console.log(action.payload);
      return {
        ...state,
        isLoading: false,
        data: {...action.payload.data.data},
        msg: action.payload.data.msg,
      };
    }
    case 'UPDATE_STATUS_BOOKING_REJECTED': {
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

export default statusBooking;
