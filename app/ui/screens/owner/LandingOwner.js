import { Button } from '@react-native-material/core';
import React from 'react';
import Theme from '../../styles/Theme';
import { SafeAreaView, View, FlatList, VirtualizedList, StyleSheet, Text, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
/*
const DATA = [
  {
    id: "1",
    nombreRestaurante: 'Los Maizales',
    direccionRestaurante: 'Av La Plata 924',
    localidadRestaurante: 'CABA',
    distanciaRestaurante: '5 km',
    tiempoRestaurante: '5 min',
  }
];*/
const DATA = [
  {
    id: "1",
    nombreRestaurante: 'Los Maizales',
    direccionRestaurante: 'Av La Plata 924',
    localidadRestaurante: 'CABA',
    distanciaRestaurante: '5 km',
    tiempoRestaurante: '5 min',
  },
  {
    id: "2",
    nombreRestaurante: 'Don Julio',
    direccionRestaurante: 'Av Belgrano 924',
    localidadRestaurante: 'CABA',
    distanciaRestaurante: '0.5 km',
    tiempoRestaurante: '2 min',
  },
  {
    id: "3",
    nombreRestaurante: 'Tinto y Carbon',
    direccionRestaurante: 'Necochea 542',
    localidadRestaurante: 'Ramos Mejia',
    distanciaRestaurante: '15 km',
    tiempoRestaurante: '55 min',
  },
];


const Item = ({ item }) => (
   <View style={styles.item}>
    <Text style={styles.title}>{item.nombreRestaurante}</Text>
    <Text style={styles.title}>{item.direccionRestaurante}</Text>
  </View>
);

const renderItem = ({ item }) => {
  return (
    <View>
      <Image></Image>
      <View>
          <Text>{item.nombreRestaurante}</Text>
      </View>
      <View>
          <Text>{item.direccionRestaurante}</Text>
          <Text>{item.localidadRestaurante}</Text>
      </View>
    </View>
  )
}


function LandingOwnerScreenUI() {

  return (
    <View style={styles.contenedor}>
      <View style={styles.icono}>
        <Button style={styles.botonUsuario} onClick={this.switchColor} onPress={() => loginHandler()} title="J" />
      </View>
      <View style={styles.bienvenidaOwner}>
        <Text style={styles.bienvenidaOwnerTexto}>Hola Juan Fernando Perez</Text>
      </View>
      <View style={styles.restaurantesVista}>
        <Button style={styles.button} onClick={this.switchColor} onPress={() => loginHandler()} title="Nuevo Restaurante" />
        <Text style={styles.subTitle}>Mis Restaurantes</Text>
      </View>
      <FlatList>
        data={DATA}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({

  contenedor: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start', 
  },

  icono: {
    marginTop: 2,
    marginRight: 2,
    alignSelf: 'flex-end',
    borderRadius: 100,
  },
  bienvenidaOwner: {
    marginTop: 150,
  },
  restaurantesVista: {
    alignSelf: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
  button:{
    width:350,
    marginTop: 25,
    alignContent: 'center',
    alignSelf: 'center',
  },
  bienvenidaOwnerTexto: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 5,
    color: Theme.colors.SECONDARY,
  },

  botonUsuario: {
    borderWidth:0,
    justifyContent:'center',
    alignItems: 'center',
    width:50,
    height:50,
    borderTopEndRadius: 25,
    borderTopStartRadius: 25,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
    backgroundColor: Theme.colors.PRIMARY,
  },

  subTitle:{
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 25,
    alignSelf: 'center',
    color: Theme.colors.PRIMARY,
  },
});

export default LandingOwnerScreenUI;