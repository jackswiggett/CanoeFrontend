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
          onPress = {this.props.loginClicked} />

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