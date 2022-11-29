import React from 'react';
import ChangePasswordScreenClientUI from './ChangePasswordScreenClientUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';


export default function ChangePasswordScreenClient({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = text => {
    console.log(text);
  }
  return (
    <KeyboardAwareScrollView>
          <ChangePasswordScreenClientUI
            navigateToPersonalInfo={() => navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_INFORMATION)}
          /> 
    </KeyboardAwareScrollView>
  )};
