import React from 'react';
import NewRestaurantScreen2UI from './NewRestaurantScreen2UI';
import { Button } from "@react-native-material/core";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import IMAGES from "../../../assets/images/index";
import NavigatorConstant from '../../../navigation/NavigatorConstant';


export default function NewRestaurantScreen2() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <NewRestaurantScreen2UI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
