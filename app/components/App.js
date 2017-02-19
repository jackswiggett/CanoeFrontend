import React from 'react';
import {
  Text,
  View
} from 'react-native';
import ShowCurrentView from '../containers/ShowCurrentView';


const App = function() {
  return (
    <View style = {{flex:1}}>
      <ShowCurrentView />
    </View>
  );
}

export default App;