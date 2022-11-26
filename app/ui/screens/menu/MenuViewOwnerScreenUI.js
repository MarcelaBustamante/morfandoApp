import React, { useState } from "react";
import {SafeAreaView, SectionList, StatusBar, StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import Theme from "../../styles/Theme";
import HeaderForMenu from "./HeaderForMenu"
const DATA = [
  {id: 1,
    title: "Minutas",
      data: [{
        titleMenu: 'Milanesa con papas fritas',
        description: "Carne de peceto rebozada y acompañada con papas fritas",
        ingridents: "carne vacuna, pan ese cortadito, huevo",
        price: '1050',
        vegan: "no",
        celiac: "no",
        image: "https://elsol-compress-release.s3-accelerate.amazonaws.com/images/large/1614296501390milanesa%20con%20huevos.jpg",
      },{
        id: "2",
        titleMenu: 'Milanesa de soja',
        description: "qsy es de soja",
        ingridents: "soja",
        price: '1000',
        vegan: "si",
        celiac: "no",
        image: "https://www.mausi.com/wp-content/uploads/2019/02/rabas-1.jpg",
      },{
          id: "2",
          titleMenu: 'Rabas',
          description: "qsy son rabas",
          ingridents: "pulpito",
          price: '1100',
          vegan: "no",
          celiac: "no",
          image: "https://www.mausi.com/wp-content/uploads/2019/02/rabas-1.jpg",
      }]
  },
  {
    id: 2,
    title: "Postre",
    data: [{
      id: "3",
      titleMenu: 'Bombón',
      description: "Helado cubierto de chocolate",
      ingridents: "helado y chocolate",
      price: '800',
      vegan: "no",
      celiac: "si",
      image: "https://elsol-compress-release.s3-accelerate.amazonaws.com/images/large/1614296501390milanesa%20con%20huevos.jpg",
    }]
},
{
  id: 2,
  title: "Vinos",
  data: [{
    id: "4",
    titleMenu: 'Vino',
    description: "y se fue",
    ingridents: "helado y chocolate",
    price: '800',
    vegan: "no",
    celiac: "si",
    image: "https://elsol-compress-release.s3-accelerate.amazonaws.com/images/large/1614296501390milanesa%20con%20huevos.jpg",
  }]
}
];

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.extra, textColor]}>vegano: {item.vegan} // celiaco: {item.celiac}</Text>
    <Text style={[styles.title, styles.general, textColor]}>{item.titleMenu}</Text>
    <View style={styles.contenedorLista}>
      <View>
        <Image
          style={styles.imagenLista}
          source={{ uri: item.image }}
        />
      </View> 
    <View  style={{paddingEnd: 30, paddingStart: 5}}>
      <Text style={[styles.general, textColor]}>{item.description}</Text>
      <Text style={[styles.price, styles.general, textColor]}>${item.price}</Text>
    </View>
    </View>  
    </TouchableOpacity>
);


const MenuViewOwnerScreenUI = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    console.log(item)
    return (
        <Item
        item={item}
        onPress={() => setSelectedId(item.innerArray)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
     <SectionList  
     ListHeaderComponent={HeaderForMenu}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    paddingRight: 40,
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
  },
  extra:{
    color: "#008f39"
  },
  price:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  contenedorLista: {
    flexDirection: "row",
  },
  imagenLista: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: Theme.colors.SECONDARY,
    marginStart: 10,
  },
});

export default MenuViewOwnerScreenUI;