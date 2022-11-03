import React from 'react';
import UserSetScreenUI from './UserSetScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <UserSetScreenUI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
