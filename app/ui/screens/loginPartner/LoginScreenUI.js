import React from 'react';
import { Image,
    StyleSheet,
    View,
    Text,
    TextInput,
    Alert} from 'react-native';
import Theme from '../../styles/Theme';
import IMAGES from "../../../assets/images/index";
import { Button } from "@react-native-material/core";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginScreenUI = ({
    primText = 'No vino ningún texto',
    username,
    setUsername,
    password,
    setPassword,
    error,
    loginHandler,
    isLoggedIn,
    loginDispatch
    
  }) => {

    // TODO: borrar

    GoogleSignin.configure({
      webClientId: '163501080359-ecr6qqkja70nn1tjcklirq8l672gdc7c.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
    });  
    _signIn = async () => {
      try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        Alert.alert(`Sign in ok ${userInfo.user}`);
        console.log(JSON.stringify(userInfo));
      } catch (error) {
        const typedError = error;
  
        switch (typedError.code) {
          case statusCodes.SIGN_IN_CANCELLED:
            // sign in was cancelled
            Alert.alert('cancelled');
            break;
          case statusCodes.IN_PROGRESS:
            // operation (eg. sign in) already in progress
            Alert.alert('in progress');
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            // android only
            Alert.alert('play services not available or outdated');
            break;
          default:
            Alert.alert('Something went wrong', typedError.toString());
            this.setState({
              error: typedError,
            });
        }
      }
    };
    // fin borrar

  return (
    <View style={styles.container}>
      {
        isLoggedIn ? (
          <><Text>Ingresaste al futuro</Text></>
        ) :
        (
          <><View style={styles.container2}>
              <IMAGES.logo style={styles.image} />
              <Text style={styles.title}>Bienvenido a Morfando</Text>
              <Text style={styles.subTitle}>Ingrese su cuenta</Text>
            </View><View style={styles.form}>
              {error && <Text style={styles.error}>{error}</Text>}
                <TextInput
                  style={styles.input}
                  placeholder='Usuario'
                  placeholderTextColor={Theme.colors.PRIMARY}
                  value={username}
                  onChangeText={(text) =>
                    loginDispatch({
                      type: "fieldUpdate",
                      field: "username",
                      value: text
                    })} />
                <TextInput
                  style={styles.input}
                  placeholder='Contraseña'
                  placeholderTextColor={Theme.colors.PRIMARY}
                  value={password}
                  onChangeText={(text)=>{loginDispatch({
                    type: "fieldUpdate",
                    field: "password",
                    value: text
                  })}}
                  secureTextEntry={true} />
                <Button style={styles.button} onPress={loginHandler} title="Ingresar" />
                <Button variant="text" title="Recuperar contraseña" color={Theme.colors.SECONDARY} />
                <Button variant="text" title="¿No tienes una cuenta? ¡Registrate!" color={Theme.colors.PRIMARY} />
                
                {/* TODO:borrar */}
                <GoogleSigninButton
                  size={GoogleSigninButton.Size.Standard}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={this._signIn}
                />
              </View></>
        )
      }
      
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
  error:{
    color: Theme.colors.ERROR,
    fontSize:18,
    fontWeight: "bold",
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