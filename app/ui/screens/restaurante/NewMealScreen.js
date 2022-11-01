import React from 'react';
import NewMealScreenUI from './NewMealScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <NewMealScreenUI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
