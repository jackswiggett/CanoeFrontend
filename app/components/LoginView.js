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
      <View style = {styles.bg}>
        <View style ={styles.titleContainer}>
          <Text style={styles.viewName}>
            Canoe
          </Text>
        </View>
        <View style = {styles.inputContainer}>
          <TextInput
            style= {styles.textinput}
            placeholder= "username"
            onChangeText={(text) => this.props.setUserId(text)}
            value={this.props.userId} />
        </View>

        <View style = {styles.nextContainer}>
         <Button
         containerStyle={{padding:10, height:45, overflow:'hidden', borderRadius:4, backgroundColor: 'black'}}
            style= {styles.button}
            title = "Continue >"
            onPress = {() => {
              if (validateUsername(this.props.userId)) {
                this.props.loginClicked();
              }
            }} />

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 3,
    justifyContent: 'center',
    alignItems:'center'
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  nextContainer: {
    flex:1,
    justifyContent: 'center',
    alignItems:'center'
  },
  viewName: {
    fontSize: 60,
    fontFamily: 'Avenir'
  },
  textinput: {
    fontSize: 25,
    textAlign: 'center',
    height: 40

  },
  button: {
    fontSize : 25,
    fontFamily: 'Avenir'
  //  justifyContent: 'flex-end'
  }
});

export default LoginView;