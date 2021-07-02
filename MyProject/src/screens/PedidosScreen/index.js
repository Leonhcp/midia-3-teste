import React from 'react';
import {View, Text, FlatList} from 'react-native';
import ItemPedido from '../../components/itemPedido';
// import Menu from '../../components/Menu';

const items = [
  {
    id: 1,
    data: '01/06/2020',
    total: 120.28,
    items: ['hamburguer', 'batata', 'coca-cola'],
  },
  {
    id: 2,
    data: '02/06/2020',
    total: 120.12,
    items: ['hamburguer', 'sorvete', 'pizza'],
  },
  {
    id: 3,
    data: '03/06/2020',
    total: 120.12,
    items: ['hamburguer duplo', 'batata com cheddar', 'coca-cola'],
  },
  {
    id: 4,
    data: '04/06/2020',
    total: 120.12,
    items: ['x salada', 'batata', 'coca-cola 2 litros'],
  },
  {
    id: 5,
    data: '05/06/2020',
    total: 120.12,
    items: ['hamburguer', 'batata', 'coca-cola'],
  },
  {
    id: 6,
    data: '06/06/2020',
    total: 120.12,
    items: ['hamburguer', 'batata', 'coca-cola'],
  },
  {
    id: 7,
    data: '07/06/2020',
    total: 120.12,
    items: ['hamburguer', 'batata', 'coca-cola'],
  },
  {
    id: 8,
    data: '06/06/2020',
    total: 120.12,
    items: ['hamburguer', 'batata', 'coca-cola'],
  },
  {
    id: 9,
    data: '06/06/2020',
    total: 120.12,
    items: ['hamburguer', 'batata', 'coca-cola'],
  },
  {
    id: 10,
    data: '06/06/2020',
    total: 120.12,
    items: ['hamburguer', 'batata', 'coca-cola'],
  },
  {
    id: 12,
    data: '07/06/2020',
    total: 120.12,
    items: ['hamburguer', 'batata', 'coca-cola'],
  },
  {
    id: 13,
    data: '07/06/2020',
    total: 120.12,
    items: ['hamburguer', 'batata', 'coca-cola'],
  },
];

const PedidosScreen = () => {
  return (
    <View>
      <FlatList
        data={items}
        renderItem={({item}, index) => {
          return <ItemPedido item={item} key={index} />;
        }}
      />
    </View>
  );
};

export default PedidosScreen;
