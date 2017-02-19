import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ListView
} from 'react-native';

import MultipleChoice from 'react-native-multiple-choice'

let map = new Map(['Los Angeles', 'LAX'], ['San Diego', 'SAN']);

const RateCitiesView = function(props) {
  return (
    <View>  

      <Text> Pick at least 5 cities that interest you! </Text>

      <MultipleChoice
        options = {(
            'Los Angeles',
            'San Diego'
          )}
        selectedOptions = {['Los Angeles']}
        onSelection = {(city) => this.props.addCity(map.get(city))} />

      <Button 
        style={styles.button}
        onPress = {this.props.citiesSelected}/>

    </View>
  );
}

const styles = StyleSheet.create({
  lv: {
    flex:1,
    fontSize: 20,
    textAlign: 'center',
  },
  textinput: {
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    fontSize : 16
  }
});

export default RateCitiesView;