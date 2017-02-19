/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

//import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import canoeApp from './app/reducers'
import App from './app/components/App'

let store = createStore(canoeApp);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)


export default class Canoe extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('Canoe', () => Canoe);
