import React, { useReducer } from 'react';
import HomeRestoUI from './HomeRestoUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function HomeResto() {
  welcomeString = 'Bienvenido a Morfando';
  
  
  return (
    <KeyboardAwareScrollView>
          <HomeRestoUI/> 
    </KeyboardAwareScrollView>
  )};
