import { Image,
    StyleSheet,
    View,
    Text,
    TextInput} from 'react-native';
import Theme from '../../styles/Theme';
import { Button, even  } from "@react-native-material/core";
import { Switch, ListItem } from "@react-native-material/core";
import React, { useState } from "react";


const RegisterScreenUI = ({
    primText = 'No vino ningún texto',
    secText,
    loginHandler, 
    navigateToClient,
    formState,
    setFormState,
    registerHandler,
    error
  }) => {
    const [checked, setChecked] = useState(true);
    const handleChange = (field, text) => {
      setFormState({...formState, [field]: text});
    };


  return (
    <View>
        <View style={styles.container}>
        <Button style={styles.circle} onPress={navigateToClient} title="<"/>
          <Text style={styles.title}>Registrate</Text>
          <Text style={styles.subTitle}>Ingrese sus datos</Text>
          {error && <Text style={styles.error}>{error}</Text>}
          <View style={{alignItems: "center"}}>
            <TextInput
              style={styles.input}
              placeholder='Nombre'
              value={formState.name}
              onChangeText={(text) => handleChange("name", text)}
              placeholderTextColor={Theme.colors.PRIMARY}
            />
            <TextInput
              style={styles.input}
              placeholder='Apellido'
              value={formState.lastName}
              onChangeText={(text) => handleChange("lastName", text)}
              placeholderTextColor={Theme.colors.PRIMARY}
            />
            <TextInput
              style={styles.input}
              placeholder='Email'
              value={formState.email}
              onChangeText={(text) => handleChange("email", text)}
              placeholderTextColor={Theme.colors.PRIMARY}
            />
            <TextInput
              style={styles.input}
              placeholder='Contraseña'
              value={formState.password}
              onChangeText={(text) => handleChange("password", text)}
              placeholderTextColor={Theme.colors.PRIMARY}
              secureTextEntry= {true}
            />
            <TextInput
            style={styles.input}
            placeholder='Repetir Contraseña'
            value={formState.password2}
            onChangeText={(text) => handleChange("password2", text)}
            placeholderTextColor={Theme.colors.PRIMARY}
            secureTextEntry={true}
            />
         </View>
         <ListItem 
        title="Acepto los términos y condiciones"
        trailing={
          <Switch value={checked} onValueChange={() => setChecked(!checked)} />
        }
        onPress={() => setChecked(!checked)}
      />
        <Button style={styles.button} onPress={registerHandler} title="Registrame" />
        </View> 
       </View>
);
}
//<Button variant="text" title="¿tienes una cuenta? ¡Ingresa!" color={Theme.colors.SECONDARY}/>    

export default RegisterScreenUI;

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
    marginTop: 10,
    color: Theme.colors.PRIMARY,
  },
  subTitle:{
    fontSize: 20,
    color: "gray",
    marginLeft: 10,
    marginBottom:20,
    color: Theme.colors.PRIMARY,
  },
  input:{
    borderWidth:1,
    borderColor: "gray",
    width: 10,
    height: 40,
    width: 300,
    marginBottom: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: Theme.colors.PRIMARY,
    }, 
  button:{
    margin: 13,
  },
  image: {
    justifyContent: "center"
  },
  containerSVG: { 
    justifyContent: "flex-start",
    alignItems: "center",
  }, error: {
    color: Theme.colors.ERROR,
    fontSize: 18,
    fontWeight: "bold",
  },
});