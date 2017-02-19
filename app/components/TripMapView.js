import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import MapView from 'react-native-maps';

var TripMapView = React.createClass({
  getInitialState: function() {
    return {showLine: false}
  },

  selectedMarker: function(lat, long) {
    console.log("hello");
    console.log(lat);
    console.log(long);
    this.setState({drawnlat: lat, drawnlong: long, showLine: true});
  },

  render: function() {
  var flightsToShow = [{
    "_id": "58a8dddc8d1db6776b0d9f1c",
    "city": "Phoenix",
    "country": "United States",
    "iata": "PHX",
    "long": -112.012001038,
    "lat": 33.434299469,
    "timezone": "-7",
    "id": 3462,
    "airportname": "Phoenix Sky Harbor International Airport",
    "destination": "PHX",
    "departure_date": "2017-02-27",
    "return_date": "2017-03-08",
    "price": "86.40",
    "airline": "F9"
  },
  {
    "_id": "58a8dddc8d1db6776b0da0aa",
    "city": "Las Vegas",
    "country": "United States",
    "iata": "LAS",
    "long": -115.15200039999999,
    "lat": 36.08010101,
    "timezone": "-8",
    "id": 3877,
    "airportname": "McCarran International Airport",
    "destination": "LAS",
    "departure_date": "2017-03-06",
    "return_date": "2017-03-07",
    "price": "100.40",
    "airline": "NK"
  },
  {
    "_id": "58a8dddc8d1db6776b0d9f8f",
    "city": "Long Beach",
    "country": "United States",
    "iata": "LGB",
    "long": -118.15200039999999,
    "lat": 33.81769943,
    "timezone": "-8",
    "id": 3582,
    "airportname": "Long Beach /Daugherty Field/ Airport",
    "destination": "LGB",
    "departure_date": "2017-03-08",
    "return_date": "2017-03-14",
    "price": "116.40",
    "airline": "B6"
  },
  {
    "_id": "58a8dddc8d1db6776b0d9fc9",
    "city": "Burbank",
    "country": "United States",
    "iata": "BUR",
    "long": -118.35900116,
    "lat": 34.2006988525,
    "timezone": "-8",
    "id": 3644,
    "airportname": "Bob Hope Airport",
    "destination": "BUR",
    "departure_date": "2017-05-06",
    "return_date": "2017-05-08",
    "price": "136.40",
    "airline": "AS"
  }];
  console.log(this.state);
  var currentLat = 37.7749;
  var currentLong = -122.4194;
  var travelLine = null;
  if (this.state.showLine) {
    travelLine =
    (
    <MapView.Polyline
      coordinates={[{latitude:currentLat, longitude: currentLong},
        {latitude:this.state.drawnlat, longitude: this.state.drawnlong}]}
      geodesic={true}
    />
  );
  }
  return (
    <View>
      <Text style={styles.viewName}>
        Trip Map
      </Text>
      <MapView style={styles.mapView}
        initialRegion={{
          latitude: currentLat,
          longitude: currentLong+28,
          latitudeDelta: 20,
          longitudeDelta: 60,
        }}>
        {flightsToShow.map(marker => (
          <MapView.Marker
            coordinate={{latitude:marker.lat, longitude: marker.long}}
            title={marker.city}
            description={"$" + marker.price + ". Departing " + marker.departure_date + ". Returning " + marker.return_date + "."}
            key={marker.id}
            onSelect={this.selectedMarker.bind(this, marker.lat, marker.long)}
          />
        ))}
        {travelLine}
      </MapView>
    </View>
  );
  }
});

const styles = StyleSheet.create({
  viewName: {
    paddingTop: 30,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  mapView: {
    height: 400,
    width: 400,
  }
});

export default TripMapView;
