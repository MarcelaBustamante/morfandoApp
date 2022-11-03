import React from 'react';
import MenuViewScreen from './MenuViewScreen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function MenuViewOwner({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <MenuViewScreen
            navigateToHome={()=> navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT)}
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
