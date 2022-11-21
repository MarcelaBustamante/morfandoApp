import React, { useState } from 'react';
import RestaurantListNearby from './RestaurantListNearby';
import SearchRestaurants from './SearchRestaurants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '@react-native-material/core';
import Theme from '../../styles/Theme';
import { View, Text, StyleSheet } from 'react-native';



export default function ClientViewNearbyUI() {
  welcomeString = 'Bienvenido a Morfando';
  //const DATA = [{owner: "Pedro Rodrigez"}]  

  const  getNameOwner = () => {
    return "Pedro Rodriguez"
  }

  const  getInicialOwner = () => {
    return getNameOwner().substring(0,1)
  }
  const loginHandler = () => {
    console.log("Hola mundo");
  }


  return (
    <KeyboardAwareScrollView>
      <View style={styles.container}> 

        <View style={styles.containerCircle}>
          <Button style={styles.circleGreen} onPress={() => loginHandler('enviar datos')} title="◀"/>
          <Button style={styles.circle} onClick={this.switchColor} onPress={() => loginHandler()} title={getInicialOwner()} />
        </View>
        <View style={styles.container}>
            <SearchRestaurants
            loginHandler={loginHandler}/>
        </View>
        <Text style={styles.title}> Restaurantes Cercanos 📍 </Text>
        <View>
        </View>
        <View style={styles.container}>
            <RestaurantListNearby
            loginHandler={loginHandler}/>
        </View>
        <Button variant="text" title="Ver más >>>"  color={Theme.colors.SECONDARY} style={styles.seeMore}/>
        <Text style={styles.title}> Mis Favoritos ♥</Text>
        <View style={styles.container}>
            <RestaurantListNearby
            loginHandler={loginHandler}/> 
        </View>
        <Button variant="text" title="Ver más >>>"  color={Theme.colors.SECONDARY} style={styles.seeMore}/>
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
    searchBar: {
      width: 250,
      height: 50,
      alignSelf: 'flex-start',
      padding: 40,
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
    circleGreen: {
      width:50,
      height:50,
      borderTopEndRadius: 25,
      borderTopStartRadius: 25,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
      margin: 10,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: Theme.colors.SECONDARY,
    },
    containerCircle: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    seeMore:{
      margin: 10,
      justifyContent:"flex-end",
      alignItems: "flex-end",
    }
  });