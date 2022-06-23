import axios from '../../utils/axios';

export const createBooking = body => {
  return {
    type: 'CREATE_BOOKING',
    payload: axios.post('booking', body),
  };
};

export const getBookingByUserId = userId => {
  return {
    type: 'GET_BOOKING_BY_USER_ID',
    payload: axios.get(`booking/user/${userId}`),
  };
};
export const getBookingById = id => {
  return {
    type: 'GET_BOOKING_BY_ID',
    payload: axios.get(`booking/${id}`),
  };
};

export const updateStatusBooking = id => {
  return {
    type: 'UPDATE_STATUS_BOOKING',
    payload: axios.patch(`booking/ticket/${id}`),
  };
};
