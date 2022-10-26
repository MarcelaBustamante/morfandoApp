import React from 'react';
import NewRestaurantScreen2 from './NewRestaurantScreen2';
import { Button } from "@react-native-material/core";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IMAGES from "../../../assets/images/index";


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
