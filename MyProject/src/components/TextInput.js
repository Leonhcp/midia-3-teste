import React from 'react';
import {
  TouchableHighlight,
  Text,
  StyleSheet,
  TextInput as RNInput,
} from 'react-native';

const TextInput = ({placeholder, onChangeText}) => {
  return (
    <RNInput
      style={styles.inputStyle}
      placeholder={placeholder}
      onChangeText={onChangeText}
      placeholderTextColor="#81b9bf"
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 8,
    borderColor: '#b2ebf2',
    borderWidth: 1.5,
    borderRadius: 6,
  },
});

export default TextInput;
