import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useState, useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import LoadingScreen from './src/screens/LoadingScreen';
import HomeScreen from './src/screens/HomeScreen';
import CadastroScreen from './src/screens/CadastroScreen';
import PedidosScreen from './src/screens/PedidosScreen';
import SobreScreen from './src/screens/SobreScreen';
import Loader from './src/components/Loader';

const Drawer = createDrawerNavigator();

export default function App() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 1);
  }, []);
  return !loaded ? (
    <Loader />
  ) : (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          gestureEnabled: true,
          headerShown: true,
        }}>
        <Drawer.Screen name="Início" component={HomeScreen} />
        <Drawer.Screen name="Cadastro" component={CadastroScreen} />
        <Drawer.Screen name="Pedidos" component={PedidosScreen} />
        <Drawer.Screen name="Sobre" component={SobreScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
