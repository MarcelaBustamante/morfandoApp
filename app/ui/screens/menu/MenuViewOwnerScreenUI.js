import React, { useState }  from 'react';
import TipeFoodList from './TipeFoodList';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '@react-native-material/core';
import Theme from '../../styles/Theme';
import { View, Text, StyleSheet, Alert, Modal, Pressable } from 'react-native';

export default function MenuViewOwnerScreenUI({
  navigateToHome,
}) {
  welcomeString = 'Bienvenido a Morfando';

  const [modalVisibleL, setModalVisibleL] = useState(false);
  const [modalVisibleM, setModalVisibleM] = useState(false);
  const [modalVisibleMi, setModalVisibleMi] = useState(false);
  const [modalVisibleJ, setModalVisibleJ] = useState(false);
  const [modalVisibleV, setModalVisibleV] = useState(false);
  const [modalVisibleS, setModalVisibleS] = useState(false);
  const [modalVisibleD, setModalVisibleD] = useState(false);


  const  getNameRestaurant = () => {
    return "El almacén"
  }

  const loginHandler = () => {
    console.log("Hola mundo");
  }
  return (
    <KeyboardAwareScrollView>
        <View style={styles.container}> 
        <Button style={styles.circle} onPress={navigateToHome} title="<"/>
            <Text style={styles.name}>   {getNameRestaurant()}</Text> 
            <View style={{flexDirection:"row", justifyContent: "space-between"}} >
               <View style={styles.centeredView}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisibleL}
                      onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisibleL(!modalVisibleL);
                      }}
                    >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Horario Lunes</Text>
                          <Text>De: inserte horario</Text>
                          <Text>A: inserte horario</Text>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisibleL(!modalVisibleL)}
                          >
                            <Text style={styles.textStyle}> OK </Text>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisibleL(true)}
                  >
                    <Text style={styles.textStyle}>  L  </Text>
                  </Pressable>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisibleM}
                      onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisibleM(!modalVisibleM);
                      }}
                    >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Horario Martes</Text>
                          <Text>De: inserte horario</Text>
                          <Text>A: inserte horario</Text>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisibleM(!modalVisibleM)}
                          >
                            <Text style={styles.textStyle}> OK </Text>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisibleM(true)}
                  >
                    <Text style={styles.textStyle}> M </Text>
                  </Pressable>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisibleMi}
                      onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisibleMi(!modalVisibleMi);
                      }}
                    >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Horario Miércoles</Text>
                          <Text>De: inserte horario</Text>
                          <Text>A: inserte horario</Text>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisibleMi(!modalVisibleMi)}
                          >
                            <Text style={styles.textStyle}> OK </Text>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisibleMi(true)}
                  >
                    <Text style={styles.textStyle}> Mi </Text>
                  </Pressable>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisibleJ}
                      onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisibleJ(!modalVisibleJ);
                      }}
                    >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Horario Jueves</Text>
                          <Text>De: inserte horario</Text>
                          <Text>A: inserte horario</Text>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisibleJ(!modalVisibleJ)}
                          >
                            <Text style={styles.textStyle}> OK </Text>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisibleJ(true)}
                  >
                    <Text style={styles.textStyle}>  J  </Text>
                  </Pressable>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisibleV}
                      onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisibleV(!modalVisibleV);
                      }}
                    >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Horario Viernes</Text>
                          <Text>De: inserte horario</Text>
                          <Text>A: inserte horario</Text>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisibleV(!modalVisibleV)}
                          >
                            <Text style={styles.textStyle}> OK </Text>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisibleV(true)}
                  >
                    <Text style={styles.textStyle}>  V  </Text>
                  </Pressable>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisibleS}
                      onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisibleS(!modalVisibleS);
                      }}
                    >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Horario Sábado</Text>
                          <Text>De: inserte horario</Text>
                          <Text>A: inserte horario</Text>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisibleS(!modalVisibleS)}
                          >
                            <Text style={styles.textStyle}> OK </Text>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisibleS(true)}
                  >
                    <Text style={styles.textStyle}>  S  </Text>
                  </Pressable>
                </View>
                <View style={styles.centeredView}>
                    <Modal
                      animationType="slide"
                      transparent={true}
                      visible={modalVisibleD}
                      onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModalVisibleD(!modalVisibleD);
                      }}
                    >
                      <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                          <Text style={styles.modalText}>Horario Domingo</Text>
                          <Text>De: inserte horario</Text>
                          <Text>A: inserte horario</Text>
                          <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisibleD(!modalVisibleD)}
                          >
                            <Text style={styles.textStyle}> OK </Text>
                          </Pressable>
                        </View>
                      </View>
                    </Modal>
                  <Pressable
                    style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisibleD(true)}
                  >
                    <Text style={styles.textStyle}>  D  </Text>
                  </Pressable>
                </View>
                </View>
                <View style={styles.container1}>
                    <TipeFoodList
                        loginHandler={loginHandler}/> 
               </View>
        </View>
    </KeyboardAwareScrollView>
  )};

  const styles = StyleSheet.create({
    icon: {
      marginTop: 2,
      marginRight: 2,
      alignSelf: 'flex-end',
      borderRadius: 100,
    },
    name: {
        fontSize: 35,
        marginTop: 15,
        color: "#fff",
        fontWeight: "bold",
        backgroundColor: 'rgba(52, 52, 52, 0.6)'
        //opacity: 0.7,
    },
    title: {
        fontSize: 30,
        marginTop: 20,
        fontWeight: "bold",
        color: Theme.colors.PRIMARY,
    },
    container:{
        backgroundColor: "#fff",
        flex: 1,
      },
      container1:{
        backgroundColor: "#fff",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      button:{
        width:350,
        marginTop: 25,
        alignContent: 'center',
        alignSelf: 'center',
      },
      circle:{ //no puedo hacerlo pero bueno tecnicamente es el icon del cliente
        width:50,
        height:50,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        borderBottomEndRadius: 25,
        borderBottomStartRadius: 25,
        margin: 10,
        justifyContent:'center',
        alignItems: 'center',
    },
    containerCirculo: {
      alignSelf: 'flex-end',
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
    button: {
      marginTop: 10,
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#FE4164",
    },
    buttonClose: {
      backgroundColor: Theme.colors.PRIMARY,
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    },
    circle:{
      width:39,
      height:39,
      borderBottomEndRadius: 20,
      borderTopEndRadius: 20,
      margin: 5,
    },
  });