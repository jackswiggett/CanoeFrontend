import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  ListView
} from 'react-native';

const RateCitiesView = function(props) {
  return (
    <View>  

      <Text> Pick at least 5 cities that interest you! </Text>

      <ListView
        style = {styles.lv}
        dataSource = {this.props.getPopularCities}
        renderRow = {(rowData) => <Text> {rowData} </Text>} />

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