import React from 'react';
import MenuViewScreen from './MenuViewScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function MenuViewOwner() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <MenuViewScreen
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
