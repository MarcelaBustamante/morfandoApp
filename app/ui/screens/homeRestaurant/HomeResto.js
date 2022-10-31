import React, { useReducer } from 'react';
import homeRestoUI from './HomeRestoUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';
  
  
  return (
    <KeyboardAwareScrollView>
          <homeRestoUI
          /> 
    </KeyboardAwareScrollView>
  )};
