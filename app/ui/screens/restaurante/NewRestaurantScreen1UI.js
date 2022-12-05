import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Theme from '../../styles/Theme';
import { Button } from "@react-native-material/core";
import FileUploadButton from '../../components/shared/FileUploadButton';
import { Input } from '@rneui/themed';
import { MapForm } from '../../components/MapsForm/MapsForm';
import { LoadingModal } from '../../components/shared/LoadingModal/LoadingModal';
import Avatar from '../../components/shared/AvatarCustom';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { filter } from 'lodash';

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
  const [showMap, setShowMap] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  useEffect(() => {
    formik.setFieldValue("imageRest", pictures);
  }, [pictures]);

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
    setIsLoading(false);
    setPictures([...pictures, fileKey]);
  };

  const onPhotoStartUpload = () => {
    setIsLoading(true);
  }

  const onPhotoError = () => {
    setIsLoading(false);
    Toast("Hubo un error cargando la imagen")
  }

  const onOpenCloseMap = () => setShowMap((prevState)=>!prevState);

  const removeImagen = (img)=> {
    Alert.alert(
      "Eliminar imagen",
      "Estas seguro de eliminar esta imagen?",
      [
        {
          text: "Cancelar",
          style: "cancel",  
        },
        {
          text: "Eliminar",
          onPress: () => {
            const result = filter(formik.values.imageRest, (image)=> image !== img);
            formik.setFieldValue("imageRest",result);
            setPictures(result);
          }
        }
      ]
    );
  }

  return (
    <>
    <View style={styles.container1}>
      <Button style={styles.circle} onPress={navigateToHomeResto} title="<" />
      <Text style={styles.title}>Nuevo Restaurante</Text>
      <Text style={styles.subTitle}>Datos principales</Text>
      <View style={{ alignItems: "center"}}>
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
          <Text style={styles.error}>
          {formik.errors.country}
        </Text>
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
          <Text style={styles.error}>
          {formik.errors.province}
        </Text>
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
              setValueLocation(item.label);
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
              formik.setFieldValue("neighborhood",item.label);
            }}
          />
          <Text style={styles.error}>
          {formik.errors.neighborhood}
        </Text>
        </View>
          <Input
          placeholder='Nombre'
          onChangeText={(text) => { formik.setFieldValue('name', text) }}
          errorMessage={formik.errors.name}
          />
        <Input
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius-outline",
            color: getColorIconMap(formik),
            onPress: onOpenCloseMap
          }}
          placeholder='Calle'
          onChangeText={(text) => { formik.setFieldValue('street', text) }}
          errorMessage={formik.errors.street}
          />
          <Input
          placeholder='Número'
          onChangeText={(text) => { formik.setFieldValue('number', text) }}
          errorMessage={formik.errors.number}
          />
        <FileUploadButton 
          title={"+ Agregar Fotos"}
          onSuccess={onPhotoUploaded}
          onStartUpload={onPhotoStartUpload}
          onError={onPhotoError} 
        />
        <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
        {pictures.map(p => {
            return (
              <Avatar
                key={p}
                uri={p}
                styles={styles.imageStyle}
                onPress={()=>removeImagen(p)}
              />
            )
          })}
        <Text style={styles.error}>
          {formik.errors.imageRest}
        </Text>
        </ScrollView>
        <LoadingModal show={isLoading} text='Subiendo imagen'/>
        <Button style={styles.button2} onPress={formik.handleSubmit} title="Continuar >" color={Theme.colors.PRIMARY} />
      </View>
    </View>
    <MapForm show={showMap} close={onOpenCloseMap} formik={formik}/>
    </>
  );
};

const getColorIconMap = (formik) =>{
  if(formik.errors.location) return Theme.colors.ERROR;
  if(formik.values.location) return Theme.colors.PRIMARY;
  return 'c2c2c2';
}
export default NewRestaurantScreen1UI;

const styles = StyleSheet.create({
  container1: {
    flex: 1,
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
  button: {
    margin: 13,
  },
  container2: {
    backgroundColor: Theme.colors.GREY,
    padding: 16,
  },
  dropdown: {
    height: 50,
    width: 350,
    borderColor: "#8871a4",
    borderWidth: 1.2,
    borderRadius: 12,
    paddingHorizontal: 8
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
  error: {
    color: Theme.colors.ERROR,
    fontSize: 14,
    fontWeight: "bold",
  },
  imageStyle:{
    width:70,
    height:70,
    marginRight:10
  }
});