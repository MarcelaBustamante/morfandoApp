import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Theme from "../../styles/Theme";

const DATA = [
  {
    id: '1',
    titleRestaurant: 'El almacén',
    timeRestaurant: "Lunes abierto de 6:00 a 22:30",
    directionRestaurant: 'Av Belgrano 924',
    locationRestaurant: 'CABA',
    distanceRestaurant: '0.5 km',
    travelRestaurant: '2 min',
    stateRestaurant: "Abierto",
    image: "",
  },
  {
    id: "2",
    titleRestaurant: 'La comida de Manolo',
    timeRestaurant: "Lunes abierto de 11:00 a 22:30",
    directionRestaurant: 'Av Martinez 1924',
    locationRestaurant: 'San Isidro',
    distanceRestaurant: '2 km',
    travelRestaurant: '10 min',
    stateRestaurant: "Abierto",
    image: "",
  },
  {
    id: '3',
    titleRestaurant: 'Don Benito',
    timeRestaurant: "Lunes abierto de 8:00 a 00:30",
    directionRestaurant: '12 de Octubre 1200',
    locationRestaurant: 'Quilmes',
    distanceRestaurant: '5 km', //esto si es mio no iria
    travelRestaurant: '5 min', // lo de arriba
    stateRestaurant: "Cerrado Temporalmete",
    image: "",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, styles.general, textColor]}>{item.titleRestaurant}</Text>
    <Text style={[styles.general, textColor]}>{item.timeRestaurant}</Text>
    <Text style={[styles.general, textColor]}>{item.directionRestaurant}, {item.locationRestaurant}</Text>
    <Text style={[styles.state, textColor]}>{item.stateRestaurant}</Text>
  </TouchableOpacity>
);
 
const RestaurantList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    //const backgroundColor = item.id === selectedId ? Theme.colors.GREY : Theme.colors.GREY ;
    //const color = item.id === selectedId ?  Theme.colors.PRIMARY : Theme.colors.PRIMARY;

    
    return (
        <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        //backgroundColor={{ backgroundColor }}
        //textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
    backgroundColor: Theme.colors.GREY,
    shadowColor: Theme.colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  state: {
    color: Theme.colors.ERROR,
  },
  general:{
    color: Theme.colors.PRIMARY,
  }
});

export default RestaurantList;