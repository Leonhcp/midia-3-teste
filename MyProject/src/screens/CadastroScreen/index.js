import React from 'react';
import {useState} from 'react';
import {View, StyleSheet, Alert} from 'react-native';
// import Menu from '../../components/Menu';
import Button from '../../components/Button';
import TextInput from '../../components/TextInput';

const CadastroScreen = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  return (
    <View style={{marginHorizontal: 12}}>
      <TextInput placeholder="Nome" onChangeText={setNome} />
      <TextInput placeholder="E-mail" onChangeText={setEmail} />
      <TextInput placeholder="Telefone" onChangeText={setTelefone} />

      <Button
        title="Enviar"
        onPress={() => {
          Alert.alert(
            'Sucesso',
            `Cadastro Realizado ${JSON.stringify([nome, telefone, email])}`,
          );
        }}
      />
    </View>
  );
};

export default CadastroScreen;
