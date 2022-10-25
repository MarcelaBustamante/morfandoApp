import { Image,
    StyleSheet,
    View,
    Text,
    TextInput, Pressable} from 'react-native';
import Theme from '../../styles/Theme';
import IMAGES from "../../../assets/images/index";
import { Button, IconButton  } from "@react-native-material/core";
import { AntDesign } from '@expo/vector-icons';

const LoginScreenUI = ({
    primText = 'No vino ningún texto',
    secText,
    loginHandler
  }) => {
   
    

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <IMAGES.logo style={styles.image}/>
      <Text style={styles.title}>Bienvenido a Morfando</Text>
      <Text style={styles.subTitle}>Ingrese su cuenta</Text>
      </View>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Usuario'
            placeholderTextColor={Theme.colors.PRIMARY}
            onChange={console.log("name")}
            />
            <TextInput
            style={styles.input}
            placeholder='Contraseña'
            placeholderTextColor={Theme.colors.PRIMARY}
            onChange={console.log("password")}
            secureTextEntry= {true}
            />
        <Button style={styles.button} onClick={this.switchColor} onPress={() => loginHandler()} title="Ingresar" color='blue'/>
        <Button variant="text" title="Recuperar contraseña" color={Theme.colors.SECONDARY}/>
        <Button variant="text" title="¿No tienes una cuenta? ¡Registrate!" color="#330066" />
        <AntDesign name="stepbackward" size={24} color="black" />
                </View>
    </View>
  );
}

export default LoginScreenUI;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  container2:{
    flex:1, 
    justifyContent:'center'
    ,alignItems:'center'
  },
  title: {
    fontSize: 32,
    color: Theme.colors.PRIMARY,
    fontWeight: "bold",
  },
  subTitle:{
    fontSize: 24,
    color: Theme.colors.PRIMARY,
  },
  input:{
    borderWidth:1,
    borderColor: Theme.colors.PRIMARY,
    width: 250,
    height: 39,
    margin: 10,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  }, 
  image:{
    height: 80,
    width: 80,
    marginBottom: 10,
  },
  button:{
    width:150,
    height:39,
    margin: 7,
  },
  forgotPassword:{
    borderColor: "gray",
  },
  form:{
    flex:2,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 5,
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
  image:{
    width:150,
    height:39,
  }
});