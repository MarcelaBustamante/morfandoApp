import React from 'react';
import ClientViewNearbyUI from './ClientViewNearbyUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function ClientViewNearby({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <ClientViewNearbyUI
            loginHandler={loginHandler}
            navigateToProfileClient ={() => navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_INFORMATION)}
            /> 
    </KeyboardAwareScrollView>
  )};

