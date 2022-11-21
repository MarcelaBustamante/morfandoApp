import { 
    StyleSheet,
    View,
    Text,
    TextInput} from 'react-native';
import Theme from '../../styles/Theme';
import { Button  } from "@react-native-material/core";
import React, { useState } from "react";


const ChangePasswordScreenUI = ({
    primText = 'No vino ningún texto',
    secText,
    loginHandler,
    navigateToPersonalInfo,
  }) => {
    const [checked, setChecked] = useState(true);

  return (
    <View>
        <View style={styles.container}>
        <Button style={styles.circle} onPress={navigateToPersonalInfo} title="<"/>
          <Text style={styles.title}>Cambiar contraseña</Text>
          <View style={{alignItems: "center"}}>
          <TextInput
            style={styles.input}
            placeholder='Contraseña actual'
            onChange={console.log("actualPassword")}
            placeholderTextColor={Theme.colors.PRIMARY}
            secureTextEntry= {true}
            />
          <TextInput
            style={styles.input}
            placeholder='Nueva contraseña'
            onChange={console.log("password")}
            placeholderTextColor={Theme.colors.PRIMARY}
            secureTextEntry= {true}
            />
            <TextInput
            style={styles.input}
            placeholder='Repetir contraseña'
            onChange={console.log("repeatPassword")}
            placeholderTextColor={Theme.colors.PRIMARY}
            secureTextEntry={true}
            />
         </View>
        <Button style={styles.button} onPress={navigateToPersonalInfo} title="Guardar" />
        </View> 
       </View>
);
}
//<Button variant="text" title="¿tienes una cuenta? ¡Ingresa!" color={Theme.colors.SECONDARY}/>    

export default ChangePasswordScreenUI;

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
    marginBottom: 20,
    color: Theme.colors.PRIMARY,
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
  button:{
    width: 150,
    margin: 13,
    alignSelf: "flex-end",
  },
  buttonText:{
    alignSelf: "flex-start",
    marginTop: 10,
  }
});