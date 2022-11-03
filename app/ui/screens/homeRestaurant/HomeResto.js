import React, { useReducer } from 'react';
import HomeRestoUI from './HomeRestoUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';


export default function HomeResto({navigation}) {
  welcomeString = 'Bienvenido a Morfando';
  return (
    <KeyboardAwareScrollView>
          <HomeRestoUI
          navigateToProfile={() => navigation.navigate(NavigatorConstant.PROFILE_STACK.PROFILE)}
          navigateToNewResto={() => navigation.navigate(NavigatorConstant.LANDING_STACK.NEW_RESTAURANT)}/> 
    </KeyboardAwareScrollView>
  )};
