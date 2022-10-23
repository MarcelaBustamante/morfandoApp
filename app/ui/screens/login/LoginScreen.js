import React from 'react';
import LoginScreenUI from './LoginScreenUI';

import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native';
import IMAGES from "../../../assets/images/index";
import { Button } from "@react-native-material/core"

export default function LoginScreen() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = text => {
    console.log(text);
  }
  return (
    <View style={styles.container}>
      <IMAGES.logo style={styles.image}/>
      <Text style={styles.title}>Bienvenido a Morfando</Text>
      <Text style={styles.subTitle}>Ingrese su cuenta</Text>
        <View>
            <TextInput
            style={styles.input}
            placeholder='Usuario'
            onChange={console.log("name")}
            />
            <TextInput
            style={styles.input}
            placeholder='Contraseña'
            onChange={console.log("password")}
            />
        <Button style={styles.button} onPress={() => loginHandler('enviar datos')} title="Ingresar" />
        </View>
        <Text style={styles.forgotPassword}> Olvide mi contraseña </Text>
    </View>
    
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
