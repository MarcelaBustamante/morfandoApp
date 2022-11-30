import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from '@rneui/themed';
import { Button } from '@react-native-material/core';
import Theme from '../../styles/Theme';

const NavegationBarClientMenu = () => {
  const [estado, setEstado] = useState(false);

  const agregarFavoritos = () => {
    setEstado(!estado);
  };

  console.log(estado);

  const  getNameRestaurant = () => {
    return "El almacén"
  }
  return (
    <View style={styles.container}> 
    <View style={[{flexDirection:"row", justifyContent: "space-between", backgroundColor: 'rgba(52, 52, 52, 0.6)'}]} >
        <Button style={styles.circle} title="<"/>
        <Text style={styles.name}>  {getNameRestaurant()}</Text> 
      <TouchableOpacity style={styles.button} onPress={() => agregarFavoritos()}>
        <Ionicons
          raised
          name={estado ? 'heart-dislike' : 'heart'}
          size={25}
          color="#ff6347"
        />
      </TouchableOpacity>
      <Icon
        raised
        type= "material-community"
        name= "map-marker-radius-outline"
        color= {Theme.colors.PRIMARY}
        size={18}
        onPress={() => console.log('hello')} />
    </View>
 </View>
 
  );
};

export default NavegationBarClientMenu;
  const styles = StyleSheet.create({
    button: {
      width: 40,
      height: 40,
      borderTopEndRadius: 25,
      borderTopStartRadius: 25,
      borderBottomEndRadius: 25,
      borderBottomStartRadius: 25,
      margin: 10,
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: "white",
      shadowColor: "#000000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 8,
    elevation: 4,
    },
    name: {
      flex: 1,
      fontSize: 35,
      color: "#fff",
      fontWeight: "bold",
    },
    container:{
        backgroundColor: "#fff",
        flex: 1
      },
      circle:{
        width:39,
        height:39,
        borderBottomEndRadius: 20,
        borderTopEndRadius: 20,
        margin: 5,
      },
});