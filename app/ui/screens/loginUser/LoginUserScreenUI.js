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
  GoogleSigninButton,
} from '@react-native-google-signin/google-signin';
import { LoadingModal } from "../../components/shared/LoadingModal/LoadingModal"

const LoginUserScreenUI = ({
  navigateToPartner,
  navigateToClientRegister,
  _signIn,
  isLoading
  }) => {

  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <IMAGES.logo style={styles.image} />
        <Text style={styles.title}>Bienvenido a Morfando</Text>
        <Text style={styles.subTitle}>Ingrese su cuenta</Text>
      </View>
      <View style={styles.viewRow}>
        <View style={styles.tabLeftButton}>
          <Button color={Theme.colors.GREY} variant="text"  title="Cliente" />
        </View>
        <View style={styles.tabRightButton}>
          <Button  variant="text" onPress={ navigateToPartner } title="Restaurante" />
        </View>
      </View>
      <View style={styles.form}>
        <View style={styles.container2}></View>
        <View style={styles.container2}>
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={_signIn}
          />
        </View>
        <View style={styles.container}/>
        <Button onPress={navigateToClientRegister} title='atajo para flor'/>
      </View>
      <LoadingModal
        text="Iniciando sesión"
        show={isLoading}
      />
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
  tabLeftButton:{backgroundColor:Theme.colors.PRIMARY, borderTopLeftRadius:20, marginLeft:17, width:178, height:40 },
  tabRightButton:{backgroundColor:Theme.colors.GREY, borderTopRightRadius:20, marginRight:17, width:178, height:40 }
});