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

  var flightsToShow = this.props.trips;
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
      <Button title="Digest View" onPress={() => {this.props.showTripDigestView();}}/>
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
    height: 550,
    width: 400,
  }
});

export default TripMapView;
