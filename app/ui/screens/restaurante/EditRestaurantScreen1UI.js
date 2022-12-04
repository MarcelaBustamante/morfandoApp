import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Theme from '../../styles/Theme';
import { Button  } from "@react-native-material/core";
import { Formik } from 'formik';
import FileUploadButton from '../../components/shared/FileUploadButton';
import { Input } from '@rneui/themed';
import { MapForm } from '../../components/MapsForm/MapsForm';
import { LoadingModal } from '../../components/shared/LoadingModal/LoadingModal';
import Avatar from '../../components/shared/AvatarCustom';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { filter } from 'lodash';



const EditRestaurantScreen1UI = ({
  primText = 'No vino ningún texto',
  secText,
  loginHandler,
  navigateToMenuOwner,
  navigateToEditScreen2,
  dataCountry,
  dataNeighborhood,
  dataLocation,
  dataProvince,
  formik,
  restaurant
}) => {

  const [valueCoutry, setValueCoutry] = useState(null);
  const [valueLocation, setValueLocation] = useState(null);
  const [valueProvince, setValueProvince] = useState(null);
  const [valueNeighborhood, setValueNeighborhood] = useState(null);
  const [pictures, setPictures] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [showMap, setShowMap] = useState(false);

  const [isFocus, setIsFocus] = useState(false);

  console.log(restaurant)


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
    formik.setFieldValue("imageRest", pictures);
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
      <Button style={styles.circle} onPress={null} title="<" />
      <Text style={styles.title}>Editar Restaurante</Text>
      <Text style={styles.subTitle}>Datos principales</Text>
      <View style={{ alignItems: "center"}}>
          <TextInput
          placeholder='Nombre'
          value={restaurant.name}
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
          value={restaurant.address.street}
          placeholder='Calle'
          onChangeText={(text) => { formik.setFieldValue('street', text) }}
          errorMessage={formik.errors.street}
          />
          <Input
          placeholder='Número'
          onChangeText={(text) => { formik.setFieldValue('number', text) }}
          errorMessage={formik.errors.number}
          value={restaurant.address.number}
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

export default EditRestaurantScreen1UI;

const getColorIconMap = (formik) =>{
  if(formik.errors.location) return Theme.colors.ERROR;
  if(formik.values.location) return Theme.colors.PRIMARY;
  return 'c2c2c2';
}

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