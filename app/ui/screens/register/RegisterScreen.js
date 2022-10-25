import React from 'react';
import RegisterScreenUI from './RegisterScreenUI';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { Button } from "@react-native-material/core";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = text => {
    console.log(text);
  }
  return (
    <KeyboardAwareScrollView>
          <RegisterScreenUI/> 
    </KeyboardAwareScrollView>
  )};
