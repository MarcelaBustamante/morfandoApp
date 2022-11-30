import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Theme from '../../styles/Theme';
import { Button, ListItem, Switch } from "@react-native-material/core";
import { Input } from '@rneui/themed';
import FileUploadButton from '../../components/shared/FileUploadButton';
import { LoadingModal } from '../../components/shared/LoadingModal/LoadingModal';

const dataCategory = [
  { label: 'Minutas', value: '1' },
  { label: 'Pastas', value: '2' },
  { label: 'Bebidas', value: '3' },
  { label: 'Vinos', value: '4' },
  { label: 'Postres', value: '5' },

];
const onPhotoUploaded = (fileKey) => {
  setIsLoading(false);
  setPictures([...pictures, fileKey]);
  formik.setFieldValue("imageRest", pictures);
};


const onPhotoStartUpload = () => {
  setIsLoading(true);
}

const onPhotoError = () => {
  setIsLoading(false);
  Toast("Hubo un error cargando la imagen")
}

const NewMealScreenUI = ({
  formik,
  restaurant,
  navigateToResto
}) => {
  const [valueCategory, setValueCategory] = useState(null);

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
  const [isLoading,setIsLoading] = useState(false);

  return (
    <View style={styles.container1}>
      <Button style={styles.circle} onPress={navigateToResto} title="<" />
      <Text style={styles.title}>{restaurant.name}</Text>
      <Text style={styles.subTitle}>Datos principales de nuevo plato</Text>
      <View style={{ alignItems: "center" }}>
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
              formik.setFieldValue("category", item.label);
            }}
          />
        </View>
        <Input
          placeholder='Nombre del plato'
          onChangeText={(text) => formik.setFieldValue("name", text)}
          errorMessage={formik.errors.name}
        />
        <Input
          placeholder='Precio'
          onChangeText={(text) => formik.setFieldValue("price", text)}
          keyboardType='numeric'
          errorMessage={formik.errors.price}
        />
        <Input
          placeholder='Ingredientes'
          onChangeText={(text) => formik.setFieldValue("description", text)}
          errorMessage={formik.errors.description}
        />
      </View>
      <ListItem
        title="Apto vegano"
        trailing={
          <Switch value={checkedVegan} onValueChange={() => setCheckedVegan(!checkedVegan)} />
        }
        onPress={() => {
          setCheckedVegan(!checkedVegan);
          formik.setFieldValue("vegan", checkedVegan);
        }}
      />
      <ListItem
        title="Apto celíaco"
        trailing={
          <Switch value={checkedCeliac} onValueChange={() => setCheckedCeliac(!checkedCeliac)} />
        }
        onPress={() => {
          setCheckedCeliac(!checkedCeliac);
          formik.setFieldValue("tac", checkedCeliac)
        }}
      />
      <FileUploadButton 
          title={"+ Agregar Fotos"}
          onSuccess={onPhotoUploaded}
          onStartUpload={onPhotoStartUpload}
          onError={onPhotoError} 
        />
         <LoadingModal show={isLoading} text='Subiendo imagen'/>
      <Button style={styles.button2} onPress={formik.handleSubmit} title="Guardar" color={Theme.colors.PRIMARY} />
    </View>
  );
};

export default NewMealScreenUI;

const styles = StyleSheet.create({
  container1: {
    flex: 2,
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
  circle: {
    width: 39,
    height: 39,
    borderBottomEndRadius: 20,
    borderTopEndRadius: 20,
  },
  title: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    marginLeft: 20,
    color: Theme.colors.PRIMARY,
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
    marginLeft: 30,
    marginBottom: 10,
    color: Theme.colors.SECONDARY,
  },
  input: {
    borderWidth: 1,
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
  button: {
    margin: 13,
  },
  container2: {
    backgroundColor: Theme.colors.GREY,
    padding: 16,
  },
  dropdown: {
    height: 40,
    width: 300,
    borderColor: Theme.colors.PRIMARY,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 8,
    color:Theme.colors.PRIMARY
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
  button1: {
    width: 200,
    margin: 13,
    alignSelf: "center",
  },
  button2: {
    width: 150,
    margin: 13,
    alignSelf: "flex-end",
  },
});