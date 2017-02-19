import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Image
} from 'react-native';
import NumberInput from './NumberInput';

class SettingsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.maxPrice = props.maxPrice;
    this.state.durations = {
      short: true,
      medium: true,
      long: true
    };
  }

  render() {
    const introduction = "Tell us a little bit about the trips you'd like to go on.";
    const priceMessage = "I'm willing to spend up to";
    const durationMessage = "I'd like to go on trips of";
    const durationNote = "(select either or both)";

    function toggleDuration(self, duration) {
      if (duration === "short" || duration === "medium" || duration === "long") {
        const newDurations = Object.assign({}, self.state.durations);
        newDurations[duration] = !newDurations[duration]; // toggle it

        self.setState({ durations: newDurations });
      }
    }

    function saveSettings(self) {
      self.props.setMaxPrice(self.state.maxPrice);

      const durations = self.state.durations;
      self.props.setTripDurations(durations.short, durations.medium, durations.long);

      // return to Trip Digest
      self.props.exit(self.state.maxPrice, "Francis", durations, self.props.userRatings);
    }

    return (
      <View style = {styles.bg}>
        <View style = {styles.container}>
          <Text style={styles.instructions}>
            {introduction}
          </Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.textStyle}>
            {priceMessage}
          </Text>
          <NumberInput
            style = {styles.textinputStyle}
            value = {this.state.maxPrice}
            onChangeValue = {(newValue) => this.setState({maxPrice: newValue})} />
        </View>
        <View style = {styles.container}>
          <Text style={styles.textStyle}>
            {durationMessage}
          </Text>
          <Text style={styles.smallText}>
            {durationNote}
          </Text>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TouchableOpacity>
              <Button
                style={styles.textStyle}
                title="1-2 days"
                onPress={() => toggleDuration(this, "short")}
                color={this.state.durations.short ? "green" : "grey"} />
              <Button
                style={styles.textStyle}
                title="3-6 days"
                onPress={() => toggleDuration(this, "medium")}
                color={this.state.durations.medium ? "green" : "grey"} />
              {/*<Button
                style={styles.textStyle}
                title="1-3 weeks"
                onPress={() => toggleDuration(this, "long")}
                color={this.state.durations.long ? "green" : "grey"} />*/}
              </TouchableOpacity> 
          </View>
        </View>
        <View style = {styles.saveContainer}>
          <Button
            style={styles.textStyle}
            title="Save Settings"
            backgroundColor = "purple"
            onPress={() => saveSettings(this)} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  container: {
    flex:2,
    justifyContent:'center',
    alignItems:'center'
  },
  saveContainer: {
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  instructions: {
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 40,
    fontFamily: 'Avenir'
  },
  textinput: {
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
    fontFamily: 'Avenir'
  },
  button: {
    fontSize : 16,
    margin: 10,
    fontFamily: 'Avenir'
  },
  textStyle: {
    fontFamily: 'Avenir',
    fontSize: 23,
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: 'center'
  },
  smallText: {
    fontFamily: 'Avenir',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
    textAlign: 'center'
  },
  textinputStyle: {
    fontFamily: 'Avenir',
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#000"
  }
});

export default SettingsView;