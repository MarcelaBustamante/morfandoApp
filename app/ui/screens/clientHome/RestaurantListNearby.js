import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View , Image, SearchBar, TouchableHighlightBase} from "react-native";
import Theme from "../../../styles/Theme";

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
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Bar_Viejo_Almac%C3%A9n_-Buenos_Aires.JPG/1024px-Bar_Viejo_Almac%C3%A9n_-Buenos_Aires.JPG",
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
    image: "https://www.infobae.com/new-resizer/LeKef6TgPOv3475l7p48rE_ZVIM=/992x661/filters:format(webp):quality(85)/s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2018/12/19081125/Restaurante-Manolo-de-Mar-del-Plata-Juan-Manuel-Santurian-14.jpg",
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
    image: "https://storage.googleapis.com/diariodemocracia/uploads/2022/07/10/tapa-don-benito.jpg",
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View style={styles.contenedorLista}>
      <Text style={[styles.title, styles.general, textColor]}>{item.titleRestaurant}</Text>
      <View style={styles.contenedorInfo}>
        <View>
          <Image
            style={styles.imagenLista}
            source={{ uri: item.image }}
          />
        </View>
        <View style={styles.textoLista}>
          <Text style={[styles.general, textColor]}>{item.directionRestaurant}, {item.locationRestaurant}</Text>
          <Text style={[styles.general, textColor]}>{item.distanceRestaurant}</Text>
          <Text style={[styles.general, textColor]}>{item.travelRestaurant}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
 
const RestaurantListNearby = () => {
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
  
  contenedorInfo: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "space-between",
  
  },
  imagenLista: {
    width:84,
    height:84,
    borderRadius: 10,
    margin: 5,
    marginLeft: 25,
  },
  item: {
    height: 150,
    width: 400,
    margin: 5,
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
    fontSize: 28,
    fontWeight: 'bold',
    alignSelf: "center",
  },
  state: {
    color: Theme.colors.ERROR,
  },
  general:{
    color: Theme.colors.PRIMARY,
    textAlign: "right",
  },
  listText: {
    textAlign: 'right',
    paddingEnd: 25,
    paddingStart: 5,
  },
});

export default RestaurantListNearby;