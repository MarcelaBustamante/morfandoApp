import React from 'react';
import { 
    StyleSheet,
    View,
    Text,
    Alert} from 'react-native';
import Theme from '../../styles/Theme';
import IMAGES from "../../../assets/images/index";

import { Button } from "@react-native-material/core";
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const LoginUserScreenUI = ({
  navigateToPartner
  }) => {

    // TODO: pasar a la logica y borrar de la vista

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
          <View style={styles.container2}>
              <IMAGES.logo style={styles.image} />
              <Text style={styles.title}>Bienvenido a Morfando</Text>
              <Text style={styles.subTitle}>Ingrese su cuenta</Text>
            </View>
            <View style={styles.viewRow}>
              <View style={styles.tabLeftButton}><Button  variant="text"  title="Cliente" /></View>
              <View style={styles.tabRightButton}><Button color={Theme.colors.GREY} variant="text" onPress={ navigateToPartner } title="Restaurante" /></View>
            </View>
            <View style={styles.form}>
              <View style={styles.container2}></View>
              <View style={styles.container2}>
                <GoogleSigninButton
                  size={GoogleSigninButton.Size.Wide}
                  color={GoogleSigninButton.Color.Dark}
                  onPress={this._signIn}
                />
              </View>
              <View style={styles.container}></View>
              </View>
    </View>
    );
}

export default LoginUserScreenUI;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"#fff",
    flex:2,
    justifyContent:'center',
    alignItems:'center',
  },
  container2:{
    flex:1, 
    justifyContent:'center'
    ,alignItems:'center'
  },
  viewRow:{
    flexDirection:'row', 
    alignSelf:"center", 
    marginTop:10,
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
    flex:1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 5,
    paddingVertical: 5,
    marginHorizontal: 5,
    marginVertical: 5,
    marginTop: 100,
    backgroundColor: Theme.colors.GREY,
    shadowColor: "#000000",
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.14,
    shadowRadius: 8,
    elevation: 4,
    borderBottomEndRadius:4,
  },
  image:{
    width:150,
    height:39,
  },
  tabLeftButton:{backgroundColor:Theme.colors.GREY, borderTopLeftRadius:20, marginLeft:17, width:178, height:40 },
  tabRightButton:{backgroundColor:Theme.colors.PRIMARY, borderTopRightRadius:20, marginRight:17, width:178, height:40 }
});