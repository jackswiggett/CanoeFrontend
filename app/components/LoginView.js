import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';

class LoginView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    function validateUsername(username) {
      if (username.length < 6 || /[^A-Za-z0-9]/.test(username)) {
        alert("Your username must be at least 6 characters long, and must contain only capital " +
              "or lowercase letters and numbers.")
        return false;
      }

      return true;
    }
    return (
      <View>

        <Text style={styles.viewName}>
          Login View
        </Text>

        <TextInput
          style= {styles.textinput}
          placeholder= "username"
          onChangeText={(text) => this.props.setUserId(text)}
          value={this.props.userId} />

        <Button
          style= {styles.button}
          title = "Next"
          onPress = {() => {
            if (validateUsername(this.props.userId)) {
              this.props.loginClicked();
            }
          }} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewName: {
    paddingTop:10,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  textinput: {
    fontSize: 16,
    margin: 10,
    textAlign: 'center',
    height: 40
  },
  button: {
    fontSize : 16,
    margin: 10
  }
});

export default LoginView;
