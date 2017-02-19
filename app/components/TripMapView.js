import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  Image
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
      geodesic={true} />
  );
  }
  return (
    <View style={{flex: 1}}>
      <View style = {{flex: 0, height: 80, flexDirection: 'row', justifyContent: 'flex-start', marginRight: 20, alignItems: 'center', paddingTop: 20}}>
        <Text style={styles.viewName}>
          Your Trips
        </Text>
        <View style={{flex: 0, width: 90, flexDirection:'row', justifyContent:'space-between'}}>
          <TouchableHighlight
            onPress={() => this.props.showTripDigest()}>
            <Image style={styles.settings}
              source={require('../images/list.png')} />
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => this.props.showSettings()}>
            <Image style={styles.settings}
              source={require('../images/settings.png')} />
          </TouchableHighlight>
        </View>
      </View>
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
            onSelect={this.selectedMarker.bind(this, marker.lat, marker.long)} />
        ))}
        {travelLine}
      </MapView>
    </View>
  );
  }
});

const styles = StyleSheet.create({
  viewName: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    margin: 10,
    fontFamily: 'Avenir',
    fontSize: 35,
    flex: 1
  },
  mapView: {
    flex: 1
  },
  settings: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginLeft: 0
  }
});

export default TripMapView;
