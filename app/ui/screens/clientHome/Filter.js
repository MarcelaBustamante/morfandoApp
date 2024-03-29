import React, { useState }  from 'react';
import { View, TouchableOpacity,  Text, StyleSheet, Alert, Modal, Pressable, Dimensions } from 'react-native';
import Theme from "../../styles/Theme";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MultiSelect } from 'react-native-element-dropdown';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SliderApp from './SliderApp';
import { IconButton } from 'react-native-paper';
import { AirbnbRating, Input, Button } from "react-native-elements";

export default function Filter({filters, setFilters}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [selected, setSelected] = useState({}); //dropdown menu
    const [valueP, setValueP] = useState(null); //dropdown menu
    const [valueS, setValueS] = useState(null); //dropdown menu
    const [isFocusP, setIsFocusP] = useState(false); //dropdown menu
    const [isFocusS, setIsFocusS] = useState(false); //dropdown menu
    const [radius, setRadius] = useState(15);

    const renderItem = (item) => {
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
          { id: 1, labelP: 'Sin filtro', valueP: null },
            { id: 2,labelP: '$', valueP: '1' },
            { id: 3,labelP: '$$', valueP: '2' },
            { id: 4,labelP: '$$$', valueP: '3' },
            { id: 5,labelP: '$$$$', valueP: '4' },
          ];
    const data = [
      { id: 6,label: 'Sin filtro', value: null },
      { id: 7,label: 'Comida Alemana', value: 'ALEMANA' },
      { id: 8,label: 'Comida Argentina', value: 'ARGENTINA' },
      { id: 9,label: 'Comida Armenia', value: 'ARMENIA' },
      { id: 10,label: 'Comida China', value: 'CHINA' },
      { id: 11,label: 'Comida India', value: 'INDIA' },
      { id: 12,label: 'Comida Italiana', value: 'ITALIANA' },
      { id: 13,label: 'Comida Japonesa', value: 'JAPONESA' },
      { id: 14,label: 'Comida Norteamericana', value: 'NORTEAMERICANA' },
      { id: 15,label: 'Comida Peruana', value: 'PERUANA' },
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
                        <Dropdown
                        style={styles.dropdown}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        labelField="label"
                        valueField="value"
                        placeholder="Seleccionar especialidad"
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
                        console.log("Value price", item.valueP);
                    }}
                    />
                    </View>
                    <Text style={styles.text}> Cantidad de estrellas: </Text>
                    <View style= {styles.ratingContent}>
                      <AirbnbRating 
                      count={6} 
                      reviews={["No filtrar", "Muy malo", "Malo", "Normal", "Bueno", "Muy bueno"]}
                      defaultRating= {1}
                      size={15}
                      //onFinishRating={(rating)}
                      />
                    </View>
                    <SliderApp sliderValue={radius} setSliderValue={setRadius}/>
                    <Pressable
                      style={[styles.button, styles.buttonClose]}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        const newFilters = {
                          ...filters, 
                          minPrice: valueP, 
                          rating: valueS, 
                          type: selected.value,
                          radius: radius
                        };
                        setFilters(newFilters);
                        console.log("New filters", newFilters);
                      }}
                    >
                      <Text style={styles.textStyle}> OK </Text>
                    </Pressable>
                </View>
                </View>
            </Modal>
            <IconButton icon={"filter-variant"} onPress={() => setModalVisible(true)}/>
        </View>
                )};
                const width = Dimensions.get("window").width;
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
    text:{
      color: Theme.colors.PRIMARY,
      fontSize: 18,
      alignSelf: "flex-start",
      marginLeft: 30,
    },
    ratingContent:{
      justifyContent: "center",
  },
});
 