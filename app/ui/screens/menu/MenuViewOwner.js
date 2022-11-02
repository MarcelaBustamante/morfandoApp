import React from 'react';
import MenuViewOwnerUI from './MenuViewOwnerUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <MenuViewOwnerUI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
