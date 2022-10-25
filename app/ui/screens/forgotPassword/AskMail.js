import React from 'react';
import AskMailUI from './AskMailUI';
import { Button } from "@react-native-material/core";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IMAGES from "../../../assets/images/index";


export default function AskMail() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <AskMailUI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
