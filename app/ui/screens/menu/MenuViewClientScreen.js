import React from 'react';
import MenuViewClientScreenUI from './MenuViewClientScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function MenuViewOwnerScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <MenuViewClientScreenUI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
