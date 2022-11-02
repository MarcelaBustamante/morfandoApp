import React, { useState } from "react";
import { FlatList, SafeAreaView, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Theme from "../../styles/Theme";

const DATA = [
  {
    tipoComida: 'Minutas',
    data: {
        titleMenu: 'Milanesa con papas fritas',
        descripcion: "Carne de peceto rebozada y acompañada con papas fritas",
        precio: '1050',
        imagen: "https://elsol-compress-release.s3-accelerate.amazonaws.com/images/large/1614296501390milanesa%20con%20huevos.jpg"
        },
        {    id: "2",
        titleMenu: 'Ñoquis de papa',
        descripcion: "Con salsa a eleccion",
        precio: '750',
        image: "https://www.mausi.com/wp-content/uploads/2019/02/rabas-1.jpg",
        }
  },
  {
    tipoComida: 'Pastas',
    data: {
        titleMenu: 'Ñoquis de papa',
        descripcion: "Con salsa a eleccion",
        precio: '750',
        image: "https://www.mausi.com/wp-content/uploads/2019/02/rabas-1.jpg",
    }
  },
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, styles.general, textColor]}>{item.titleMenu}</Text>
    <Text style={[styles.general, textColor]}>{item.descripcion}</Text>
    <Text style={[styles.general, textColor]}>{item.precio}</Text>
  </TouchableOpacity>
);
 
const MenuList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    //const backgroundColor = item.id === selectedId ? Theme.colors.GREY : Theme.colors.GREY ;
    //const color = item.id === selectedId ?  Theme.colors.PRIMARY : Theme.colors.PRIMARY;

    
    return (
        <Item
        item={item}
        onPress={() => setSelectedId(item.tipoComida)}
        //backgroundColor={{ backgroundColor }}
        //textColor={{ color }}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.tipoComida}
        renderSectionHeader={({ section: { tipoComida } }) => (
            <Text>{tipoComida}</Text>
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

export default MenuList;