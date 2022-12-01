import React from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native';
import Theme from '../../styles/Theme';

const TagsList = ({tags}) => {
  return (
    <ScrollView horizontal= {true}>
        <FlatList
          horizontal={true}
        data={tags}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      />
    </ScrollView>
  );
}

export default TagsList;

const styles = StyleSheet.create({
  container: {
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
      height: 40,
  },
});