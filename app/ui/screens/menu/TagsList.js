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
      elevation: 5,
      backgroundColor: Theme.colors.SECONDARY,
      
  },
});