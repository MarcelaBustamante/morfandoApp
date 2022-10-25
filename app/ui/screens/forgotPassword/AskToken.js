import React from 'react';
import AskTokenUI from './AskTokenUI';
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
          <AskTokenUI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
