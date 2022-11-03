import React from 'react';
import NewRestaurantScreen1UI from './NewRestaurantScreen1UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function NewRestaurantScreen1({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <NewRestaurantScreen1UI
            navigateToHomeResto={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT)}
            navigateToScreen2={() => navigation.navigate(NavigatorConstant.NEW_RESTAURANT_STACK.SCREEN_2)}
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
