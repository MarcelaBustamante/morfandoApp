import React from 'react';
import LoginUserScreenUI from './LoginUserScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';


export default function LoginScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  return (
    <KeyboardAwareScrollView>
          <LoginUserScreenUI
          navigateToPartner={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGIN)}
          /> 
    </KeyboardAwareScrollView>
  )};
