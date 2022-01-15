/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import themes from './assets/themes';
import { PersistGate } from 'redux-persist/es/integration/react';
import AppContainer from './navigations'
import { persistor, store } from './redux/store';
import SplashScreen from 'react-native-splash-screen';

export default ({ navigation }) => {
  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <Provider store={store}>
      <PaperProvider theme={themes}>
        <PersistGate loading={null} persistor={persistor}>
          <AppContainer />
        </PersistGate>
      </PaperProvider>
    </Provider>
  );
}





