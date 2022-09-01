/* eslint-disable react/react-in-jsx-scope */
/**
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {
  // MD3LightTheme as DefaultTheme,
  DefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  version: 3,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2962ff',
    secondary: '#f1c40f',
    tertiary: '#a1b2c3',
  },
};

const OLXFirebase = () => {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
};
AppRegistry.registerComponent(appName, () => OLXFirebase);

// AppRegistry.registerComponent(appName, () => App);
