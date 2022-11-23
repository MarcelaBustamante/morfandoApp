import React, { useState } from 'react';
import RegisterClientScreenUI from './RegisterClientScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function RegisterClientScreen() {
  welcomeString = 'Bienvenido a Morfando';
  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
      <RegisterClientScreenUI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )
};
