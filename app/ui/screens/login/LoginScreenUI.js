import { Image,
    StyleSheet,
    View,
    Text,
    TextInput} from 'react-native';
import Theme from '../../styles/Theme';
import IMAGES from "../../../assets/images/index";
import { Button } from "@react-native-material/core";

const LoginScreenUI = ({
    primText = 'No vino ningún texto',
    secText,
    loginHandler
  }) => {
   

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
      <IMAGES.logo style={styles.image}/>
      <Text style={styles.subTitle}>Bienvenido a Morfando</Text>
      <Text style={styles.title}>Ingrese su cuenta</Text>
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
            />
        <Button style={styles.button} onPress={() => loginHandler()} title="Ingresar" />
        <Button variant="text" title="Recuperar contraseña" color={Theme.colors.SECONDARY}/>
        <Button variant="text" title="¿No tienes una cuenta? ¡Registrate!" color="#330066"/>
        </View>
    </View>
  );
}

export default LoginScreenUI;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    flex:1
  },
  container2:{flex:1, justifyContent:'center',alignItems:'center'},
  title: {
    fontSize: 32,
    color: Theme.colors.PRIMARY,
    fontWeight: "bold",
  },
  subTitle:{
    fontSize: 24,
    color: Theme.colors.PRIMARY,
    marginBottom: 10,

  },
  input:{
    borderWidth:1,
    borderColor: Theme.colors.PRIMARY,
    width: 300,
    height: 39,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
  }, 
  image:{
    height: 80,
    width: 80,
    marginBottom: 10,
  },
  button:{
    width:300,
    height:39,
    margin:10
  },
  forgotPassword:{
    borderColor: "gray",
  },
  form:{
    flex:2,
    alignItems:'flex-start',
    justifyContent:'space-between',
    paddingHorizontal: 5,
    paddingVertical: 65,
    marginHorizontal: 35,
    marginVertical:35,
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