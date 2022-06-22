import {combineReducers} from 'redux';

import counter from './counter';
import loginReducer from './login';
import user from './user';
import movie from './movie';
import movieNowShowing from './movieNowShowing';
import movieUpcoming from './movieUpcoming';
import schedule from './schedule';
import dataOrder from './dataOrder';

export default combineReducers({
  counter,
  loginReducer,
  user,
  movie,
  movieNowShowing,
  movieUpcoming,
  schedule,
  dataOrder,
});
