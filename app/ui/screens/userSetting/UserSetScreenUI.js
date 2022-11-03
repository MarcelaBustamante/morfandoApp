import {
    StyleSheet,
    View,
    Text,
    TextInput, Modal, Pressable} from 'react-native';
import Theme from '../../styles/Theme';
import { Button  } from "@react-native-material/core";
import React, { useState } from "react";


const UserSetScreenUI = ({
    primText = 'No vino ningún texto',
    secText,
    loginHandler, 
    navigateToProfile,
    navigateToChangePassword,
    navigateToLoginPartner,
  }) => {
    const [checked, setChecked] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
        <View style={styles.container}>
        <Button style={styles.circle} onPress={navigateToProfile} title="<"/>
          <Text style={styles.title}>Información Personal</Text>
          <View style={{alignItems: "center"}}>
            <TextInput
            style={styles.input}
            placeholder='Nombre'
            onChange={console.log("name")}
            placeholderTextColor={Theme.colors.PRIMARY}
            />
            <TextInput
            style={styles.input}
            placeholder='Apellido'
            onChange={console.log("lastName")}
            placeholderTextColor={Theme.colors.PRIMARY}
            />
            <TextInput
            style={styles.input}
            placeholder='Email'
            onChange={console.log("email")}
            placeholderTextColor={Theme.colors.PRIMARY}
            />
         </View>
        <Button style={styles.buttonText} onPress={navigateToChangePassword} variant="text" title="Cambiar contraseña" color={Theme.colors.SECONDARY}/> 
        <View>
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
          
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>¿Está seguro de eliminar esta cuenta?</Text>
            <TextInput
              style={styles.input2}
              placeholder='Contraseña actual'
              onChange={console.log("actualPassword")}
              placeholderTextColor={Theme.colors.ERROR}
              secureTextEntry= {true}
            />
            <Pressable
              style={[styles.buttonClose]}
              onPress={() => {
                navigateToLoginPartner;
                setModalVisible(!modalVisible);
                }}             >
              <Text style={styles.textStyle1}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>  Eliminar cuenta  </Text>
      </Pressable>
        </View>
        <Button style={styles.button1} onPress={() => loginHandler('enviar datos')} title="Guardar" />
        </View> 
        </View> 

);
}

export default UserSetScreenUI;

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
  button1:{
    width: 150,
    margin: 13,
    alignSelf: "flex-end",
  },
  buttonText:{
    alignSelf: "flex-start",
    marginTop: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  buttonOpen: {
    backgroundColor: Theme.colors.GREY,
    padding: 10,
    width: 150,
  },
  buttonClose: {
    padding: 10,
    backgroundColor: "red",
  },
  textStyle: {
    color: "red",
    textAlign: "left",
    fontSize: 16,
 },
 textStyle1: {
  color: "white",
  textAlign: "left",
  fontSize: 16,
},
  modalText: {
    marginBottom: 15,
    fontSize: 15,
    textAlign: "center",
    color: "red"
  },
  input2:{
    borderWidth:1,
    width: 10,
    height: 40,
    width: 300,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: Theme.colors.ERROR,
    }, 
});