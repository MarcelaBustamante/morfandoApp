import React from 'react';
import EditRestaurantScreen2UI from './EditRestaurantScreen2UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function EditRestaurantScreen2({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <EditRestaurantScreen2UI
            navigateToEditScreen1={() => navigation.navigate(NavigatorConstant.EDIT_RESTAURANT_STACK.EDIT_SCREEN_1)}
            navigateToMenuOwner={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT_DETAILS)}
            loginHandler={loginHandler}/>
             
    </KeyboardAwareScrollView>
  )};
