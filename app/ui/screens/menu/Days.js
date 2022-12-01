import React, {useState} from 'react';
import {View, Text, StyleSheet, Alert, Modal, Pressable} from 'react-native';
import Theme from '../../styles/Theme';

export default function Days({businessHours}) {

    const days = [
        { day: "MONDAY", label: "Lunes", initial: " L " },
        { day: "TUESDAY", label: "Martes", initial: " M " },
        { day: "WEDNESDAY", label: "Miércoles", initial: " M " },
        { day: "THURSDAY", label: "Jueves", initial: " J " },
        { day: "FRIDAY", label: "Viernes", initial: " V " },
        { day: "SATURDAY", label: "Sábado", initial: " S " },
        { day: "SUNDAY", label: "Domingo", initial: " D " },
    ];
    const [showModal, setShowModal] = useState(false);
    const [current, setCurrent] = useState(null);

    const findHours = (dayOfWeek) => businessHours.find(bh => 0 == dayOfWeek.localeCompare(bh.dayOfWeek));
    const onPress = (dayOfWeek, label) => {
        const found = findHours(dayOfWeek);
        if (found) {
            setCurrent({...found, label: label});
        } else {
            setCurrent(null);
        }
        setShowModal(true);
    }
    const dayComponents = days.map(day => {
        return (
            <View style={styles.centeredView}>
                <Pressable
                    style={[styles.button, findHours(day.day) ? styles.buttonOpenExist : styles.buttonOpenNotExist]}
                    onPress={() => onPress(day.day, day.label)}
                >
                    <Text style={styles.textStyle}> {day.initial} </Text>
                </Pressable>
            </View>
        );
    });

    return (
        <View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                {dayComponents}
            </View>
            <View style={styles.centeredView}>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showModal}
                    onRequestClose={() => {
                        setShowModal(false);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            {current &&
                                <>
                                    <Text style={styles.modalText}>Horario para el {current.label}</Text>
                                    <Text>De: {current?.fromTime}</Text>
                                    <Text>A: {current?.toTime}</Text>
                                </>
                            }
                            {!current &&
                                <Text style={styles.modalText}>El restaurante está cerrado este día</Text>
                            }
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setShowModal(false)}>
                                <Text style={styles.textStyle}> OK </Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  icon: {
    marginTop: 2,
    marginRight: 2,
    alignSelf: 'flex-end',
    borderRadius: 100,
  },
  name: {
    flex: 1,
    fontSize: 35,
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 30,
    marginTop: 20,
    fontWeight: 'bold',
    color: Theme.colors.PRIMARY,
  },
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container1: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 350,
    marginTop: 25,
    alignContent: 'center',
    alignSelf: 'center',
  },
  containerCirculo: {
    alignSelf: 'flex-end',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 10,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpenExist: {
    backgroundColor: 'green',
  },
  buttonClose: {
    backgroundColor: Theme.colors.PRIMARY,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  circle: {
    width: 39,
    height: 39,
    borderBottomEndRadius: 20,
    borderTopEndRadius: 20,
    margin: 5,
  },
  buttonOpenNotExist: {
    backgroundColor: Theme.colors.ERROR
  }
});
