import React, { useState }  from 'react';
import { Button } from '@react-native-material/core';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from '@rneui/base';
import Theme from '../../styles/Theme';


const NavegationBarMenu = ({}) => {
    const  getNameRestaurant = () => {
        return "El almacén"
      }

return(
<View style={styles.container}> 
    <View style={[{flexDirection:"row", justifyContent: "space-between", backgroundColor: 'rgba(52, 52, 52, 0.6)'}]} >
        <Button style={styles.circle} title="<"/>
        <Text style={styles.name}>  {getNameRestaurant()}</Text> 
        <Icon
        raised
        type= "material-community"
        name= "pencil-outline"
        color= {Theme.colors.PRIMARY}
        size={18}
        onPress={() => console.log('hello')} />
    </View>
 </View>
);
}
export default NavegationBarMenu;

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