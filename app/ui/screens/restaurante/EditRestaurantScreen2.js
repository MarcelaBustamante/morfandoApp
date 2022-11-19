import React from 'react';
import EditRestaurantScreen2UI from './EditRestaurantScreen2UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function EditRestaurantScreen2({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <EditRestaurantScreen2UI
            loginHandler={loginHandler}/>
             
    </KeyboardAwareScrollView>
  )};
