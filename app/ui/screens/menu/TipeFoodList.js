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
    //marginTop: StatusBar.currentHeight || 0,
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

