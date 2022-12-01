import React from 'react';
import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native';
import { ScrollView } from 'react-native';
import Theme from '../../styles/Theme';
import Image from '../../components/shared/ImageCustom';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const TagsList = ({images}) => {
  const data = !images ? [] : images.map(i => {
    return {
      key: i.id,
      image: i.url
    };
  });
  console.log(data);
  return (
    <ScrollView horizontal= {true}>
      <FlatList
          horizontal={true}
        data={data}
        renderItem={({item}) =>
          <Image
            styles={styles.imagenLista}
            uri={item.image}
          />
        }
      />
    </ScrollView>
  );
}

export default TagsList;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: "space-between",
   backgroundColor: 'rgba(52, 52, 52, 0.0)'
  },
  item: {
    margin: 5,
      borderRadius: 20,
      paddingHorizontal: 15,
      paddingVertical: 10,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      backgroundColor: Theme.colors.SECONDARY,
      
  },
  imagenLista: {
    height: height * 0.3,
    width: width,
  }
});