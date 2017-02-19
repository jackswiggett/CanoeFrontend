import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import NumberInput from './NumberInput';

class SettingsView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.state.maxPrice = 200;
    this.state.durations = {
      short: true,
      medium: true,
      long: true
    };
  }

  render() {
    const introduction = "Tell us a little bit about the trips you'd like to go on.";
    const priceMessage = "I'm willing to spend up to (in USD)";
    const durationMessage = "I'd like to go on trips of (select all that apply)";

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
    }

    return (
      <View>
        <Text style={styles.title}>
          Hi, {this.props.userId}! {introduction}
        </Text>

        <Text>
          {priceMessage}
        </Text>

        <NumberInput
          value = {this.state.maxPrice}
          onChangeValue = {(newValue) => this.setState({maxPrice: newValue})} />

        <Text>
          {durationMessage}
        </Text>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Button
            title="1-2 days"
            onPress={() => toggleDuration(this, "short")}
            color={this.state.durations.short ? "blue" : "black"} />
          <Button
            title="3-6 days"
            onPress={() => toggleDuration(this, "medium")}
            color={this.state.durations.medium ? "blue" : "black"} />
          <Button
            title="1-3 weeks"
            onPress={() => toggleDuration(this, "long")}
            color={this.state.durations.long ? "blue" : "black"} />
        </View>

        <Button
          title="Save Settings"
          onPress={() => saveSettings(this)} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
    fontSize: 20,
    textAlign: 'center',
    margin: 0,
  },
  textinput: {
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
  },
  button: {
    fontSize : 16,
    margin: 10
  }
});

export default SettingsView;