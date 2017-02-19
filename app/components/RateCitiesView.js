import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

const RateCitiesView = function(props) {
  return (
    <View>

      <Text style={styles.viewName}>
        {props.userId}
      </Text>

      <Button
        title="Continue"
        onPress = {() => props.continue()} />
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
  textinput: {
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    fontSize : 16,
    margin: 10
  }
});

export default RateCitiesView;