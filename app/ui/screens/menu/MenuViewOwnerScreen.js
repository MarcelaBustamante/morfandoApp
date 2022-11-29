import React from 'react';
import MenuViewOwnerScreenUI from './MenuViewOwnerScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function MenuViewOwnerScreen({navigation, route}) {
  welcomeString = 'Bienvenido a Morfando';
  const { restaurant } = route.params;
  console.log("Menu de Restaurant " + restaurant?.name);

  return ( 
          <MenuViewOwnerScreenUI
            navigateToHome={()=> navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT)}
            onCreateMenu={()=> navigation.navigate(NavigatorConstant.NEW_RESTAURANT_STACK.NEW_MEAL, {restaurant})}
          /> 

  )};
