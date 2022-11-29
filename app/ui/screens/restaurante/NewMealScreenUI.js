import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Theme from '../../styles/Theme';
import { Button, ListItem, Switch  } from "@react-native-material/core";
import CheckBox from '@react-native-community/checkbox';
import { text } from '@fortawesome/fontawesome-svg-core';

const dataCategory = [
  { label: 'Minutas', value: '1' },
  { label: 'Pastas', value: '2' },
  { label: 'Bebidas', value: '3' },
  { label: 'Vinos', value: '4' },
  { label: 'Postres', value: '5' },

];
const NewMealScreenUI = ({
    fprmik,
    loginHandler,
    navigateToHomeResto,
  }) => {
    const [valueCategory, setValueCategory] = useState(null);
    const [toggleCheckBoxC, setToggleCheckBoxC] = useState(false)
    const [toggleCheckBoxV, setToggleCheckBoxV] = useState(false)

    const renderLabelCategory = () => {
        if (valueCategory || isFocus) {
          return (
            <Text style={[styles.label, isFocus && { color: Theme.colors.PRIMARY }]}>
              Categoría plato
            </Text>
          );
        }
        return null;
      };
      const [isFocus, setIsFocus] = useState(false);
      const [checkedVegan, setCheckedVegan] = useState(false); 
      const [checkedCeliac, setCheckedCeliac] = useState(false); 

      return (
        <View style={styles.container1}>
            <Button style={styles.circle} onPress={() => loginHandler('enviar datos')} title="<"/>
              <Text style={styles.title}>Nuevo Plato</Text>
              <View style={{alignItems: "center"}}>
        <View style={styles.container2}>
          {renderLabelCategory()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: Theme.colors.PRIMARY }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataCategory}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Seleccionar categoría' : '...'}
            searchPlaceholder="Buscar..."
            value={valueCategory}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              //setValueCategory(item.value);
              setIsFocus(false);
              formik.setFieldValue("category",item.label);
            }}
          />
        </View>
        <Text style={styles.subTitle}>Datos principales</Text>
        <TextInput
            style={styles.input}
            placeholder='Nombre del plato'
            onChangeText={(text)=>formik.setFieldValue("name", text)}
            placeholderTextColor={Theme.colors.PRIMARY}
            />
          <TextInput
            style={styles.input}
            placeholder='Precio'
            onChange={formik.setFieldValue("")}
            placeholderTextColor={Theme.colors.PRIMARY}
            keyboardType='numeric'
            />
        <TextInput
            style={styles.input}
            placeholder='Ingredientes'
            onChange={console.log("ingredients")}
            placeholderTextColor={Theme.colors.PRIMARY}
            />
          </View> 
          <ListItem 
        title="Apto vegano"
        trailing={
          <Switch value={checkedVegan} onValueChange={() => setCheckedVegan(!checkedVegan)} />
        }
        onPress={() => setCheckedVegan(!checkedVegan)}
      />
      <ListItem 
        title="Apto celíaco"
        trailing={
          <Switch value={checkedCeliac} onValueChange={() => setCheckedCeliac(!checkedCeliac)} />
        }
        onPress={() => setCheckedCeliac(!checkedCeliac)}
      />

<View style={{flexDirection:"row", margin:10}}> 
<Text style={{color:Theme.colors.PRIMARY, fontSize: 20}}> Apto vegano </Text>
<CheckBox
  disabled={false}
  value={toggleCheckBoxV}
  onValueChange={(newValue) => setToggleCheckBoxV(newValue)}
/> 
</View>

<View style={{flexDirection:"row", margin:10}}> 
<Text style={{color:Theme.colors.PRIMARY, fontSize: 20}}> Apto celíaco </Text>
<CheckBox
  disabled={false}
  value={toggleCheckBoxC}
  onValueChange={(newValue) => setToggleCheckBoxC(newValue)}
/> 
</View>

      <Button style={styles.button1} onPress={() => loginHandler()} title="+ Agregar Fotos" color={Theme.colors.SECONDARY}/>
             <Button style={styles.button2} onPress={navigateToHomeResto} title="Guardar" color={Theme.colors.PRIMARY}/>
       </View>
  );
};

export default NewMealScreenUI;

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
    marginBottom: 20,
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
    color: Theme.colors.PRIMARY,
    }, 
  button:{
    margin: 13,
  },
  container2: {
    backgroundColor: Theme.colors.GREY,
    padding: 16,
  },
  dropdown: {
    height: 40,
    width:300,
    borderColor: Theme.colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
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
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  button1:{
    width: 200,
    margin: 13,
    alignSelf: "center",
  },
  button2:{
    width: 150,
    margin: 13,
    alignSelf: "flex-end",
  },
});