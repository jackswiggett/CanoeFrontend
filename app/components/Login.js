import React from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';

const Login = function() {
  return (
    <View>
      <Text style={styles.viewName}>
        Login View
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  viewName: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});

export default Login;