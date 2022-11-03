import React from 'react';
import AskMailUI from './AskMailUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function AskMail({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <AskMailUI
            loginHandler={loginHandler}
            navigateToClient={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGIN) }
            navigateToAskToken = {()=> navigation.navigate(NavigatorConstant.PASSWORD_STACK.ASKTOKEN)}  
          /> 
    </KeyboardAwareScrollView>
  )};
