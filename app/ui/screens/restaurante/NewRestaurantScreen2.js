import React from 'react';
import NewRestaurantScreen2UI from './NewRestaurantScreen2UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function NewRestaurantScreen2({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <NewRestaurantScreen2UI
            navigateToNewResto={() => navigation.navigate(NavigatorConstant.LANDING_STACK.NEW_RESTAURANT)}
            navigateToNewMeal={() => navigation.navigate(NavigatorConstant.NEW_RESTAURANT_STACK.NEW_MEAL)}
            loginHandler={loginHandler}/>
             
    </KeyboardAwareScrollView>
  )};
