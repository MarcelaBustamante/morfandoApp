import React, { useSyncExternalStore } from 'react';
import LoginScreenUI from './LoginScreenUI';
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import IMAGES from "../../../assets/images/index";


export default function LoginScreen() {
  const loginHandler = text => {
    console.log(text);
  }
  return (
    <LoginScreenUI/>
  );
}
