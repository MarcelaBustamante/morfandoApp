import React, { useState }  from 'react';
import { Button } from '@react-native-material/core';
import { View, Text, StyleSheet, Alert, Modal, Pressable, TextInput } from 'react-native';
import { Icon } from '@rneui/base';
import Theme from '../../styles/Theme';

const FooterDelete = ({
  handleDelete
}) => {

    const [modalVisible, setModalVisible] = useState(false);

return(
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
            <Pressable
               onPress={ () => setModalVisible(!modalVisible)}
            >
              <View style={styles.close}> 
              <Icon
              type= "material-community"
              name= "close-box" 
              color= {Theme.colors.ERROR}
              />
              </View>
            </Pressable>
            <Text style={styles.modalText}>¿Está seguro de eliminar este restaurante?</Text>
            <Pressable
              style={[styles.buttonClose]}
              onPress={handleDelete}
            >
              <Text style={styles.textStyle1}>Si</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[styles.buttonOpen, styles.text]}>  Eliminar restaurante  </Text>
      </Pressable>
        </View>
        );
    }
    export default FooterDelete;
    
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
        container:{
            backgroundColor: "#fff",
            flex: 1
          },
          circle:{
            width:39,
            height:39,
            borderBottomEndRadius: 20,
            borderTopEndRadius: 20,
            margin: 5,
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
            backgroundColor: Theme.colors.ERROR,
            padding: 5,
            justifyContent: "center",
            alignSelf: "center",
            borderRadius: 10
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
          fontSize: 16,
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
    
        },
          modalText: {
            marginBottom: 15,
            fontSize: 15,
            textAlign: "center",
            color: "red",
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
            color: Theme.colors.ERROR,
            }, 
            close:{
              flexDirection: 'row',
              justifyContent: 'flex-end'
            },
            button:{
                width:350,
                marginTop: 25,
                alignContent: 'center',
                alignSelf: 'center',
            },
            text:{
              color: "white",
              fontSize: 20
            }
            });