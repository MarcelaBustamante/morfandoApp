import React from 'react';
import RegisterScreenUI from './RegisterScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';



export default function RegisterScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = text => {
    console.log(text);
  }
  return (
    <KeyboardAwareScrollView>
          <RegisterScreenUI
            navigateToClient={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGIN) }
          /> 
    </KeyboardAwareScrollView>
  )};
