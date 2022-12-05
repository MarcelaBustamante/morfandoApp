import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Icon } from '@rneui/themed';
import { Button } from '@react-native-material/core';
import Theme from '../../styles/Theme';
import { addUserFavourite, deleteUserFavourite, getUserFavourite } from '../../../networking/api/endpoints/authClientWS';
import { useSelector } from 'react-redux';

const NavegationBarClientMenu = ({restaurant,navigateToClientNearBy}) => {
  const [estado, setEstado] = useState(false);
  const {userId} = useSelector(state => state.clientLogin);
  const {user} = useSelector(state => state.client);

  useEffect (() => {
    const result = user.favourites.filter(r => r.id === restaurant.id)
    if(result.length != 0){
      setEstado(true)
    }
    console.log("resultado ", result)
  },[]);

  const cambiarFavoritos = async () => {
    if (estado == true){
      await deleteUserFavourite(userId,restaurant.id);
      setEstado(false);
    }else{
      await addUserFavourite (userId,restaurant.id);
      setEstado(true);
    }
  };
  return (
    <View style={styles.container}> 
    <View style={[{flexDirection:"row", justifyContent: "space-between", backgroundColor: 'rgba(52, 52, 52, 0.6)'}]} >
        <Button style={styles.circle} onPress={navigateToClientNearBy} title="<"/>
        <Text style={styles.name}>{restaurant?.name}</Text> 
      <TouchableOpacity style={styles.button} onPress={cambiarFavoritos}>
        <Ionicons
          raised
          name={estado ? 'heart' : 'heart-dislike'}
          size={25}
          color="#ff6347"
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => agregarFavoritos()}>
        <Icon
          raised
          type= "material-community"
          name= "map-marker-radius-outline"
          color= {Theme.colors.PRIMARY}
          size={18}
          onPress={() => console.log('hello')}
        />
      </TouchableOpacity>
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