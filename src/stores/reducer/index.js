import {combineReducers} from 'redux';

import counter from './counter';
import loginReducer from './login';
import user from './user';
import movie from './movie';

export default combineReducers({
  counter,
  loginReducer,
  user,
  movie,
});
