import React from 'react';
import NewRestaurantScreen1UI from './NewRestaurantScreen1UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function NewRestaurantScreen1() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <NewRestaurantScreen1UI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
