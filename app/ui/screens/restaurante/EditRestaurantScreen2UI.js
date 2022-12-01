import React, { useState } from 'react';
  import { StyleSheet, TouchableOpacity, Text, Alert, Modal, Pressable, View } from 'react-native';
  import { MultiSelect } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import { Button, ListItem, Switch } from "@react-native-material/core";
  import Theme from '../../styles/Theme';
  import { Dropdown } from 'react-native-element-dropdown';
  import DateTimePicker from '@react-native-community/datetimepicker';
  import CheckBox from '@react-native-community/checkbox';

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
  const EditRestaurantScreen2UI = ({
    primText = 'No vino ningún texto',
    secText,
    loginHandler,
    navigateToMenuOwner,
    navigateToEditScreen1,
  }) => {
    const [selected, setSelected] = useState([]); //dropdown menu tags
    const [value, setValue] = useState(null); //dropdown menu
    const [isFocus, setIsFocus] = useState(false); //dropdown menu
    const [checked, setChecked] = useState(true); //cerrar temporalmente
    const [checkedL, setCheckedL] = useState(true); //abrir x dia
    const [checkedM, setCheckedM] = useState(true); 
    const [checkedMi, setCheckedMi] = useState(true);
    const [checkedJ, setCheckedJ] = useState(true); 
    const [checkedV, setCheckedV] = useState(true); 
    const [checkedS, setCheckedS] = useState(true); 
    const [checkedD, setCheckedD] = useState(true); 

    const [modalVisibleL, setModalVisibleL] = useState(false); //pop-ups
    const [modalVisibleM, setModalVisibleM] = useState(false);
    const [modalVisibleMi, setModalVisibleMi] = useState(false);
    const [modalVisibleJ, setModalVisibleJ] = useState(false);
    const [modalVisibleV, setModalVisibleV] = useState(false);
    const [modalVisibleS, setModalVisibleS] = useState(false);
    const [modalVisibleD, setModalVisibleD] = useState(false);

    const [timePickerOpenL, setTimePickerOpenL] = useState(false);
    const [timePickerCloseL, setTimePickerCloseL] = useState(false);

    const [timePickerOpenM, setTimePickerOpenM] = useState(false);
    const [timePickerCloseM, setTimePickerCloseM] = useState(false);

    const [timePickerOpenMi, setTimePickerOpenMi] = useState(false);
    const [timePickerCloseMi, setTimePickerCloseMi] = useState(false);

    const [timePickerOpenJ, setTimePickerOpenJ] = useState(false);
    const [timePickerCloseJ, setTimePickerCloseJ] = useState(false);

    const [timePickerOpenV, setTimePickerOpenV] = useState(false);
    const [timePickerCloseV, setTimePickerCloseV] = useState(false);

    const [timePickerOpenS, setTimePickerOpenS] = useState(false);
    const [timePickerCloseS, setTimePickerCloseS] = useState(false);

    const [timePickerOpenD, setTimePickerOpenD] = useState(false);
    const [timePickerCloseD, setTimePickerCloseD] = useState(false);


    const [timeOpenL, setTimeOpenL] = useState(new Date(Date.now()));
    const [timeCloseL, setTimeCloseL] = useState(new Date(Date.now()));

    const [timeOpenM, setTimeOpenM] = useState(new Date(Date.now()));
    const [timeCloseM, setTimeCloseM] = useState(new Date(Date.now()));

    const [timeOpenMi, setTimeOpenMi] = useState(new Date(Date.now()));
    const [timeCloseMi, setTimeCloseMi] = useState(new Date(Date.now()));

    const [timeOpenJ, setTimeOpenJ] = useState(new Date(Date.now()));
    const [timeCloseJ, setTimeCloseJ] = useState(new Date(Date.now()));

    const [timeOpenV, setTimeOpenV] = useState(new Date(Date.now()));
    const [timeCloseV, setTimeCloseV] = useState(new Date(Date.now()));

    const [timeOpenS, setTimeOpenS] = useState(new Date(Date.now()));
    const [timeCloseS, setTimeCloseS] = useState(new Date(Date.now()));

    const [timeOpenD, setTimeOpenD] = useState(new Date(Date.now()));
    const [timeCloseD, setTimeCloseD] = useState(new Date(Date.now()));
     
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
function showTimePickerOpenL() {
  setTimePickerOpenL(true);
};
function showTimePickerCloseL() {
  setTimePickerCloseL(true);
};
function onTimeSelectedCloseL(event, value) {
  setTimeCloseL(value);
  setTimePickerCloseL(false);
};
function onTimeSelectedOpenL(event, value) {
  setTimeOpenL(value);
  setTimePickerOpenL(false);
};

function showTimePickerOpenM() {
  setTimePickerOpenM(true);
};
function showTimePickerCloseM() {
  setTimePickerCloseM(true);
};
function onTimeSelectedCloseM(event, value) {
  setTimeCloseM(value);
  setTimePickerCloseM(false);
};
function onTimeSelectedOpenM(event, value) {
  setTimeOpenM(value);
  setTimePickerOpenM(false);
};

function showTimePickerOpenMi() {
  setTimePickerOpenMi(true);
};
function showTimePickerCloseMi() {
  setTimePickerCloseMi(true);
};
function onTimeSelectedCloseMi(event, value) {
  setTimeCloseMi(value);
  setTimePickerCloseMi(false);
};
function onTimeSelectedOpenMi(event, value) {
  setTimeOpenMi(value);
  setTimePickerOpenMi(false);
};

function showTimePickerOpenJ() {
  setTimePickerOpenJ(true);
};
function showTimePickerCloseJ() {
  setTimePickerCloseJ(true);
};
function onTimeSelectedCloseJ(event, value) {
  setTimeCloseJ(value);
  setTimePickerCloseJ(false);
};
function onTimeSelectedOpenJ(event, value) {
  setTimeOpenJ(value);
  setTimePickerOpenJ(false);
};

function showTimePickerOpenV() {
  setTimePickerOpenV(true);
};
function showTimePickerCloseV() {
  setTimePickerCloseV(true);
};
function onTimeSelectedCloseV(event, value) {
  setTimeCloseV(value);
  setTimePickerCloseV(false);
};
function onTimeSelectedOpenV(event, value) {
  setTimeOpenV(value);
  setTimePickerOpenV(false);
};

function showTimePickerOpenS() {
  setTimePickerOpenS(true);
};
function showTimePickerCloseS() {
  setTimePickerCloseS(true);
};
function onTimeSelectedCloseS(event, value) {
  setTimeCloseS(value);
  setTimePickerCloseS(false);
};
function onTimeSelectedOpenS(event, value) {
  setTimeOpenS(value);
  setTimePickerOpenS(false);
};

function showTimePickerOpenD() {
  setTimePickerOpenD(true);
};
function showTimePickerCloseD() {
  setTimePickerCloseD(true);
};
function onTimeSelectedCloseD(event, value) {
  setTimeCloseD(value);
  setTimePickerCloseD(false);
};
function onTimeSelectedOpenD(event, value) {
  setTimeOpenD(value);
  setTimePickerOpenD(false);
};


const [toggleCheckBoxL, setToggleCheckBoxL] = useState(false)
const [toggleCheckBoxM, setToggleCheckBoxM] = useState(false)
const [toggleCheckBoxMi, setToggleCheckBoxMi] = useState(false)
const [toggleCheckBoxJ, setToggleCheckBoxJ] = useState(false)
const [toggleCheckBoxV, setToggleCheckBoxV] = useState(false)
const [toggleCheckBoxS, setToggleCheckBoxS] = useState(false)
const [toggleCheckBoxD, setToggleCheckBoxD] = useState(false)

     
    return (
        <View style={styles.container1}>
          <Text style={styles.title}>Editar Restaurante</Text>
          <Text style={styles.subTitle}>Días de apertura</Text>
          <View style={{flexDirection:"row", justifyContent: "center", marginBottom: 10}} >
          <Text style={styles.days}>L</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBoxL}
            onValueChange={(newValue) => setToggleCheckBoxL(newValue)}
          />
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerOpenL && (
            <View>
              <Button  title="De:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerOpenL} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeOpenL.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenL && (
              <DateTimePicker
               value={timeOpenL}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenL}
              style={styleSheet.datePicker}
            />
          )}      
            </View>
          </View>
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerCloseL && (
            <View>
              <Button title="Hasta:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerCloseL} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeCloseL.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseL && (
              <DateTimePicker
               value={timeCloseL}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseL}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
        </View>


        <View style={{flexDirection:"row", justifyContent: "center", marginBottom: 10}} >
          <Text style={styles.days}>M</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBoxM}
            onValueChange={(newValue) => setToggleCheckBoxM(newValue)}
          />
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerOpenM && (
            <View>
              <Button  title="De:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerOpenM} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeOpenM.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenM && (
              <DateTimePicker
               value={timeOpenM}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenM}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerCloseM && (
            <View>
              <Button title="Hasta:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerCloseM} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeCloseM.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseM && (
              <DateTimePicker
               value={timeCloseM}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseM}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
        </View>


        <View style={{flexDirection:"row", justifyContent: "center", marginBottom: 10}} >
          <Text style={styles.days}>Mi</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBoxMi}
            onValueChange={(newValue) => setToggleCheckBoxMi(newValue)}
          />
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerOpenMi && (
            <View>
              <Button  title="De:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerOpenMi} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeOpenMi.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenMi && (
              <DateTimePicker
               value={timeOpenMi}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenMi}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerCloseMi && (
            <View>
              <Button title="Hasta:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerCloseMi} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeCloseMi.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseMi && (
              <DateTimePicker
               value={timeCloseMi}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseMi}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
        </View>


        <View style={{flexDirection:"row", justifyContent: "center", marginBottom: 10}} >
          <Text style={styles.days}>J</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBoxJ}
            onValueChange={(newValue) => setToggleCheckBoxJ(newValue)}
          />
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerOpenJ && (
            <View>
              <Button  title="De:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerOpenJ} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeOpenJ.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenJ && (
              <DateTimePicker
               value={timeOpenJ}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenJ}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerCloseJ && (
            <View>
              <Button title="Hasta:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerCloseJ} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeCloseJ.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseJ && (
              <DateTimePicker
               value={timeCloseJ}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseJ}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
        </View>


        <View style={{flexDirection:"row", justifyContent: "center", marginBottom: 10}} >
          <Text style={styles.days}>M</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBoxV}
            onValueChange={(newValue) => setToggleCheckBoxV(newValue)}
          />
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerOpenV && (
            <View>
              <Button  title="De:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerOpenV} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeOpenV.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenV && (
              <DateTimePicker
               value={timeOpenV}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenV}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerCloseV && (
            <View>
              <Button title="Hasta:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerCloseV} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeCloseV.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseV && (
              <DateTimePicker
               value={timeCloseV}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseV}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
        </View>
        

        <View style={{flexDirection:"row", justifyContent: "center", marginBottom: 10}} >
          <Text style={styles.days}>S</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBoxS}
            onValueChange={(newValue) => setToggleCheckBoxS(newValue)}
          />
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerOpenS && (
            <View>
              <Button  title="De:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerOpenS} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeOpenS.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenS && (
              <DateTimePicker
               value={timeOpenS}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenS}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerCloseS && (
            <View>
              <Button title="Hasta:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerCloseS} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeCloseS.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseS && (
              <DateTimePicker
               value={timeCloseS}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseS}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
        </View>

        
        <View style={{flexDirection:"row", justifyContent: "center", marginBottom: 10}} >
          <Text style={styles.days}>D</Text>
          <CheckBox
            disabled={false}
            value={toggleCheckBoxD}
            onValueChange={(newValue) => setToggleCheckBoxD(newValue)}
          />
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerOpenD && (
            <View>
              <Button  title="De:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerOpenD} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeOpenD.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenD && (
              <DateTimePicker
               value={timeOpenD}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenD}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
          <View>
              <View style={styleSheet.MainContainer}>
              {!timePickerCloseD && (
            <View>
              <Button title="Hasta:" color={Theme.colors.SECONDARY} marginHorizontal={2} onPress={showTimePickerCloseD} />
            </View>
          )}
              <Text style={styleSheet.text}>{timeCloseD.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseD && (
              <DateTimePicker
               value={timeCloseD}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseD}
              style={styleSheet.datePicker}
            />
          )}
            </View>
          </View>
        </View>
        <Text style={styles.title}>Menú</Text>
        <Text style={styles.subTitle}>Datos menú</Text>
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
      <Text style={styles.closeSubTitle}>Si activas esta opción tu restaurante encontrara
