import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert, Modal, Pressable, SafeAreaView } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Button, ListItem, Switch } from "@react-native-material/core";
import Theme from '../../styles/Theme';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import CheckBox from '@react-native-community/checkbox';
import { LoadingModal } from "../../components/shared/LoadingModal/LoadingModal"


const NewRestaurantScreen2UI = ({
  dataTypeFood,
  dataPrice,
  navigateToNewResto,
  selected,
  setSelected,
  valuePriece,
  setValuePriece,
  checked,
  setChecked,
  businessHours,
  changeSingleBusinessHour,
  onRestaurantSubmit,
  isLoading
}) => {

  const [isFocus, setIsFocus] = useState(false); //dropdown menu
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


  return (
    <View style={styles.container1}>
      <Text style={styles.title}>Nuevo Restaurante</Text>
      <Text style={styles.subTitle}>Días de apertura</Text>

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
        onPress={() => setChecked(!checked)}
      />
      <Text style={styles.closeSubTitle}>Si activas esta opción tu restaurante comenzará en modo inactivo</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }} >
        <Button style={styles.button1} onPress={navigateToNewResto} title="Volver" color={Theme.colors.SECONDARY} />
        <Button style={styles.button2} onPress={onRestaurantSubmit} title="Guardar" color={Theme.colors.PRIMARY} />
      </View>
      <LoadingModal
        text="Guardando Restaurante"
        show={isLoading}
      />
    </View>

  );
};

export default NewRestaurantScreen2UI;

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
  title: {
    fontSize: 30,
    color: "#000",
    fontWeight: "bold",
    marginTop: 10,
    color: Theme.colors.PRIMARY,
  },
  subTitle: {
    fontSize: 20,
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
  food: {
    width: 250,
    margin: 13,
    alignSelf: "center",
  },
  button1: {
    width: 120,
    height: 39,
    margin: 10,

  },
  button2: {
    width: 130,
    height: 39,
    margin: 10,
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

  // Style for iOS ONLY...
  datePicker: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: 320,
    height: 260,
    display: 'flex',
  },
});
