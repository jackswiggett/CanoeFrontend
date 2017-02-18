import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Login from './Login';

const CurrentView = function(props) {
  switch (props.currentView) {
    case "LOGIN":
      return (
        <Login />
      );
    default:
      return (
        <View>
          <Text style={styles.viewName}>
            View not yet supported
          </Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  viewName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default CurrentView;