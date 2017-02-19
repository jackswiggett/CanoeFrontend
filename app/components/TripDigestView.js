import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

const TripDigestView = function(props) {
  return (
    <View>
      <Text style={styles.viewName}>
        Daily Trip Digest
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

export default TripDigestView;