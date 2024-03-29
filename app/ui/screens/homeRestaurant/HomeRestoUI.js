import React from 'react';
import RestaurantList from '../owner/RestaurantList';
import { Button } from '@react-native-material/core';
import Theme from '../../styles/Theme';
import { View, Text, StyleSheet } from 'react-native';

const HomeRestoUI = ({
  restaurants,
  navigateToNewResto,
  navigateToProfile,
  navigateMenuOwner
}) => {
  welcomeString = 'Bienvenido a Morfando';
  const getNombreOwner = () => {
    return "Pedro Rodriguez"
  }

  const getInicialOwner = () => {
    return getNombreOwner().substring(0, 1)
  }
 
  console.log("Restaurants en home resto ui", restaurants);

  return (
    // <KeyboardAwareScrollView>
      <View style={styles.container}>
        <View style={styles.containerCirculo}>
          <Button style={styles.circle} onClick={this.switchColor} onPress={navigateToProfile} title={getInicialOwner()} />
        </View>
        <Text style={styles.welcomeOwner}>Bienvenido a Morfando</Text>
        <View style={styles.container1}>
          <Button style={styles.button} onClick={this.switchColor} onPress={navigateToNewResto} title="Nuevo Restaurante" />
          <Text style={styles.title}> Mis restaurantes </Text>
          <RestaurantList
            navigateMenuOwner = {navigateMenuOwner}
            restaurants={restaurants}
          />
        </View>
      </View>
    //</KeyboardAwareScrollView>
  );
}

export default HomeRestoUI;

const styles = StyleSheet.create({
  icon: {
    marginTop: 2,
    marginRight: 2,
    alignSelf: 'flex-end',
    borderRadius: 100,
  },
  welcomeOwner: {
      fontSize: 32,
      marginTop: 5,
      color: Theme.colors.SECONDARY,
      fontWeight: "bold",
      alignSelf: "center"
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