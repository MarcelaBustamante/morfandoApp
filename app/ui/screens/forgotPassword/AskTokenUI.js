import {
    StyleSheet,
    View,
    Text,
    TextInput} from 'react-native';
import Theme from '../../styles/Theme';
import { Button } from "@react-native-material/core";

const AskTokenUI = ({
    primText = 'No vino ningún texto',
    secText,
    loginHandler
  }) => {
   

  return (
    <View style={styles.container}>
        <View style={styles.form}>
        <Text style={styles.title}>Ingresa el código de</Text>
        <Text style={styles.title2}>seguridad</Text>
        <Text style={styles.subTitle}>Comprueba si recibiste un correo electrónico con tu código de 6 dígitos.</Text>
        <Text style={styles.tokenText}>Enviamos el código a:</Text>   
          <TextInput
            style={styles.emailInput}
            placeholder='Email@mail.com'
            placeholderTextColor={Theme.colors.PRIMARY}
            onChange={console.log("name")}
            editable={false} 
            selectTextOnFocus={false}        
            />
            <TextInput
            style={styles.input}
            placeholder='Token'
            placeholderTextColor={Theme.colors.PRIMARY}
            onChange={console.log("token")}
            keyboardType='numeric'
            />
            <Button style={{alignSelf: "flex-start"}} variant="text" title="¿No recibiste el código?" color={Theme.colors.SECONDARY}/> 
            <View style={{flexDirection:"row", justifyContent: "space-between"}} >
        <Button style={styles.button1} onPress={() => loginHandler()} title="Cancelar" color={Theme.colors.SECONDARY}/>
        <Button style={styles.button2} onPress={() => loginHandler()} title="Continuar" color={Theme.colors.PRIMARY}/>
        </View>
        </View>
    </View>
  );
}

export default AskTokenUI;

const styles = StyleSheet.create({
  container:{
    flex:1, 
    justifyContent:'center',
  },
  title: {
    fontSize: 32,
    color: Theme.colors.PRIMARY,
    fontWeight: "bold",
    alignSelf: "flex-end"
  },
  title2: {
    marginBottom: 20,
    fontSize: 32,
    color: Theme.colors.PRIMARY,
    fontWeight: "bold",
    alignSelf: "flex-end"
  },
  subTitle:{
    fontSize: 18,
    color: Theme.colors.PRIMARY,
    marginBottom: 30,
  },
  tokenText:{
    color: Theme.colors.PRIMARY,
    fontWeight: "bold",
    alignSelf: "flex-end"
  },
  input:{
    borderWidth:1,
    borderColor: Theme.colors.PRIMARY,
    width: 250,
    height: 39,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    alignSelf: "center",
  }, 
   button1:{
    width: 120,
    height: 39,
    margin: 10,

  },
  button2:{
    width: 130,
    height: 39,
    margin: 10,
  },
  forgotPassword:{
    borderColor: "gray",
  },
  form:{
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
  emailInput:{
    alignSelf: "flex-end",
  },
});