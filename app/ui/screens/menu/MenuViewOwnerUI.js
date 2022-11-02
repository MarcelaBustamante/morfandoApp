import React from 'react';
import MenuList from './MenuList';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '@react-native-material/core';
import Theme from '../../styles/Theme';
import { View, Text, StyleSheet } from 'react-native';

export default function OwnerViewScreenUI() {
  welcomeString = 'Bienvenido a Morfando';
  //const DATA = [{owner: "Pedro Rodrigez"}]

  
  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
        <View style={styles.container}> 
                <Text style={styles.title}> Minutas </Text>
                /*
                <MenuList
                    loginHandler={loginHandler}/> 
        </View>
    </KeyboardAwareScrollView>
  )};

  const styles = StyleSheet.create({
    icon: {
      marginTop: 2,
      marginRight: 2,
      alignSelf: 'flex-end',
      borderRadius: 100,
    },
    welcomeOwner: {
        fontSize: 35,
        marginTop: 5,
        color: Theme.colors.SECONDARY,
        fontWeight: "bold",
        marginLeft: 15,
    },
    title: {
        fontSize: 30,
        marginTop: 20,
        fontWeight: "bold",
        color: Theme.colors.PRIMARY,
    },
    container:{
        backgroundColor: "#fff",
        flex: 1,
      },
      container1:{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button:{
        width:350,
        marginTop: 25,
        alignContent: 'center',
        alignSelf: 'center',
      },
      circle:{ //no puedo hacerlo pero bueno tecnicamente es el icon del cliente
        width:50,
        height:50,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        margin: 10,
        justifyContent:'center',
        alignItems: 'center',
    },
    containerCirculo: {
      alignSelf: 'flex-end',
    }
  });