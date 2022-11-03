import React from 'react';
import UserSetScreenUI from './UserSetScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function UserSetScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <UserSetScreenUI
            navigateToProfile={() => navigation.navigate(NavigatorConstant.PROFILE_STACK.PROFILE)}
            navigateToChangePassword={() => navigation.navigate(NavigatorConstant.PASSWORD_STACK.CHANGE_PASSWORD)}
            navigateToLoginPartner={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGIN)}
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
