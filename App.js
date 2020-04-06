/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MainNavigator from './src/navigation/MainNavigator';
import PrimaryNav from './src/navigation/AppNavigator';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './src/store/store';

import { Container, Header, Left, Body, Right } from 'native-base';


export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <PrimaryNav />
        </PersistGate>
      </Provider >
    );

  }
}





