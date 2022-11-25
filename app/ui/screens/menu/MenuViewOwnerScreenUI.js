/*import React, { useState }  from 'react';
import TipeFoodList from './TipeFoodList';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button } from '@react-native-material/core';
import Theme from '../../styles/Theme';
import { View, Text, StyleSheet, Alert, Modal, Pressable } from 'react-native';
import TagsList from "./TagsList";
import CarouselImages from "./CarouselImages";
import IntentoNuevo from "./IntentoNuevo";

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
    //<KeyboardAwareScrollView>
        <View style={styles.container}> 
        <View style={[{flexDirection:"row", justifyContent: "space-between", backgroundColor: 'rgba(52, 52, 52, 0.6)'}]} >
        <Button style={styles.circle} onPress={navigateToHome} title="<"/>
        <Text style={styles.name}>  {getNameRestaurant()}</Text> 
        </View>
        <View style={styles.container1}>
          <CarouselImages
             loginHandler={loginHandler}/> 
         </View>
         <View>
          <TagsList
             loginHandler={loginHandler}/> 
             </View>
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
                <View>
         </View>
         <View>
              <IntentoNuevo
                    loginHandler={loginHandler}/> 
            </View>
            <View style={styles.container}>
              <TipeFoodList
                    loginHandler={loginHandler}/> 
            </View>
        </View>
    //</KeyboardAwareScrollView>
  )};

  const styles = StyleSheet.create({
    icon: {
      marginTop: 2,
      marginRight: 2,
      alignSelf: 'flex-end',
      borderRadius: 100,
    },
    name: {
      flex: 1,
      fontSize: 35,
      color: "#fff",
      fontWeight: "bold",
    },
    title: {
        fontSize: 30,
        marginTop: 20,
        fontWeight: "bold",
        color: Theme.colors.PRIMARY,
    },
    container:{
        backgroundColor: "#fff",
        flex: 1
      },
      container1:{
        backgroundColor: "#fff",
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
      marginTop: 22,
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
  });*/

import React, { useState } from "react";
import { FlatList, SafeAreaView, SectionList, StatusBar, StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import Theme from "../../styles/Theme";
import HeaderForMenu from "./HeaderForMenu"
const DATA = [
  {id: 1,
    title: "Minutas",
      data: [{
        titleMenu: 'Milanesa con papas fritas',
        description: "Carne de peceto rebozada y acompañada con papas fritas",
        ingridents: "carne vacuna, pan ese cortadito, huevo",
        price: '1050',
        vegan: "no",
        celiac: "no",
        image: "https://elsol-compress-release.s3-accelerate.amazonaws.com/images/large/1614296501390milanesa%20con%20huevos.jpg",
      },{
        id: "2",
        titleMenu: 'Milanesa de soja',
        description: "qsy es de soja",
        ingridents: "soja",
        price: '1000',
        vegan: "si",
        celiac: "no",
        image: "https://www.mausi.com/wp-content/uploads/2019/02/rabas-1.jpg",
      },{
          id: "2",
          titleMenu: 'Rabas',
          description: "qsy son rabas",
          ingridents: "pulpito",
          price: '1100',
          vegan: "no",
          celiac: "no",
          image: "https://www.mausi.com/wp-content/uploads/2019/02/rabas-1.jpg",
      }]
  },
  {
    id: 2,
    title: "Postre",
    data: [{
      id: "3",
      titleMenu: 'Bombón',
      description: "Helado cubierto de chocolate",
      ingridents: "helado y chocolate",
      price: '800',
      vegan: "no",
      celiac: "si",
      image: "https://elsol-compress-release.s3-accelerate.amazonaws.com/images/large/1614296501390milanesa%20con%20huevos.jpg",
    }]
},
{
  id: 2,
  title: "Vinos",
  data: [{
    id: "4",
    titleMenu: 'Vino',
    description: "y se fue",
    ingridents: "helado y chocolate",
    price: '800',
    vegan: "no",
    celiac: "si",
    image: "https://elsol-compress-release.s3-accelerate.amazonaws.com/images/large/1614296501390milanesa%20con%20huevos.jpg",
  }]
}
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.extra, textColor]}>vegano: {item.vegan} // celiaco: {item.celiac}</Text>
    <Text style={[styles.title, styles.general, textColor]}>{item.titleMenu}</Text>
    <View style={styles.contenedorLista}>
      <View>
        <Image
          style={styles.imagenLista}
          source={{ uri: item.image }}
        />
      </View> 
    <View  style={{paddingEnd: 30, paddingStart: 5}}>
      <Text style={[styles.general, textColor]}>{item.description}</Text>
      <Text style={[styles.price, styles.general, textColor]}>${item.price}</Text>
    </View>
    </View>  
    </TouchableOpacity>
);


const MenuViewOwnerScreenUI = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    console.log(item)
    return (
        <Item
        item={item}
        onPress={() => setSelectedId(item.innerArray)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
     <SectionList  
     ListHeaderComponent={HeaderForMenu}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    paddingRight: 40,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    backgroundColor: Theme.colors.GREY,
    shadowColor: Theme.colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
},
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  state: {
    color: Theme.colors.ERROR,
  },
  general:{
    color: Theme.colors.PRIMARY,
  },
  extra:{
    color: "#008f39"
  },
  price:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  contenedorLista: {
    flexDirection: "row",
  },
  imagenLista: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Theme.colors.SECONDARY,
    marginStart: 10,
  },
});

export default MenuViewOwnerScreenUI;