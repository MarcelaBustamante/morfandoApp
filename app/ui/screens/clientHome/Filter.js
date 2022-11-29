import React, { useState }  from 'react';
import { View, TouchableOpacity,  Text, StyleSheet, Alert, Modal, Pressable, Dimensions } from 'react-native';
import Theme from "../../styles/Theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MultiSelect } from 'react-native-element-dropdown';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function Filter({}) {
    welcomeString = 'Bienvenido a Morfando';
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState([]); //dropdown menu tags
    const [valueP, setValueP] = useState(null); //dropdown menu
    const [valueS, setValueS] = useState(null); //dropdown menu
    const [isFocusP, setIsFocusP] = useState(false); //dropdown menu
    const [isFocusS, setIsFocusS] = useState(false); //dropdown menu


    const renderItem = (item: any) => {
        return (
          <View style={styles.item}>
            <Text style={styles.selectedTextStyle}>{item.label}</Text>
            <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
          </View>
        );
      };
      const renderLabelPrice = () => {
          if (valueP || isFocusP) {
            return (
              <Text style={[styles.label, isFocusP && { color: Theme.colors.PRIMARY }]}>
                Precio
              </Text>
            );
          }
          return null;
        };

        const renderLabelStar = () => {
            if (valueS || isFocusS) {
              return (
                <Text style={[styles.label, isFocusS && { color: Theme.colors.PRIMARY }]}>
                  Estrellas
                </Text>
              );
            }
            return null;
          };

        const dataPrice = [
            { labelP: '$', valueP: '9' },
            { labelP: '$$', valueP: '10' },
            { labelP: '$$$', valueP: '11' },
            { labelP: '$$$$', valueP: '12' },
          ];
          const dataStar = [
            { labelS: '⭐', valueS: '13' },
            { labelS: '⭐⭐', valueS: '14' },
            { labelS: '⭐⭐⭐', valueS: '15' },
            { labelS: '⭐⭐⭐⭐', valueS: '16' },
            { labelS: '⭐⭐⭐⭐⭐', valueS: '17' },

          ];
    const data = [
        { label: 'Comida Mexicana', value: '1' },
        { label: 'Comida Italiana', value: '2' },
        { label: 'Heladería', value: '3' },
        { label: 'Pizzería', value: '4' },
        { label: 'Item 5', value: '5' },
        { label: 'Item 6', value: '6' },
        { label: 'Item 7', value: '7' },
        { label: 'Item 8', value: '8' },
      ];

    return (
<View style={styles.centeredView}>
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
                    <Text style={styles.modalText}>Seleccionar filtros</Text>
                    <View style={styles.container}>
                        <MultiSelect
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        labelField="label"
                        valueField="value"
                        placeholder="Seleccionar especialidades"
                        value={selected}
                        search
                        searchPlaceholder="Buscar..."
                        onChange={item => {
                        setSelected(item);
                        }}
                        renderLeftIcon={() => (
                        <AntDesign
                            style={styles.icon}
                            color="black"
                            name="Safety"
                            size={20}
                        />
                        )}
                        renderItem={renderItem}
                        renderSelectedItem={(item, unSelect) => (
                        <TouchableOpacity onPress={() => unSelect && unSelect(item)}>
                            <View style={styles.selectedStyle}>
                            <Text style={styles.textSelectedStyle}>{item.label}</Text>
                            <AntDesign color="black" name="delete" size={17} />
                            </View>
                        </TouchableOpacity>
                        )}
                    />
                    </View>
                    <View style={styles.container2}>
                    {renderLabelPrice()}
                    <Dropdown
                    style={[styles.dropdown, isFocusP && { borderColor: Theme.colors.PRIMARY }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dataPrice}
                    maxHeight={300}
                    labelField="labelP"
                    valueField="valueP"
                    placeholder={!isFocusP ? 'Rango de precio' : '...'}
                    searchPlaceholder="Buscar..."
                    value={valueP}
                    onFocus={() => setIsFocusP(true)}
                    onBlur={() => setIsFocusP(false)}
                    onChange={item => {
                        setValueP(item.valueP);
                        setIsFocusP(false);
                    }}
                    />
                    </View>
                    <View style={styles.container2}>
                    {renderLabelStar()}
                    <Dropdown
                    style={[styles.dropdown, isFocusS && { borderColor: Theme.colors.PRIMARY }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={dataStar}
                    maxHeight={300}
                    labelField="labelS"
                    valueField="valueS"
                    placeholder={!isFocusS ? 'Cantidad de estrellas' : '...'}
                    searchPlaceholder="Buscar..."
                    value={valueS}
                    onFocus={() => setIsFocusS(true)}
                    onBlur={() => setIsFocusS(false)}
                    onChange={item => {
                        setValueS(item.valueS);
                        setIsFocusS(false);
                    }}
                    />
                    </View>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}> OK </Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
            >
            <Text style={styles.textStyle}> Filtros </Text>
            </Pressable>
        </View>
                )};
                const width = Dimensions.get("window").width;
                const height = Dimensions.get("window").height;
const styles = StyleSheet.create({
centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    },
    modalView: {
    backgroundColor: Theme.colors.GREY,
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },
    button: {
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
    label: {
        position: 'absolute',
        backgroundColor: Theme.colors.GREY,
        zIndex: 999,
        left: 22,
        top: 8,
        paddingHorizontal: 8,
        fontSize: 14,
        color: Theme.colors.PRIMARY,
      },
      dropdown: {
        width: width * 0.8,
        borderRadius: 5,
        padding: 12,
        shadowColor: Theme.colors.PRIMARY,
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
        elevation: 2,
      },
      placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 14,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    icon: {
      marginRight: 5,
    },
    item: {
      padding: 17,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    selectedStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 14,
      backgroundColor: Theme.colors.SECONDARY,
      shadowColor: '#000',
      marginVertical: 5,
      marginHorizontal: 8,
      paddingHorizontal: 12,
      paddingVertical: 8,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    },
    textSelectedStyle: {
      marginRight: 5,
      fontSize: 16,
    },
    container2: {
        backgroundColor: Theme.colors.GREY,
        padding: 16,
      },
      container: { 
        padding: 16 
    },
});