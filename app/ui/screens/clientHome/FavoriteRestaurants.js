import React, { useState } from 'react';
import RestaurantListNearby from './RestaurantListNearby';
import { Button } from '@react-native-material/core';
import Theme from '../../styles/Theme';
import { View, Text, StyleSheet } from 'react-native';



export default function FavoriteRestaurants() {
  welcomeString = 'Bienvenido a Morfando';

  const loginHandler = () => {
    console.log("Hola mundo");
  }

/* le saque el <SearchRestaurants
            loginHandler={loginHandler}/> si lo quieren lo pongo pero es mas trabajo al pedo*/
  return (
      <View style={styles.container}> 
        <View style={styles.containerCircle}>
            <Button style={styles.back} title="<"/>
        </View>
            
        <Text style={styles.title}> Mis Favoritos ♥ </Text>
        <View>
        </View>
        <View style={styles.container}>
            <RestaurantListNearby
            loginHandler={loginHandler}/>
        </View>
      </View>
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
    back:{
        width:39,
        height:39,
        borderBottomEndRadius: 20,
        borderTopEndRadius: 20,
        margin: 5,
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
      justifyContent: 'flex-end'
    },
    seeMore:{
      margin: 10,
      justifyContent:"flex-end",
      alignItems: "flex-end",
    }
  });