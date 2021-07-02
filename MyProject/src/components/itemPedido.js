import React from 'react';

import {Text, View, StyleSheet} from 'react-native';

const ItemPedido = ({item: {data = '01/06/2020', total = 0, items = []}}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Data: <Text style={styles.info}>{data}</Text>
      </Text>
      <Text style={styles.text}>
        R$: <Text style={styles.info}>{total}</Text>
      </Text>
      <Text style={styles.text}>
        Items: <Text style={styles.info}>{items.join(', ')}</Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#bdbdbd',
    paddingVertical: 12,
    borderRadius: 6,
    marginVertical: 6,
    marginHorizontal: 10,
    paddingHorizontal: 12,
  },
  text: {
    fontSize: 16,
  },
  info: {
    fontWeight: 'bold',
  },
});

export default ItemPedido;
