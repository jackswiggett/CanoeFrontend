import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button,
  Image,
  TouchableHighlight
} from 'react-native';

const TripDetailsView = function(props) {
  function formatDate(date) {
    date = new Date(date);
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }

  return (
    <View style = {styles.bg}>
      <Text style={styles.viewName}>
        {props.destinationName}
      </Text>
      <View style={styles.imageview}>
        <Image source={{uri: props.img}}
       style={{flex:3}} />
      </View>
      <View style = {styles.bigContainer}>
        <Text style={styles.textStyle}>
          Leaving: 
        </Text>
        <Text style={styles.dateStyle}>
          {formatDate(props.startDate)}
        </Text>
      </View>
      <View style={styles.bigContainer}>
        <Text style={styles.textStyle}>
          Returning:
        </Text>
        <Text style={styles.dateStyle}>
          {formatDate(props.endDate)}
        </Text>
      </View>
      <View style={styles.smallContainer}>
        <Text style={styles.costStyle}>
          Cost: ${props.price}
        </Text>
      </View>
      
      <View style={styles.smallContainer}> 
        <TouchableHighlight style={styles.buttonHighlight} onPress={() => alert("Coming soon!")}>
          <Text style={styles.buyTickets}>
            Buy Tickets
          </Text>
        </TouchableHighlight>
      </View>
      
      <View style={styles.bigContainer}>
        <Button
          onPress={props.returnToDigest}
          title="Back" />
      </View>
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
    fontSize : 16
  },
  bg:{
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  imageview: {
    flex:4.5,
    margin: 10,
    borderColor: "black",
    borderWidth: 1
  },
  bigContainer: {
    flex:1,
    justifyContent : 'center',
    alignItems: 'center'
  },
  smallContainer: {
    flex:.7,
    justifyContent : 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize:18,
    fontFamily: 'Avenir'
  },
  dateStyle: {
    fontSize: 20,
    fontFamily: 'Avenir'
  },
  costStyle: {
    fontSize: 22,
    fontFamily: 'Avenir',
    textAlign: "center"
  },
  buyTickets: {
    fontSize:22,
    fontFamily: 'Avenir',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 7,
    paddingBottom: 5
  },
  buttonHighlight: {
    backgroundColor: "#f4f8ff",
    borderColor: "#efefef",
    borderWidth: 2,
    borderRadius: 10
  }
});

export default TripDetailsView;
