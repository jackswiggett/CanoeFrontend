import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Login from '../containers/Login';
import RateCities from '../containers/RateCities';
import Settings from '../containers/Settings';
import TripDigest from '../containers/TripDigest';
import TripMap from '../containers/TripMap';

const CurrentView = function(props) {
  switch (props.currentView) {
    case "LOGIN":
      return (
        <Login />
      );
    case "RATE_CITIES":
      return (
        <RateCities />
      );
    case "SETTINGS":
      return (
        <Settings />
      );
    case "TRIP_DIGEST":
      return (
        <TripDigest />
      );
    default:
      return (
        <View>
          <Text style={styles.viewName}>
            foo
          </Text>
        </View>
      );
  }
  // return (
  //   <TripMap />
  // );
}

const styles = StyleSheet.create({
  viewName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default CurrentView;
