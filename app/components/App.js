import React from 'react';
import {
  Text,
  View
} from 'react-native';
//import Footer from './Footer';
import ShowCurrentView from '../containers/ShowCurrentView';
//import VisibleTodoList from '../containers/VisibleTodoList';

const App = function() {
  return (
    <View style = {{flex:1}}>
      <ShowCurrentView />
    </View>
  );
}

export default App;