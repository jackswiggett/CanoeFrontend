import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image
} from 'react-native';

const TripDetailsView = function(props) {
  return (
    <View style = {styles.bg}>
      <Text style={styles.viewName}>
        {props.destinationName}
      </Text>
      <View style={styles.imageview}>
        <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{flex:3}} />
      </View>
    <View style = {styles.infocontainer}>
      <Text style={styles.textStyle}>
        Departure: {props.startDate}
      </Text>
      <Text style={styles.textStyle}>
        Return: {props.endDate}
      </Text>

      <Text style={styles.textStyle}>
        Cost: ${props.price}
      </Text>
    </View>

      <Button
        onPress={props.returnToDigest}
        title="Back" />
    </View>
  );
}

const styles = StyleSheet.create({
  viewName: {
    paddingTop:10,
    fontSize: 32,
    textAlign: 'center',
    margin: 10,
    fontFamily: 'Avenir'
  },
  button: {
    fontSize : 16,
    margin: 10
  },
  bg:{
    flex: 1,
    flexDirection: 'column'
  },
  imageview: {
    flex:3
  },
  infocontainer: {
    flex:2,
    justifyContent : 'space-around',
    alignItems: 'center'
  },
  textStyle: {
    fontSize:24,
    fontFamily: 'Avenir'
  }
});

export default TripDetailsView;
