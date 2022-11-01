import React from 'react';
import NewRestaurantScreen2 from './NewRestaurantScreen2';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <NewRestaurantScreen2
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
