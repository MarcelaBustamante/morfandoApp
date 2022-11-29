import React, { useState } from 'react';
import RestaurantListNearby from './RestaurantListNearby';
import SearchRestaurants from './SearchRestaurants';
import { Button } from '@react-native-material/core';
import Theme from '../../styles/Theme';
import { View, Text, StyleSheet } from 'react-native';
import Filter from "./Filter"


export default function ClientViewNearbyUI({
  navigateToProfileClient,
  /* MENSAJE PARA FLOR : supuestamente el boton de favs seconecta con FavoriteRestaurants y de ahi con el boton de bak deberia volver a esta pantalla*/

}) {
  welcomeString = 'Bienvenido a Morfando';

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
      <View style={styles.container}> 

        <View style={styles.containerCircle}>
          <Button style={styles.circle} onClick={this.switchColor} onPress={navigateToProfileClient} title={getInicialOwner()} />
        </View>
        <Text style={styles.welcomeOwner}>Hola, {getNameOwner()}</Text> 
            <SearchRestaurants
            loginHandler={loginHandler}/>
        <View style={{flexDirection:"row", justifyContent: "space-between"}} >
               <Filter
            loginHandler={loginHandler}/>
        <Button title="Mis Favoritos ♥"  color={Theme.colors.SECONDARY} style={styles.seeMore}/> 
        </View>
        <Text style={styles.title}> Restaurantes Cercanos 📍 </Text>
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
        fontSize: 25,
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
  });
