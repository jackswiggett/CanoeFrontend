import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Image
} from 'react-native';

class DestinationRating extends Component {
  constructor(props) {
    super(props)

    this.state = {
      rating: 0
    };
  }

  render() {
    const self = this;
    function updateRating(newRating) {
      self.setState({
        rating: newRating
      });

      self.props.ratingChanged(newRating);
    }

    return (
      <View style={styles.destinationRating}>
        <Text style={styles.destinationName}>
          {this.props.destinationName}
        </Text>

        <View style={styles.stars}>
          {[1,2,3,4,5].map((value) =>
            <TouchableWithoutFeedback
              onPress={() => updateRating(value)}
              key={value} >
              <Image
                style={styles.star}
                source={ this.state.rating >= value ?
                  require('../images/black_star.png') :
                  require('../images/white_star.png')
                } />
            </TouchableWithoutFeedback>
          )}
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  destinationRating: {
    margin: 10,
    flex: 1,
    alignItems: 'stretch'
  },
  stars: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    aspectRatio: 5.5
  },
  star: {
    resizeMode: 'contain',
    width: undefined,
    height: undefined,
    aspectRatio: 1
  },
  destinationName: {
    fontSize: 25
  }
});

export default DestinationRating;