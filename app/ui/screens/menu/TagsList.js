import React from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import Theme from '../../styles/Theme';

const TagsList = () => {
  return (
    <ScrollView horizontal= {true}>
        <FlatList
          horizontal={true}
        data={[
          {key: '1',
          tipoComida: "Mexicana"}, 
          {key: '2',
         tipoComida: "Italiana"}, 
         {key: '3',
          tipoComida: "Francesa"}, 
          {key: '4',
        tipoComida: "Venezolana"}, 
        {key: '5',
          tipoComida: "Mexicana"}, 
          {key: '6',
         tipoComida: "Italiana"}, 
         {key: '7',
          tipoComida: "Francesa"}, 
          {key: '8',
        tipoComida: "Venezolana"}, 
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.tipoComida}</Text>}
      />
    </ScrollView>
  );
}

export default TagsList;

const styles = StyleSheet.create({
  container: {
   flex: 1,
   justifyContent: "space-between"
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
      elevation: 5,
      backgroundColor: Theme.colors.SECONDARY,
      
  },
});