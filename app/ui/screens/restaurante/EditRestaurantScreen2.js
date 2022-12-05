import React from 'react';
import EditRestaurantScreen2UI from './EditRestaurantScreen2UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function EditRestaurantScreen2({navigation, route}) {
  welcomeString = 'Bienvenido a Morfando';
  const { restaurant } = route.params;
  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <EditRestaurantScreen2UI
            navigateToEditScreen1={() => navigation.navigate(NavigatorConstant.EDIT_RESTAURANT_STACK.EDIT_SCREEN_1,{restaurant})}
            navigateToMenuOwner={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT_DETAILS,{restaurant})}
            loginHandler={loginHandler}/>
             
    </KeyboardAwareScrollView>
  )};
