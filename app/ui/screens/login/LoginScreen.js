import React from 'react';
import LoginScreenUi from './LoginScreenUI';
import {View,Button} from 'react-native';


export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = text => {
    console.log(text);
  }
  return (
    <LoginScreenUi
     primText={welcomeString}
     secText='Inicio de sesión'
     loginHandler = {loginHandler}
     />
  );
}

