import React from 'react';
import MealDescriptionScreenUIClient from './MealDescriptionScreenUIClient';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function MealDescriptionScreenClient({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <MealDescriptionScreenUIClient
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>

  )};
