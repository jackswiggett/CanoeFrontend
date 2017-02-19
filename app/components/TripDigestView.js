import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';
import TripSummary from './TripSummary';

const TripDigestView = function(props) {
  let trips = props.trips;
  if (props.trips.length > 5) {
    trips = props.trips.slice(0, 5);
  }

  return (
    <View style = {{flex: 1}}>
      <View style = {{flex: 1, height: 40, flexDirection: 'row', justifyContent: 'flex-start', marginRight: 20, alignItems: 'center', paddingTop: 20}}>
        <Text style={styles.viewName}>
          Your Trips
        </Text>
        <TouchableHighlight
          onPress={() => props.showSettings()}>
          <Image style={styles.settings}
            source={require('../images/settings.png')} />
        </TouchableHighlight>
      </View>
      <View style={styles.bg2}>
        { props.loading ?
          <Text style = {styles.loading}>Loading your personalized trips...</Text> :
          trips.map(function(trip, index) {
            return (
              <TripSummary
                destinationName={trip.city}
                startDate={trip.departure_date}
                endDate={trip.return_date}
                price={trip.price}
                onPress={() => {
                  props.setTripDetailsIndex(index);
                  props.showTripDetails();
                }}
                key={index} />
            );
          })
        }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1
  },
  bg2: {
    flex:10,
    flexDirection:'column',
    justifyContent : 'center'
  },
  viewName: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    margin: 10,
    fontFamily: 'Avenir',
    fontSize: 35,
    flex: 1
  },
  loading: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontSize: 25,
    margin: 20
  },
  settings: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain'
  }
});

export default TripDigestView;