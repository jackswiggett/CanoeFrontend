import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import Login from '../containers/Login';
import RateCities from '../containers/RateCities';
import Settings from '../containers/Settings';
import TripDigest from '../containers/TripDigest';
import TripDetails from '../containers/TripDetails';
import TripMap from '../containers/TripMap';

class CurrentView extends Component {
  constructor(props) {
    super(props);
    props.fetchTopDestinations();
  }

  render(props) {
    switch (this.props.currentView) {
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
      case "TRIP_DETAILS":
        return (
          <TripDetails />
        );
      case "TRIP_MAP":
        return (
          <TripMap />
        );
      default:
        return (
          <View>
            <Text style={styles.viewName}>
              View {this.props.currentView} is not implemented.
            </Text>
          </View>
        );
    }
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
    paddingTop: 100
  }
});

export default CurrentView;
