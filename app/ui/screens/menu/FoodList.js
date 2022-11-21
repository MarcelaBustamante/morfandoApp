import React, { useState } from "react";
import { FlatList, SafeAreaView, SectionList, StatusBar, StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import Theme from "../../styles/Theme";

const DATA = [
  {
    id: "1",
    titleMenu: 'Milanesa con papas fritas',
        description: "Carne de peceto rebozada y acompañada con papas fritas",
        ingridents: "carne vacuna, pan ese cortadito, huevo",
        price: '1050',
        vegan: "no",
        celiac: "no",
        image: "https://elsol-compress-release.s3-accelerate.amazonaws.com/images/large/1614296501390milanesa%20con%20huevos.jpg",
  },
  {
    id: "2",
    titleMenu: 'Milanesa de soja',
    description: "qsy es de soja",
    ingridents: "soja",
    price: '1000',
    vegan: "si",
    celiac: "no",
    image: "https://www.mausi.com/wp-content/uploads/2019/02/rabas-1.jpg",  },
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
    <View  style={{paddingEnd: 25, paddingStart: 5}}>
      <Text style={[styles.general, textColor]}>{item.description}</Text>
      <Text style={[styles.price, styles.general, textColor]}>${item.price}</Text>
    </View>
    </View>  
    </TouchableOpacity>
);

const BottomList = ()=>{
  return(
    <View>
      
    </View>
  )
} 

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginBottom: StatusBar.currentHeight || 0,
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
  },
  extra:{
    color: "#008f39"
  },
  price:{
    fontSize: 20,
    fontWeight: 'bold',
    //alignSelf: "flex-end"
  },
  contenedorLista: {
    flexDirection: "row",
  },
  imagenLista: {
    height: 70,
    width: 70,
    borderRadius: 10,
  }
});

export default TipeFoodList;