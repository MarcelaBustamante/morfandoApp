import React from 'react';
import ClientViewNearbyUI from './ClientViewNearbyUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default function ClientViewNearby() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
          <ClientViewNearbyUI
            loginHandler={loginHandler}/> 
    </KeyboardAwareScrollView>
  )};

