import React from 'react';
import MenuViewOwnerScreenUI from './MenuViewOwnerScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function MenuViewOwnerScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <MenuViewOwnerScreenUI
            navigateToHome={()=> navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT)}
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>

  )};
