import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

const TripDetailsView = function(props) {
  return (
    <View>
      <Text style={styles.viewName}>
        {props.destinationName}
      </Text>

      <Text>
        {props.startDate} - {props.endDate}
      </Text>

      <Text>
        ${props.price}
      </Text>

      <Button
        onPress={props.returnToDigest}
        title="Back" />
    </View>
  );
}

const styles = StyleSheet.create({
  viewName: {
    paddingTop:10,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    fontSize : 16,
    margin: 10
  }
});

export default TripDetailsView;
