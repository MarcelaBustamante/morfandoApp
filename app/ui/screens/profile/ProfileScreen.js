import React from 'react';
import ProfileScreenUI from './ProfileScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <ProfileScreenUI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
