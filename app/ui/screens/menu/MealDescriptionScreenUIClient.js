import React, { useState }  from 'react';
//import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '@react-native-material/core';
import Theme from '../../styles/Theme';
import { View, Text, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import CarouselImagesMeals from "./CarouselImagesMeals";

export default function MealDescriptionScreenUIClient({
  navigateToHome,
}) {
  welcomeString = 'Bienvenido a Morfando';


  const  getNameMeal = () => {
    return "Milanesa con papas fritas"
  }

  const  getIngredients = () => {
    return "la descripción que no me imagino"
  }

  const  getPrice = () => {
    return "1800"
  }
  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
        <View style={styles.container}> 
            <View style={[{flexDirection:"row", justifyContent: "space-between", backgroundColor: 'rgba(52, 52, 52, 0.6)'}, styles.name ]} >
              <Button style={styles.circle} onPress={navigateToHome} title="<"/>
              <Text style={styles.name}>{getNameMeal()}</Text> 
              </View>
              <View style={styles.container}>
                  <CarouselImagesMeals
                      loginHandler={loginHandler}/> 
               </View>
               <View style={styles.container1}>
               <Text style={styles.title}>Ingredientes</Text> 
               <Text style={{color:Theme.colors.ALERT, marginLeft: 15}}>apto o no vegano, apto o no celíaco</Text> 
                <Text style={{color:Theme.colors.PRIMARY, marginLeft: 15}}>{getIngredients()}</Text> 
                <Text style={{color:Theme.colors.PRIMARY, fontSize: 40, alignSelf: "flex-end", marginLeft: 15}}>${getPrice()}</Text> 

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
    name: {
        flex: 1,
        fontSize: 35,
        color: "#fff",
        fontWeight: "bold",
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: Theme.colors.PRIMARY,
        marginBottom: 10,
    },
    container:{
        backgroundColor: "#fff",
        flex: 1,
      },
      button:{
        width:350,
        marginTop: 25,
        alignContent: 'center',
        alignSelf: 'center',
      },
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    button: {
      marginTop: 10,
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    circle:{
      width:39,
      height:39,
      borderBottomEndRadius: 20,
      borderTopEndRadius: 20,
      margin: 5,
    },
    container1:{
      flex:2,
      justifyContent: "center",
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginHorizontal: 10,
      marginVertical: 10,
      marginTop: 10,
      backgroundColor: Theme.colors.GREY,
      shadowColor: "#000000",
      shadowOffset: {
        height: 2,
        width: 0,
      },
      shadowOpacity: 0.14,
      shadowRadius: 8,
      elevation: 4,
      borderRadius: 4,
    },

  });

