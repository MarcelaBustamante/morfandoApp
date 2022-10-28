import React, { useState } from 'react';
  import { StyleSheet, View, TouchableOpacity, Text, Alert, Modal, Pressable, SafeAreaView } from 'react-native';
  import { MultiSelect } from 'react-native-element-dropdown';
  import AntDesign from 'react-native-vector-icons/AntDesign';
  import { Button, ListItem, Switch } from "@react-native-material/core";
  import Theme from '../../styles/Theme';
  import { Dropdown } from 'react-native-element-dropdown';
  import DateTimePicker from '@react-native-community/datetimepicker';


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
    return (
        <View style={styles.container1}>
          <Text style={styles.title}>Nuevo Restaurante</Text>
          <Text style={styles.subTitle}>Días de apertura</Text>
          <View style={{flexDirection:"row", justifyContent: "space-between"}} >
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleL}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibleL(!modalVisibleL);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Abrir Lunes</Text>
            <ListItem
          trailing={
          <Switch value={checkedL} onValueChange={() => setCheckedL(!checkedL)} />
        }
        onPress={() => setCheckedL(!checkedL)}
      />
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}> Horario apertura = {timeOpenL.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenL && (
              <DateTimePicker
               value={timeOpenL}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenL}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerOpenL && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar apertura" color= {Theme.colors.SECONDARY} onPress={showTimePickerOpenL} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
          <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}>Horario Cierre = {timeCloseL.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseL && (
              <DateTimePicker
               value={timeCloseL}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseL}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerCloseL && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar cierre" color= {Theme.colors.SECONDARY} onPress={showTimePickerCloseL} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleL(!modalVisibleL)}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleL(true)}
      >
        <Text style={styles.textStyle}>  L  </Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleM}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibleM(!modalVisibleM);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Abrir Martes</Text>
            <ListItem
          trailing={
          <Switch value={checkedM} onValueChange={() => setCheckedM(!checkedM)} />
        }
        onPress={() => setCheckedM(!checkedM)}
      />
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}> Horario apertura = {timeOpenM.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenM && (
              <DateTimePicker
               value={timeOpenM}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenM}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerOpenM && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar apertura" color= {Theme.colors.SECONDARY} onPress={showTimePickerOpenM} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
          <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}>Horario Cierre = {timeCloseM.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseM && (
              <DateTimePicker
               value={timeCloseM}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseM}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerCloseM && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar cierre" color= {Theme.colors.SECONDARY} onPress={showTimePickerCloseM} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleM(!modalVisibleM)}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleM(true)}
      >
        <Text style={styles.textStyle}>  M  </Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleMi}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibleMi(!modalVisibleMi);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Horario Miércoles</Text>
            <ListItem
          trailing={
          <Switch value={checkedMi} onValueChange={() => setCheckedMi(!checkedMi)} />
        }
        onPress={() => setCheckedMi(!checkedMi)}
      />
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}> Horario apertura = {timeOpenMi.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenMi && (
              <DateTimePicker
               value={timeOpenMi}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenMi}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerOpenMi && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar apertura" color= {Theme.colors.SECONDARY} onPress={showTimePickerOpenMi} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
          <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}>Horario Cierre = {timeCloseMi.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseMi && (
              <DateTimePicker
               value={timeCloseMi}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseMi}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerCloseMi && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar cierre" color= {Theme.colors.SECONDARY} onPress={showTimePickerCloseMi} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleMi(!modalVisibleMi)}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleMi(true)}
      >
        <Text style={styles.textStyle}> Mi </Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleJ}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibleJ(!modalVisibleJ);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Abrir Jueves</Text>
            <ListItem
          trailing={
          <Switch value={checkedJ} onValueChange={() => setCheckedJ(!checkedJ)} />
        }
        onPress={() => setCheckedJ(!checkedJ)}
      />
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}> Horario apertura = {timeOpenJ.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenJ && (
              <DateTimePicker
               value={timeOpenJ}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenJ}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerOpenJ && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar apertura" color= {Theme.colors.SECONDARY} onPress={showTimePickerOpenJ} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
          <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}>Horario Cierre = {timeCloseJ.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseJ && (
              <DateTimePicker
               value={timeCloseJ}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseJ}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerCloseJ && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar cierre" color= {Theme.colors.SECONDARY} onPress={showTimePickerCloseJ} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleJ(!modalVisibleJ)}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleJ(true)}
      >
        <Text style={styles.textStyle}>  J  </Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleV}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibleV(!modalVisibleV);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Abrir Viernes</Text>
            <ListItem
          trailing={
          <Switch value={checkedV} onValueChange={() => setCheckedV(!checkedV)} />
        }
        onPress={() => setCheckedV(!checkedV)}
      />
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}> Horario apertura = {timeOpenV.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenV && (
              <DateTimePicker
               value={timeOpenV}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenV}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerOpenV && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar apertura" color= {Theme.colors.SECONDARY} onPress={showTimePickerOpenV} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
          <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}>Horario Cierre = {timeCloseV.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseV && (
              <DateTimePicker
               value={timeCloseV}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseV}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerCloseV && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar cierre" color= {Theme.colors.SECONDARY} onPress={showTimePickerCloseV} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleV(!modalVisibleV)}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleV(true)}
      >
        <Text style={styles.textStyle}>  V  </Text>
      </Pressable>
    </View>
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleS}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibleS(!modalVisibleS);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Abrir Sábado</Text>
            <ListItem
          trailing={
          <Switch value={checkedS} onValueChange={() => setCheckedS(!checkedS)} />
        }
        onPress={() => setCheckedS(!checkedS)}
      />
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}> Horario apertura = {timeOpenS.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenS && (
              <DateTimePicker
               value={timeOpenS}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenS}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerOpenS && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar apertura" color= {Theme.colors.SECONDARY} onPress={showTimePickerOpenS} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
          <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}>Horario Cierre = {timeCloseS.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseS && (
              <DateTimePicker
               value={timeCloseS}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseS}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerCloseS && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar cierre" color= {Theme.colors.SECONDARY} onPress={showTimePickerCloseS} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleS(!modalVisibleS)}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleS(true)}
      >
        <Text style={styles.textStyle}>  S  </Text>
      </Pressable>
    </View><View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleD}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisibleD(!modalVisibleD);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Abrir Domingo</Text>
            <ListItem
          trailing={
          <Switch value={checkedD} onValueChange={() => setCheckedD(!checkedD)} />
        }
        onPress={() => setCheckedD(!checkedD)}
      />
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}> Horario apertura = {timeOpenD.toLocaleTimeString('en-US')}</Text>
              {timePickerOpenD && (
              <DateTimePicker
               value={timeOpenD}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedOpenD}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerOpenD && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar apertura" color= {Theme.colors.SECONDARY} onPress={showTimePickerOpenD} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
          <SafeAreaView style={{ flex: 1 }}>
              <View style={styleSheet.MainContainer}>
  
              <Text style={styleSheet.text}>Horario Cierre = {timeCloseD.toLocaleTimeString('en-US')}</Text>
              {timePickerCloseD && (
              <DateTimePicker
               value={timeCloseD}
              mode={'time'}
              is24Hour={false}
              onChange={onTimeSelectedCloseD}
              style={styleSheet.datePicker}
            />
          )}
  
          {!timePickerCloseD && (
            <View style={{ margin: 10 }}>
              <Button title="Seleccionar cierre" color= {Theme.colors.SECONDARY} onPress={showTimePickerCloseD} />
            </View>
          )}
 
            </View>
          </SafeAreaView>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisibleD(!modalVisibleD)}
            >
              <Text style={styles.textStyle}>Aceptar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisibleD(true)}
      >
        <Text style={styles.textStyle}>  D  </Text>
      </Pressable>
    </View>
    </View>
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
  });
  const styleSheet = StyleSheet.create({
 
    MainContainer: {
      flex: 1,
      padding: 6,
      alignItems: 'center',
      backgroundColor: 'white'
    },
   
    text: {
      fontSize: 15,
      color: Theme.colors.PRIMARY,
      padding: 3,
      marginBottom: 10,
      textAlign: 'center'
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