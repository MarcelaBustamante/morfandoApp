import { Image,
    StyleSheet,
    View,
    Text,
    ScrollView,
    Pressable
  } from 'react-native';
import Theme from '../../styles/Theme';
import { Button, even  } from "@react-native-material/core";
import { Switch, ListItem } from "@react-native-material/core";
import React, { useState } from "react";
import FileUploadButton from '../../components/shared/FileUploadButton';
import { LoadingModal } from '../../components/shared/LoadingModal/LoadingModal';
import { Input } from '@rneui/themed';


const RegisterScreenUI = ({
    navigateToClient,
    formik,
    setFormState,
    registerHandler,
    navigateToClientNearBy,
    error
  }) => {
    const [checked, setChecked] = useState(true);
    const handleChange = (field, text) => {
      setFormState({...formState, [field]: text});
    };

    const [pictures, setPictures] = useState('');

    const [isLoading,setIsLoading] = useState(false);

    const onPhotoUploaded = (fileKey) => {
      setIsLoading(false);
      setPictures(fileKey);
      formik.setFieldValue("imageRest", pictures);
    };
  
    const onPhotoStartUpload = () => {
      setIsLoading(true);
    }
  
    const onPhotoError = () => {
      setIsLoading(false);
      Toast("Hubo un error cargando la imagen")
    }


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
    <View>
        <View style={styles.container}>
        <Button style={styles.circle} onPress={navigateToClient} title="<"/>
          <Text style={styles.title}>Registro</Text>
          <Text style={styles.subTitle}>Ingrese sus datos</Text>
          {error && <Text style={styles.error}>{error}</Text>}
          <View style={{alignItems: "center"}}>
            <Input
              placeholder='Nombre'
              onChangeText={(text) => { formik.setFieldValue('name', text) }}
              placeholderTextColor={Theme.colors.PRIMARY}
              errorMessage={formik.errors.name}
            />
            <Input
              placeholder='Apellido'
              onChangeText={(text) => { formik.setFieldValue('lastName', text) }}
              placeholderTextColor={Theme.colors.PRIMARY}
              errorMessage={formik.errors.lastName}
            />
            <FileUploadButton 
          title={"+ Agregar Fotos"}
          onSuccess={onPhotoUploaded}
          onStartUpload={onPhotoStartUpload}
          onError={onPhotoError} 
        />
          <Text>
            {pictures}
          </Text>
        {/* <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
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
        </ScrollView> */}
        <LoadingModal show={isLoading} text='Subiendo imagen'/>
         </View>
         <Pressable
          onPress={navigateToClientNearBy}
         >
            <Text style={styles.textStyle}>Omitir</Text>
        </Pressable>
         <ListItem 
        title="Acepto los términos y condiciones"
        trailing={
          <Switch value={checked} onValueChange={() => setChecked(!checked)} />
        }
        onPress={() => setChecked(!checked)}
      />
        <Button style={styles.button} onPress={navigateToClientNearBy} title="Registrame" />
        </View> 
       </View>
);
}

export default RegisterScreenUI;

const styles = StyleSheet.create({
  container:{
    flex:2,
    justifyContent: "center",
    paddingHorizontal: 30,
    paddingVertical: 30,
    marginHorizontal: 10,
    marginVertical: 10,
    marginTop: 50,
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
    marginBottom:20,
    color: Theme.colors.PRIMARY,
  },
  input:{
    borderWidth:1,
    borderColor: "gray",
    width: 10,
    height: 40,
    width: 300,
    marginBottom: 7,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: Theme.colors.PRIMARY,
    color: Theme.colors.PRIMARY,
    }, 
  button:{
    margin: 13,
  },
  image: {
    justifyContent: "center"
  },
  containerSVG: { 
    justifyContent: "flex-start",
    alignItems: "center",
  }, error: {
    color: Theme.colors.ERROR,
    fontSize: 18,
    fontWeight: "bold",
  },
  textStyle: {
    color: Theme.colors.PRIMARY,
    textAlign: "left",
    fontSize: 16,
 },
 buttonOpen: {
  backgroundColor: Theme.colors.GREY,
  padding: 10,
  width: 150,
},
});
