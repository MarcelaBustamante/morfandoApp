import React from 'react';
import ChangePasswordScreenUI from './ChangePasswordScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';


export default function ChangePasswordScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = text => {
    console.log(text);
  }
  return (
    <KeyboardAwareScrollView>
          <ChangePasswordScreenUI
            navigateToPersonalInfo={() => navigation.navigate(NavigatorConstant.PROFILE_STACK.INFORMATION)}
          /> 
    </KeyboardAwareScrollView>
  )};
