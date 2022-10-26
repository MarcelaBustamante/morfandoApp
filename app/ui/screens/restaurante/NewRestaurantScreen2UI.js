import React, { useState } from 'react';
  import { StyleSheet, View, TouchableOpacity, Text, TextInput } from 'react-native';
  import { MultiSelect } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import { Button, ListItem, Switch } from "@react-native-material/core";
  import Theme from '../../styles/Theme';
  import { Dropdown } from 'react-native-element-dropdown';


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
  const dataPrice = [
    { label: '$', value: '9' },
    { label: '$$', value: '10' },
    { label: '$$$', value: '11' },
    { label: '$$$$', value: '12' },
  ];
  const NewRestaurantScreen2UI = ({
    primText = 'No vino ningún texto',
    secText,
    loginHandler
  }) => {
    const [selected, setSelected] = useState([]); //dropdown menu tags
    const [value, setValue] = useState(null); //dropdown menu
    const [isFocus, setIsFocus] = useState(false); //dropdown menu
    const [checked, setChecked] = useState(true); //cerrar temporalmente

    const renderItem = (item: any) => {
      return (
        <View style={styles.item}>
          <Text style={styles.selectedTextStyle}>{item.label}</Text>
          <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
        </View>
      );
    };
    const renderLabelPrice = () => {
        if (value || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: Theme.colors.PRIMARY }]}>
              Precio
            </Text>
          );
        }
        return null;
      };
//<Button style={styles.circle} onPress={() => loginHandler('enviar datos')} title="<"/>

    return (
        <View style={styles.container1}>
          <Text style={styles.title}>Nuevo Restaurante</Text>
          <Text style={styles.subTitle}>Datos principales</Text>
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
        style={[styles.dropdown, isFocus && { borderColor: Theme.colors.PRIMARY }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={dataPrice}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Rango de precio' : '...'}
        searchPlaceholder="Buscar..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
    </View>
    <ListItem
        title="Cerrar Temporalmente"
        trailing={
          <Switch value={checked} onValueChange={() => setChecked(!checked)} />
        }
        onPress={() => setChecked(!checked)}
      />
      <Text style={styles.closeSubTitle}>Si activas esta opción tu restaurante comenzará
en modo inactivo</Text>
      <Button style={styles.food} onPress={() => loginHandler()} title="+ Agregar Nuevo Plato" color={Theme.colors.SECONDARY}/>
      <View style={{flexDirection:"row", justifyContent: "space-between"}} >
        <Button style={styles.button1} onPress={() => loginHandler()} title="Volver" color={Theme.colors.SECONDARY}/>
        <Button style={styles.button2} onPress={() => loginHandler()} title="Continuar" color={Theme.colors.PRIMARY}/>
        </View>      
        </View>

    );
  };

  export default NewRestaurantScreen2UI;

  const styles = StyleSheet.create({
    container1:{
        flex:2,
        justifyContent: "center",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginVertical: 10,
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
        marginTop: 10,
        color: Theme.colors.PRIMARY,
      },
      subTitle:{
        fontSize: 20,
        color: "gray",
        marginLeft: 10,
        marginBottom:10,
        color: Theme.colors.SECONDARY,
      },
      input:{
        borderWidth:1,
        borderColor: "gray",
        width: 10,
        height: 40,
        width: 300,
        marginTop: 10,
        marginBottom: 10,
        borderWidth: 1,
        padding: 10,
        borderRadius: 5,
        borderColor: Theme.colors.PRIMARY,
        }, 
      button:{
        margin: 13,
      },
    container: { 
        padding: 16 
    },
    dropdown: {
      height: 50,
      backgroundColor: 'white',
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
      marginTop: 8,
      marginRight: 12,
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
      food:{
        width: 250,
        margin: 13,
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
      closeSubTitle: {
        fontSize: 15,
        color: "gray",
        marginLeft: 10,
        marginBottom:10,
        color: Theme.colors.SECONDARY,
      }
  });