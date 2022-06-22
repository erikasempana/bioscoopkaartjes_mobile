import axios from '../../utils/axios';

export const createBooking = body => {
  return {
    type: 'CREATE_BOOKING',
    payload: axios.post('booking', body),
  };
};
