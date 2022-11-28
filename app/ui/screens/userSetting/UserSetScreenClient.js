import React from 'react';
import UserSetScreenClientUI from './UserSetScreenClientUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function UserSetScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <UserSetScreenClientUI
            navigateToProfile={() => navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_INFORMATION)}
            navigateToChangePassword={() => navigation.navigate(NavigatorConstant.PASSWORD_STACK.CHANGE_PASSWORD)}
            navigateToLoginPartner={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGIN)}
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
