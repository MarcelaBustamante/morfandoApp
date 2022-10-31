import React from 'react';
import NewRestaurantScreen1UI from './NewRestaurantScreen1UI';
import { Button } from "@react-native-material/core";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IMAGES from "../../../assets/images/index";
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <NewRestaurantScreen1UI
            navigateToNextScreen={() => navigation.navigate(NavigatorConstant.NEW_RESTAURANT_STACK.SCREEN_2) }
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
