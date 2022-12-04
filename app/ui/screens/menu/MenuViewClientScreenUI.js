import React, { useState } from "react";
import { SectionList, StatusBar, StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import Theme from "../../styles/Theme";
import { LoadingModal } from "../../components/shared/LoadingModal/LoadingModal";
import HeaderForClientMenu from "./HeaderForClientMenu";

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.extra, textColor]}>Vegano: {item.vegan} // Celíaco: {item.celiac}</Text>
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

const MenuViewClientScreenUI = ({restaurant, menuItems, isLoading, navigateToComment, navigateToClientNearBy}) => {
  console.log("Resto", restaurant);
  let DATA = !menuItems ? [] : menuItems.map(item => {
    return {
      id: item.category,
      title: item.category,
      data: item.items.map(i => {
        return {
          titleMenu: i.name,
          description: i.description,
          ingridents: i.description,
          price: i.price,
          vegan: i.vegan ? "Sí" : "No",
          celiac: i.tacc ? "Sí" : "No",
          image: i.photo
        }
      })
    };
  });
  const renderItem = ({ item }) => {
    console.log(item)
    return (
        <Item
        item={item}

      />
    );
  };
  if (isLoading) {
    return (
      <LoadingModal
        text="Cargando Menú"
        show={isLoading}
      />
    );
  }
  return (
    <View style={styles.container}>
     <SectionList  
      ListHeaderComponent={() => HeaderForClientMenu({restaurant,navigateToComment, navigateToClientNearBy})}
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
  </View>
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

export default MenuViewClientScreenUI;