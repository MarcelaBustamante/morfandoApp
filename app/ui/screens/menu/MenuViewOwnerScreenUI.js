import { Icon } from '@rneui/themed';
import React, { useState } from "react";
import { SafeAreaView, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Image from '../../components/shared/ImageCustom';
import Theme from "../../styles/Theme";
import HeaderForMenu from "./HeaderForMenu"

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.extra, textColor]}>vegano: {item.vegan ? 'Si' : 'No'} // celiaco: {item.tacc ? 'Si' : 'No'}</Text>
    <Text style={[styles.title, styles.general, textColor]}>{item.name}</Text>
    <View style={styles.contenedorLista}>
      <View>
        <Image
          styles={styles.imagenLista}
          uri={item.photo}
        />
      </View>
      <View style={{ paddingEnd: 30, paddingStart: 5 }}>
        <Text style={[styles.general, textColor]}>{item.description}</Text>
        <Text style={[styles.price, styles.general, textColor]}>${item.price}</Text>
      </View>
    </View>
  </TouchableOpacity>
);


const MenuViewOwnerScreenUI = ({ onCreateMenu, categoryMeals }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.innerArray)}
      />
    );
  };

  const result = [];
  const miData = {}
  categoryMeals?.forEach((data) => {
    const category = data.category;
    if (!result[category]) {
      miData[category] = categoryMeals.filter(plato => plato.category === category).map(plato => {
        return {
          name: plato.name,
          description: plato.description,
          price: plato.price,
          vegan: plato.vegan,
          tacc: plato.tacc,
          photo: plato.photo,
        };
      })
    }
  });

  Object.keys(miData).forEach((key) => {
    result.push({
      category: key,
      data: miData[key],
    })
  })

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        ListHeaderComponent={HeaderForMenu}
        sections={result}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={({ section: { category } }) => (
          <Text style={styles.header}>{category}</Text>
        )}
        ListFooterComponent={FooterDelete}
      />
      <Icon
        reverse
        type='material-community'
        name='plus'
        color={Theme.colors.PRIMARY}
        containerStyle={styles.btnContainer}
        onPress={onCreateMenu}
        size={30}
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
  general: {
    color: Theme.colors.PRIMARY,
  },
  extra: {
    color: "#008f39"
  },
  price: {
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
  btnContainer: {
    position: "absolute",
    bottom: 10,
    right: 10,
    elevation: 7
  },
});

export default MenuViewOwnerScreenUI;