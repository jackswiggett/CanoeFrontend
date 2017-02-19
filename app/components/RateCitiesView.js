import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import DestinationRating from './DestinationRating';

class RateCitiesView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageIndex: 0
    };
  }

  render() {
    const welcomeMessage = "Hi, " + this.props.userId + "!";
    const instructions = "In order to find trips that you'll love, " +
      "please rate any of the following destinations that you've already visited.";

    let self = this;

    function showMore() {
      self.setState({
        pageIndex: self.state.pageIndex + 1
      });
      console.log(self.state.pageIndex);
    }

    return (
      <View style={{flex:1, alignItems: 'stretch'}}>
        <Text style={styles.welcomeMessage}>
          {welcomeMessage}
        </Text>

        <Text style={styles.instructions}>
          {instructions}
        </Text>

        { this.props.loading ?
          <Text style={styles.loadingMessage}>
            Loading destinations...
          </Text> :
          this.props.destinations.slice(this.state.pageIndex * 5, this.state.pageIndex * 5 + 5).map(function(destination, index) {
            return (
              <DestinationRating
                destinationName={destination.city}
                key={self.state.pageIndex * 5 + index}
                ratingChanged={(rating) => self.props.rateDestination(destination.destination, rating)} />
            );
          })
        }

        <View style={styles.bottomView}>
          <Button
            title="Rate More"
            onPress = {() => showMore()}
            style={styles.button}
            disabled={this.props.destinations.length < self.state.pageIndex * 5 + 10} />
          <Button
            title="Continue"
            onPress = {() => this.props.continue()}
            style={styles.button} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  welcomeMessage: {
    paddingTop: 25,
    fontSize: 25,
    textAlign: 'center',
    margin: 10,
  },
  loadingMessage: {
    fontSize: 18,
    textAlign: 'center',
    margin: 20
  },
  instructions: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  bottomView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    fontSize : 16,
    margin: 10,
    flex: 1
  }
});

export default RateCitiesView;
