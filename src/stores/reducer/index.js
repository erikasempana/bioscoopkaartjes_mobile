import {combineReducers} from 'redux';

import counter from './counter';
import loginReducer from './login';
import user from './user';
import movie from './movie';
import movieNowShowing from './movieNowShowing';
import movieUpcoming from './movieUpcoming';
import schedule from './schedule';
import dataOrder from './dataOrder';
import scheduleByMovieId from './scheduleByMovieId';
import scheduleById from './getScheduleById';
import booking from './booking';
import statusBooking from './statusBooking';
import orderHistory from './orderHistory';
import bookingById from './bookingById';

export default combineReducers({
  counter,
  loginReducer,
  user,
  movie,
  movieNowShowing,
  movieUpcoming,
  schedule,
  dataOrder,
  scheduleByMovieId,
  scheduleById,
  booking,
  statusBooking,
  orderHistory,
  bookingById,
});
