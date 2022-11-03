import React from 'react';
import ProfileScreenUI from './ProfileScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';


export default function ProfileScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <ProfileScreenUI
            navigateToHomeResto={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT)}
            navigateToPersonalInfo={() => navigation.navigate(NavigatorConstant.PROFILE_STACK.INFORMATION)}
            navigateToLoginPartner={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGIN)}
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
