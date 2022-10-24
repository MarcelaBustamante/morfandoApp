import React from 'react';
import LoginScreenUI from './LoginScreenUI';
import { Button } from "@react-native-material/core";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IMAGES from "../../../assets/images/index";


export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = text => {
    console.log(text);
  }
  return (
    <KeyboardAwareScrollView>
          <LoginScreenUI/> 
    </KeyboardAwareScrollView>
  )};
