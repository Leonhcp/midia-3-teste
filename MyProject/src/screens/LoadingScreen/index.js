import React from 'react';
import {View, StyleSheet} from 'react-native';
import Loader from '../../components/loader';

const LoadingScreen = () => {
  return (
    <View style={styles.container}>
      <Loader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
