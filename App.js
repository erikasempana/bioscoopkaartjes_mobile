import React from 'react';
import MainStackNavigator from './src/navigation';
import {NativeBaseProvider} from 'native-base';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import stores from './src/stores';
const {persistor, store} = stores;

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider>
          <MainStackNavigator />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
