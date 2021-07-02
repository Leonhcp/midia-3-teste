import React from 'react';
import {ActivityIndicator, View} from 'react-native';

const Loader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ActivityIndicator color="#0097a7" size={22} />
    </View>
  );
};

export default Loader;
