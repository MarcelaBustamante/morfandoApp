import React from 'react';
import NewRestaurantScreen1 from './NewRestaurantScreen1';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <NewRestaurantScreen1
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
