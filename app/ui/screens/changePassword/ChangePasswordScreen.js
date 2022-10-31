import React from 'react';
import ChangePasswordScreenUI from './ChangePasswordScreenUI';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';


export default function ChangePasswordScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = text => {
    console.log(text);
  }
  return (
    <KeyboardAwareScrollView>
          <ChangePasswordScreenUI
            navigateToAskToken = {()=> navigation.navigate(NavigatorConstant.PASSWORD_STACK.ASKTOKEN)}  
            //navigateToRecovery={()=> navigation.navigate(NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY)} //esto tiene que llevar al pantalla principal de logueo
          /> 
    </KeyboardAwareScrollView>
  )};
