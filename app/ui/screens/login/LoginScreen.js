import React from 'react';
import LoginScreenUI from './LoginScreenUI';

import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import IMAGES from "../../../assets/images/index";
import { Button } from "@react-native-material/core";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = text => {
    console.log(text);
  }
  return (
    <KeyboardAwareScrollView>
          <LoginScreenUI/> 
    </KeyboardAwareScrollView>
  );
}
const styles = StyleSheet.create({
      container:{
        backgroundColor:"#fff",
        justifyContent: 'center',
        alignItems: 'center',
      },
      title: {
        fontSize: 30,
        color: "#000",
        fontWeight: "bold",
      },
      subTitle:{
        fontSize: 20,
        color: "gray",
        marginBottom: 10,

      },
      input:{
        borderWidth:1,
        borderColor: "gray",
        width: 10,
        height: 40,
        width: 150,
        marginTop: 5,
        borderWidth: 1,
        padding: 10,
        borderRadius: 30,
      }, 
      image:{
        height: 80,
        width: 80,
        marginBottom: 10,
      },
      button:{
        margin: 20,
      },
      forgotPassword:{
        borderColor: "gray",
      }
});
