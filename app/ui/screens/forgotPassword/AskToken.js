import React from 'react';
import AskTokenUI from './AskTokenUI';
import { Button } from "@react-native-material/core";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IMAGES from "../../../assets/images/index";
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
            navigateToChangePassword={()=> navigation.navigate(NavigatorConstant.PASSWORD_STACK.CHANGE_PASSWORD)}
            navigateToRecovery={()=> navigation.navigate(NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY)}
            /> 
    </KeyboardAwareScrollView>
  )};
