import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


const TripSummary = function(props) {
   var date1 = new Date(props.startDate.toString())
   var date2 = new Date(props.endDate.toString())
   var timeDiff = Math.abs(date2.getTime() - date1.getTime());
   var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.container}>
      <View style={styles.tripSummary}>
        <Text style={styles.textStyle}>{props.destinationName}</Text>
        <Text style={styles.textStyle}>{diffDays} days</Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  tripSummary: {
    margin: 10,
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'flex-start'
  },
  textStyle: {
    fontFamily: 'Iowan Old Style',
    fontSize: 24
  }
});

export default TripSummary;