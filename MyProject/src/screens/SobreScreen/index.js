import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
// import Menu from '../../components/Menu';

const SobreScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sobre}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
      <Text style={styles.versao}>Versão 1.0.0</Text>
      <Text style={styles.autor}>Autor: Leonardo Holanda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
    alignItems: 'center',
  },
  sobre: {
    textAlign: 'justify',
    fontSize: 18,
    paddingVertical: 15,
    lineHeight: 22,
  },
  versao: {
    fontSize: 18,
  },
  autor: {
    fontSize: 16,
  },
});

export default SobreScreen;
