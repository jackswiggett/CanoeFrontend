import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import TripSummary from './TripSummary';

const TripDigestView = function(props) {
  let trips = props.trips;
  if (props.trips.length > 5) {
    trips = props.trips.slice(0, 5);
  }

  return (
    <View style = {{flex: 1}}>
      <View style={styles.bg}>
        <Text style={styles.viewName}>
          Daily Trip Digest
        </Text>
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
    flex:1,
    flexDirection:'column',
    justifyContent : 'center',
    alignItems: 'center'
  },
  bg2: {
    flex:10,
    flexDirection:'column',
    justifyContent : 'center'
  },
  viewName: {
    paddingTop: 30,
    margin: 10,
    fontFamily: 'Iowan Old Style',
    fontSize: 32,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  loading: {
    textAlign: 'center',
    fontFamily: 'Iowan Old Style',
    fontSize: 40
  }
});

export default TripDigestView;