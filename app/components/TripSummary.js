import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';

const TripSummary = function(props) {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View style={styles.tripSummary}>
        <Text>{props.destinationName}</Text>
        <Text>{props.startDate} - {props.endDate}</Text>
        <Text>${props.price}</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  tripSummary: {
    margin: 10,
    height: 40
  }
});

export default TripSummary;