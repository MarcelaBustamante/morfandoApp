import React from 'react';
import { Image,
    StyleSheet,
    View, 
    Text} from 'react-native';



export default function LoginScreen() {
  return (
    <View style={styles.container}>
       <Image
        style={styles.tinyLogo}
        source={require('../../../assets/images/logo.png')}
      /> 
      <Text style={styles.text}>Bienvenido a Morfando</Text>
      <Text style={styles.text}>Inicio de sesión</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#242424"
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    text: {
      color: "white",
      fontSize: 42,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      fontFamily: "JosefinSans"
    }
  });
