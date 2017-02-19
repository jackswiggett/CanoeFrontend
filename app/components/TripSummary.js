import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';


const TripSummary = function(props) {
   var date1 = new Date(props.startDate)
   var date2 = new Date(props.endDate)
   var timeDiff = Math.abs(date2.getTime() - date1.getTime());
   var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24)); 
  return (
    <TouchableHighlight onPress={props.onPress} style={styles.container}>
      <View style={styles.tripSummary}>
        <Text style={styles.name}>{props.destinationName}</Text>
        <Text style={styles.duration}>
          {diffDays} day{diffDays > 1 ? "s" : ""}
        </Text>
        <Text style={styles.duration}>
          ${props.price}
        </Text>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  tripSummary: {
    margin: 10,
    padding: 10,
    flex: 1,
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'flex-start'
  },
  name: {
    fontFamily: 'Avenir',
    fontSize: 26
  },
  duration: {
    fontFamily: 'Avenir',
    fontSize: 20
  }
});

export default TripSummary;