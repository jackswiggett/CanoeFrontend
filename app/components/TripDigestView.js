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
    <View>
      <Text style={styles.viewName}>
        Daily Trip Digest
      </Text>

      { props.loading ?
        <Text>Loading your personalized trips...</Text> :
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
  );
}

const styles = StyleSheet.create({
  viewName: {
    paddingTop: 30,
    margin: 10
  }
});

export default TripDigestView;