import React from 'react';
import OwnerViewScreenUI from './OwnerViewScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <OwnerViewScreenUI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
