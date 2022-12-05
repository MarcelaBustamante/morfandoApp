import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Theme from '../../styles/Theme';
import { Button ,  ListItem, Switch } from "@react-native-material/core";
import { Formik } from 'formik';
import FileUploadButton from '../../components/shared/FileUploadButton';
import { Input } from '@rneui/themed';
import { MapForm } from '../../components/MapsForm/MapsForm';
import { LoadingModal } from '../../components/shared/LoadingModal/LoadingModal';
import Avatar from '../../components/shared/AvatarCustom';
import { Toast } from 'react-native-toast-message/lib/src/Toast';
import { filter } from 'lodash';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import AntDesign from 'react-native-vector-icons/AntDesign';



const EditRestaurantScreen1UI = ({
  primText = 'No vino ningún texto',
  secText,
  loginHandler,
  formik,
  restaurant,
  dataTypeFood,
  dataPrice,
  selected,
  setSelected,
  valuePriece,
  setValuePriece,
  businessHours,
  checked,
  setChecked,
  changeSingleBusinessHour,
  onRestaurantSubmit,
  isLoading,
  name,
  street,
  number,
  pictures,
  setName,
  setStreet,
  setNumber,
  setPictures,
}) => {

  
  console.log("photos: ",restaurant.photos)
  const [showMap, setShowMap] = useState(false);

  const [isFocus, setIsFocus] = useState(false);

  console.log(restaurant)

  const [value, setValue] = useState(null);


  const renderItem = (item) => {
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

  const renderBusinessHour = (dayState, i) => {
    return (
      <View key={dayState.label}> 
        <View  key={i} style={{ flexDirection: "row" }}>
          <Text style={styles.days}>{dayState.label}</Text>
          <CheckBox
            disabled={false}
            value={dayState.active}
            onValueChange={(newValue) => changeSingleBusinessHour(dayState.dayOfWeek, "active", newValue)}
          />
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 8 }} >
          <View style={styles.MainContainer}>
            {!dayState.showFrom && (
              <View>
                <Button title="De:" color={Theme.colors.SECONDARY} marginHorizontal={2}
                  onPress={() => changeSingleBusinessHour(dayState.dayOfWeek, "showFrom", true)}
                />
              </View>
            )}

            <Text style={styles.text}>{dayState.fromTime?.toLocaleTimeString('en-US')}</Text>
            {dayState.showFrom && (
              <DateTimePicker
                value={dayState.fromTime}
                mode={'time'}
                is24Hour={false}
                onChange={(event, value) => {
                  changeSingleBusinessHour(dayState.dayOfWeek, "showFrom", false);
                  changeSingleBusinessHour(dayState.dayOfWeek, "fromTime", value);
                }}
                style={styles.datePicker}
              />
            )}
          </View>
          <View style={styles.MainContainer}>
            {!dayState.showTo && (
              <View>
                <Button title="Hasta:" color={Theme.colors.SECONDARY} marginHorizontal={2}
                  onPress={() => changeSingleBusinessHour(dayState.dayOfWeek, "showTo", true)}
                />
              </View>
            )}
            <Text style={styles.text}>{dayState.toTime?.toLocaleTimeString('en-US')}</Text>
            {dayState.showTo && (
              <DateTimePicker
                value={dayState?.toTime}
                mode={'time'}
                is24Hour={false}
                onChange={(event, value) => {
                  changeSingleBusinessHour(dayState.dayOfWeek, "showTo", false);
                  changeSingleBusinessHour(dayState.dayOfWeek, "toTime", value);
                }}
                style={styles.datePicker}
              />
            )}
          </View>
        </View>
      </View>
    );
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
          <Input
          placeholder='Nombre'
          value={name}
          onChangeText={(text) => {setName(text); 
          formik.setFieldValue("name", name)}}
          errorMessage={formik.errors.name}
          />
        <Input
          rightIcon={{
            type: "material-community",
            name: "map-marker-radius-outline",
            color: getColorIconMap(formik),
            onPress: onOpenCloseMap
          }}
          value={street}
          placeholder='Calle'
          onChangeText={(text) => setStreet(text) }
          errorMessage={formik.errors.street}
          />
          <Input
          placeholder='Número'
          onChangeText={(text) => setNumber (text) }
          errorMessage={formik.errors.number}
          value={number}
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
        <Text style={styles.subTitle}>Días de apertura</Text>
        </View>
      {businessHours.map((businessHour,i) => {
        return renderBusinessHour(businessHour, i);
      })}
      <View style={styles.container}>
        <Dropdown
          style={styles.dropdown}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={dataTypeFood}
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
          value={valuePriece}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValuePriece(item.value);
            setIsFocus(false);
          }}
        />
      </View>
      
      <ListItem
        title="Cerrar Temporalmente"
        trailing={
          <Switch value={checked} onValueChange={() => setChecked(!checked)} />
        }
        onPress={() => {
          setChecked(!checked)
        }}
      />
      <Text style={styles.closeSubTitle}>Si activas esta opción tu restaurante comenzará en modo inactivo</Text>
        <Button style={styles.button2} onPress={onRestaurantSubmit} title="Continuar >" color={Theme.colors.PRIMARY} />
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
  MainContainer: {
    flex: 1,
    //padding: 6,
    alignItems: 'center',
    backgroundColor: Theme.colors.GREY,
    flexDirection: "row", justifyContent: "space-between"
  },

  text: {
    fontSize: 14,
    color: Theme.colors.PRIMARY,
  },
  container: {
    padding: 16
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
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
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
  icon: {
    marginRight: 5,
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  food: {
    width: 250,
    margin: 13,
    alignSelf: "center",
  },
  closeSubTitle: {
    fontSize: 15,
    color: "gray",
    marginLeft: 10,
    marginBottom: 10,
    color: Theme.colors.SECONDARY,
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
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
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
  days: {
    fontSize: 20,
    color: Theme.colors.PRIMARY,
  },
  buttonD: {
    marginRight: 1,
    color: Theme.colors.SECONDARY,
  },
});
