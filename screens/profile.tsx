import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, TouchableOpacity } from 'react-native';
import {
  MaterialCommunityIcons,
  Entypo,
  FontAwesome5,
  FontAwesome,
  AntDesign,
} from '@expo/vector-icons';

const Profile = ({ logoPath }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    const isValidEmail = /\S+@\S+\.\S+/.test(email);
    const isValidPassword = password.length >= 6;

    if (isValidEmail && isValidPassword) {
      console.log('Login bem-sucedido!');
    } else {
      setErrorMessage('Email ou senha inválidos.');
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Login com ${provider} em desenvolvimento...`);
  };

  return (
    <View style={styles.container}>
      <Image source={require('assets/logo.jpeg')} style={styles.logo} />
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>Login</Text>
      <TextInput placeholder="Email" style={styles.input}></TextInput>
      <TextInput placeholder="Senha" style={styles.input}></TextInput>
      <Text style={{ alignItems: 'flex-end', marginBottom: 15 }}>Esqueceu a senha?</Text>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 16 }}>Entrar</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginTop: 20 }}>
        <View style={{ flex: 1, borderBottomWidth: 1, borderColor: 'black' }}></View>
        <Text style={{ marginHorizontal: 10 }}>Ou conecte com</Text>
        <View style={{ flex: 1, borderBottomWidth: 1, borderColor: 'black' }}></View>
      </View>
      <View style={{ marginTop: 20, flexDirection: 'row', gap: 20 }}>
        <View
          style={{
            borderRadius: 50,
            backgroundColor: '#4285F4',
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AntDesign name="google" size={20} color={'#fff'} />
        </View>
        <View
          style={{
            borderRadius: 50,
            backgroundColor: '#3b5998',
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <FontAwesome name="facebook-f" size={20} color={'#fff'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#BFBFBF',
    padding: 20,
    height: 1000,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  logo: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  loginForm: {
    marginBottom: 40,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    backgroundColor: '#eee',
    width: '100%',
  },
  loginButton: {
    backgroundColor: '#000',
    color: '#fff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    width: '80%',
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  socialIcon: {
    marginRight: 10,
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default Profile;
