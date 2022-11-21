import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Theme from '../../styles/Theme';
import { Button } from "@react-native-material/core";
import FileUploadButton from '../../components/shared/FileUploadButton';


const NewRestaurantScreen1UI = ({
  navigateToHomeResto,
  formik,
  dataCountry,
  dataProvince,
  dataLocation,
  dataNeighborhood,

}) => {
  const [valueCoutry, setValueCoutry] = useState(null);
  const [valueLocation, setValueLocation] = useState(null);
  const [valueProvince, setValueProvince] = useState(null);
  const [valueNeighborhood, setValueNeighborhood] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [pictures, setPictures] = useState([]);

  const renderLabelCountry = () => {
    if (valueCoutry || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: Theme.colors.PRIMARY }]}>
          País
        </Text>
      );
    }
    return null;
  };
  const renderLabelProvince = () => {
    if (valueProvince || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: Theme.colors.PRIMARY }]}>
          Provincia
        </Text>
      );
    }
    return null;
  };
  const renderLabelLocation = () => {
    if (valueLocation || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: Theme.colors.PRIMARY }]}>
          Localidad
        </Text>
      );
    }
    return null;
  };
  const renderLabelNeighborhood = () => {
    if (valueNeighborhood || isFocus) {
      return (
        <Text style={[styles.label, isFocus && { color: Theme.colors.PRIMARY }]}>
          Barrio
        </Text>
      );
    }
    return null;
  };

  const onPhotoUploaded = (fileKey) => {
    console.log("File Key subida", fileKey);
    setPictures([...pictures, fileKey]);
  };

  return (
    <View style={styles.container1}>
      <Button style={styles.circle} onPress={navigateToHomeResto} title="<" />
      <Text style={styles.title}>Nuevo Restaurante</Text>
      <Text style={styles.subTitle}>Datos principales</Text>
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={styles.input}
          placeholder='Nombre'
          onChangeText={(text) => { formik.setFieldValue('name', text) }}
          placeholderTextColor={Theme.colors.PRIMARY}
        />
        <Text style={styles.error}>{formik.errors.name}</Text>
        <TextInput
          style={styles.input}
          placeholder='Calle'
          onChangeText={(text) => { formik.setFieldValue('street', text) }}
          placeholderTextColor={Theme.colors.PRIMARY}
        />
        <Text style={styles.error}>{formik.errors.street}</Text>
        <View style={styles.container2}>
          {renderLabelCountry()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: Theme.colors.PRIMARY }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataCountry}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'País' : '...'}
            searchPlaceholder="Buscar..."
            value={valueCoutry}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValueCoutry(item.value);
              setIsFocus(false);
              formik.setFieldValue("country",item.label);
            }}
          />
        </View>
        <View style={styles.container2}>
          {renderLabelProvince()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: Theme.colors.PRIMARY }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataProvince}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Provincia' : '...'}
            searchPlaceholder="Buscar..."
            value={valueProvince}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValueProvince(item.value);
              setIsFocus(false);
              formik.setFieldValue("province",item.label);
            }}
          />
        </View>
        <View style={styles.container2}>
          {renderLabelLocation()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: Theme.colors.PRIMARY }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataLocation}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Localidad' : '...'}
            searchPlaceholder="Buscar..."
            value={valueLocation}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValueLocation(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <View style={styles.container2}>
          {renderLabelNeighborhood()}
          <Dropdown
            style={[styles.dropdown, isFocus && { borderColor: Theme.colors.PRIMARY }]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={dataNeighborhood}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? 'Barrio' : '...'}
            searchPlaceholder="Buscar..."
            value={valueNeighborhood}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
              setValueNeighborhood(item.value);
              setIsFocus(false);
            }}
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder='Número'
          onChangeText={(text) => { formik.setFieldValue('number', text) }}
          placeholderTextColor={Theme.colors.PRIMARY}
          keyboardType='numeric'
        />
         <Text style={styles.error}>{formik.errors.number}</Text>
        <FileUploadButton title={"+ Agregar Fotos"} onSuccess={onPhotoUploaded} />
        <Text>
          {pictures.map(p => `${p}\n`)}
        </Text>
        <Button style={styles.button2} onPress={formik.handleSubmit} title="Guardar y Continuar >" color={Theme.colors.PRIMARY} />
      </View>
    </View>
  );
};

export default NewRestaurantScreen1UI;

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
    color: Theme.colors.PRIMARY,
  },
  subTitle: {
    fontSize: 20,
    color: "gray",
    marginLeft: 10,
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
  }, error: {
    color: Theme.colors.ERROR,
    fontSize: 14,
    fontWeight: "bold",
  },
});