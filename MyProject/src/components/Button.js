import React from 'react';
import {TouchableHighlight, Text, StyleSheet} from 'react-native';

const Button = ({title, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '50%',
    alignItems: 'center',
    alignSelf: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#80deea',
    borderRadius: 5,
  },
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#424242',
  },
});

export default Button;
