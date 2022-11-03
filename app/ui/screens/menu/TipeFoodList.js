import React, { useState } from "react";
import { FlatList, SafeAreaView, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Theme from "../../styles/Theme";
import FoodList from "./FoodList";

const DATA = [
  {
    id: "1",
    tipeFood: 'Minutas',
  },
  {
    id: "2",
    tipeFood: 'Pastas',
  },
];

/*{
    tipeFood: 'Minutas',
    data: {
        id: "1",
        titleMenu: 'Milanesa con papas fritas',
        description: "Carne de peceto rebozada y acompañada con papas fritas",
        ingridents: "carne vacuna, pan ese cortadito, huevo",
        price: '1050',
        image: "https://elsol-compress-release.s3-accelerate.amazonaws.com/images/large/1614296501390milanesa%20con%20huevos.jpg",
        },
        "" :
        {    
        id: "2",
        titleMenu: 'Milanesa de soja',
        description: "qsy es de soja",
        ingridents: "soja",
        price: '1000',
        vegan: true,
        image: "https://www.mausi.com/wp-content/uploads/2019/02/rabas-1.jpg",
        },
  },
  {
    tipeFood: 'Pastas',
    data: {
      id: "3",
      titleMenu: 'Ñoquis de papa',
      description: "Con salsa a eleccion",
      ingridents: "papa, harina, huevo",
      price: '750',
      vegan: true,
      image: "https://www.mausi.com/wp-content/uploads/2019/02/rabas-1.jpg",
    }
*/
const loginHandler = () => {
    console.log("Hola mundo");
  }

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  //<TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
  <View>
     <Text style={[styles.title, styles.general, textColor]}>{item.tipeFood}</Text>
    <FoodList
        loginHandler={loginHandler}/> 
  </View>
 // </TouchableOpacity>
);
 
const TipeFoodList = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    //const backgroundColor = item.id === selectedId ? Theme.colors.GREY : Theme.colors.GREY ;
    //const color = item.id === selectedId ?  Theme.colors.PRIMARY : Theme.colors.PRIMARY;

    /* <Text style={[styles.title, styles.general, textColor]}>{item.titleMenu}</Text>
    <Text style={[styles.general, textColor]}>{item.description}</Text>
    <Text style={[styles.general, textColor]}>{item.price}</Text>
    */
    return (
        <Item
        item={item}
        onPress={() => setSelectedId(item.tipeFood)}
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
      keyExtractor={(item) => item.tipeFood}
      extraData={selectedId}
    />
  </SafeAreaView>
  );
};
export default TipeFoodList;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  state: {
    color: Theme.colors.ERROR,
  },
  general:{
    marginLeft: 10,
    color: Theme.colors.SECONDARY,
  }
});

