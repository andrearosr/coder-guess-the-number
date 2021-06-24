import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import Colors from '../constants/colors';

const Input = ({ style = {}, ...rest }) => {
  return <TextInput style={{ ...styles.input, ...style }} {...rest} />;
}

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: Colors.neutral,
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;