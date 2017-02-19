import React from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';

const NumberInput = function(props) {
  function onChangeText(newText) {
    newText = newText.replace(/\D/g,'');
    const newValue = parseInt(newText);
    props.onChangeValue(newValue);
  }

  return (
    <TextInput
      style={styles.numberInput}
      keyboardType = 'numeric'
      onChangeText = {onChangeText}
      value = {props.value ? props.value.toString() : ""} />
  );
}

const styles = StyleSheet.create({
  numberInput: {
    fontSize: 16,
    margin: 10,
    height: 40,
    textAlign: 'center',
  }
});

export default NumberInput;