import React from 'react';
import ChangePasswordScreenUI from './ChangePasswordScreenUI';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';


export default function LoginScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = text => {
    console.log(text);
  }
  return (
    <KeyboardAwareScrollView>
          <ChangePasswordScreenUI
            navigateToClient={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGIN) }
          /> 
    </KeyboardAwareScrollView>
  )};
