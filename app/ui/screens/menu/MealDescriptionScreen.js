import React from 'react';
import MealDescriptionScreenUI from './MealDescriptionScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function MealDescriptionScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <MealDescriptionScreenUI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>

  )};
