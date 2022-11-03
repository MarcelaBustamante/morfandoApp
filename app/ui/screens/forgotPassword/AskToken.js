import React from 'react';
import AskTokenUI from './AskTokenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';


export default function AskToken({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <AskTokenUI
            loginHandler={loginHandler}
            navigateToHome={()=> navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT)}
            navigateToRecovery={()=> navigation.navigate(NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY)}
            /> 
    </KeyboardAwareScrollView>
  )};