en modo inactivo</Text>
      <View style={{flexDirection:"row", justifyContent: "space-between"}} >
        <Button style={styles.button1} onPress={navigateToEditScreen1} title="Volver" color={Theme.colors.SECONDARY}/>
        <Button style={styles.button2} onPress={navigateToMenuOwner} title="Continuar" color={Theme.colors.PRIMARY}/>
        </View>      
        </View>

    );
  };

  export default EditRestaurantScreen2UI;

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
      title: {
        fontSize: 30,
        color: "#000",
        fontWeight: "bold",
        marginTop: 10,
        color: Theme.colors.PRIMARY,
      },
      subTitle:{
        fontSize: 20,
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
      days:{
        fontSize: 20,
        color: Theme.colors.PRIMARY,
      },
      buttonD:{
        marginRight: 1,
        color: Theme.colors.SECONDARY,
      }
  });
  const styleSheet = StyleSheet.create({
 
    MainContainer: {
      flex: 1,
      //padding: 6,
      alignItems: 'center',
      backgroundColor: Theme.colors.GREY,
       flexDirection:"row", justifyContent: "space-between"
    },
   
    text: {
      fontSize: 15,
      color: Theme.colors.PRIMARY,
    },
   
    // Style for iOS ONLY...
    datePicker: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      width: 320,
      height: 260,
      display: 'flex',
    },
});