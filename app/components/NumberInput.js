import React from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text
} from 'react-native';

const NumberInput = function(props) {
  function onChangeText(newText) {
    newText = newText.replace(/\D/g,'');
    const newValue = parseInt(newText);
    props.onChangeValue(newValue);
  }

  return (
    <View style={styles.view}>
      <Text style={styles.text}>$</Text>
      <TextInput
        style={styles.numberInput}
        keyboardType = 'numeric'
        onChangeText = {onChangeText}
        value = {props.value ? props.value.toString() : ""}
        maxLength={4} />
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    height: 40
  },
  text: {
    fontSize: 35
  },
  numberInput: {
    fontSize: 32,
    width: 100,
    paddingLeft: 5,
    textAlign: 'left',
    fontFamily: 'Avenir'
  }
});

export default NumberInput;