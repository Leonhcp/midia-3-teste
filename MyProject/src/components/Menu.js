import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableHighlight} from 'react-native';

const Menu = () => {
  const openDrawer = () => {};

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={openDrawer}>
        <Text></Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: 50,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    alignContent: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 20,
    display: 'flex',
  },
  button: {},
});

export default Menu;
