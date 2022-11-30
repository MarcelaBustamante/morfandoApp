import React, { useState } from 'react';
import RestaurantListNearby from './RestaurantListNearby';
import SearchRestaurants from './SearchRestaurants';
import { Button } from '@react-native-material/core';
import Theme from '../../styles/Theme';
import { View, Text, StyleSheet } from 'react-native';
import { Pressable } from 'react-native';
import { Icon } from '@rneui/themed';

export default function ClientViewNearbyUI({
  client,
  restaurants,
  longitude,
  latitude,
  navigateToProfileClient,
  navigateToFavourites
}) {
/* MENSAJE PARA FLOR : supuestamente el boton de favs seconecta con FavoriteRestaurants y de ahi con el boton de bak deberia volver a esta pantalla*/

  const clientFirstLetter = () => {
    console.log("CLIENT", client);
    return client?.name?.substring(0, 1) ?? '';
  }

  const clientName = () => {
    if (client) {
      return `${client.name ?? ''} ${client.lastName ?? ''}`;
    }
    return '';
  }

  return (
      <View style={styles.container}> 

        <View style={styles.containerCircle}>
          <Button style={styles.circle} onClick={this.switchColor} onPress={navigateToProfileClient} title={clientFirstLetter()} />
        </View>
        <Text style={styles.welcomeOwner}>Hola, {clientName()}</Text> 
        <SearchRestaurants longitude={longitude} latitude={latitude} />
        <View style={styles.iconContainer}>
          <Icon name='favorite' style={styles.icon}/>
          <Pressable onPress={navigateToFavourites}>
            <Text style={styles.title}> Mis Favoritos ></Text>
          </Pressable>
        </View>
        <View style={styles.iconContainer}>
          <Icon name='place' style={styles.icon}/>
          <Text style={styles.title}> Restaurantes Cercanos</Text>
        </View>
        <View style={styles.container}>
            <RestaurantListNearby restaurants={restaurants}/>
        </View>
      </View>
  )};

  const styles = StyleSheet.create({
    iconContainer: {
      flexDirection: "row",
      alignContent: "center",
      paddingLeft: 15,
      paddingTop: 15,
    },
    icon: {
      paddingTop: 7,
      color: Theme.colors.PRIMARY,
    },
    welcomeOwner: {
        fontSize: 25,
        marginTop: 5,
        color: Theme.colors.SECONDARY,
        fontWeight: "bold",
        marginLeft: 15,
    },
    title: {
      fontSize: 28,
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
