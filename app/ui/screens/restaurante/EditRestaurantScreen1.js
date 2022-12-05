import React from 'react';
import EditRestaurantScreen1UI from './EditRestaurantScreen1UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function EditRestaurantScreen1({navigation, route}) {
  const { restaurant } = route.params;
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <EditRestaurantScreen1UI
            navigateToMenuOwner={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT_DETAILS, {restaurant})}
            navigateToEditScreen2={() => navigation.navigate(NavigatorConstant.EDIT_RESTAURANT_STACK.EDIT_SCREEN_2,{restaurant})}
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};
