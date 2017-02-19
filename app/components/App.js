import React from 'react';
import 'babel-polyfill';
import {
  Text,
  View
} from 'react-native';
//import Footer from './Footer';
import ShowCurrentView from '../containers/ShowCurrentView';
//import VisibleTodoList from '../containers/VisibleTodoList';

const App = function() {
  return (
    <View>
      <ShowCurrentView />
    </View>
  );
}

export default App;