import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise-middleware';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import rootReducer from './reducer';

// TAMBAHKAN SETUP REDUX PERSIST
const persistConfig = {
  // configuration object for redux-persist
  key: 'root',
  storage: AsyncStorage, //define which storage to use
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// ...

let store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger),
);
let persistor = persistStore(store);

export default {store, persistor};
