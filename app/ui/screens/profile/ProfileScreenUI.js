import { Image,
    StyleSheet,
    View,
    Text} from 'react-native';
import Theme from '../../styles/Theme';
import { Button } from "@react-native-material/core";
import React, { useState } from "react";


const ProfileScreenUI = ({
    primText = 'No vino ningún texto',
    secText,
    loginHandler,
    navigateToHomeResto,
    navigateToPersonalInfo,
    navigateToLoginPartner,
  }) => {
    const [checked, setChecked] = useState(true);

  return (
        <View style={styles.container}>
        <Button style={styles.circle} onPress={navigateToHomeResto} title="<"/>
          <Text style={styles.title}>Mi Perfil</Text>
          <Text style={styles.subTitle}>Datos Personales</Text>
          <Button style={styles.button} onPress={navigateToPersonalInfo} title="Información personal" />
        <Text style={styles.subTitle}>Información legal</Text>
        <Button style={styles.button} onPress={() => loginHandler('enviar datos')} title="Términos y condiciones" />
          <Button style={styles.button} onPress={() => loginHandler('enviar datos')} title="Politicas de privacidad"/>
          <Button style={styles.button2} onPress={ navigateToLoginPartner} title="Cerrar sesión" color= {Theme.colors.ALERT}/>

        </View> 
);
}
//<Button variant="text" title="¿tienes una cuenta? ¡Ingresa!" color={Theme.colors.SECONDARY}/>    

export default ProfileScreenUI;

const styles = StyleSheet.create({
  container:{
    flex:2,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    marginTop: 50,
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
  circle:{
    width:39,
    height:39,
    borderBottomEndRadius: 20,
    borderTopEndRadius: 20,
  },
  title: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: Theme.colors.PRIMARY,
  },
  subTitle:{
    fontSize: 24,
    marginTop: 20,
    marginBottom: 20,
    color: Theme.colors.SECONDARY,
    fontWeight: "bold",
  },
  input:{
    borderWidth:1,
    borderColor: "gray",
    width: 10,
    height: 40,
    width: 300,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: Theme.colors.PRIMARY,
    }, 
  buttonText:{
    alignSelf: "flex-start",
    marginTop: 10,
  },
  button: {
    marginBottom: 10,
  },
  button2: {
    marginTop: 30,
    
  }
});