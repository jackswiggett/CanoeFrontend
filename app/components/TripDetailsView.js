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
       style={{width: 400, height: 400}} />
      </View>
    <View style = {styles.infocontainer}>
      <Text>
        {props.startDate} - {props.endDate}
      </Text>

      <Text>
        ${props.price}
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
    flex:3,
    justifyContent : 'center'
  }
});

export default TripDetailsView;
