import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

const TripMapView = function(props) {
  return (
    <View>
      <Text style={styles.viewName}>
        Trip Map
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  viewName: {
    paddingTop: 30,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default TripMapView;
