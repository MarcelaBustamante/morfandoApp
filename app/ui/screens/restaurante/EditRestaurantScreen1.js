import React from 'react';
import EditRestaurantScreen1UI from './EditRestaurantScreen1UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function EditRestaurantScreen1({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <EditRestaurantScreen1UI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
