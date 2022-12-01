import React, { useState } from "react";
import { FlatList, View, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Theme from "../../styles/Theme";
import { Rating } from 'react-native-elements';
import AddCommentScreenUI from "./AddCommentScreenUI";
const DATA = [
  {id: 1,
    comment: "mucho texto",
    rating: "4"
  },{
    id: "2",
    comment: "mucho texto",
    rating: "3"
   },{
    id: "2",
    comment: "mucho texto",
    rating: "4"
    }
];

const loginHandler = () => {
    console.log("Hola mundo");
  }

const Item = ({ item }) => (
  <View style={ styles.containerBorder}>
    <Text style= {styles.title}> Una persona anónima</Text>
     <Text style={[styles.general]}>{item.comment}</Text>
     <Rating 
           imageSize= {30} 
           readonly 
           fractions="{1}" 
           startingValue= {item.rating}
           style={styles.ratingContainer}
           /> 
  </View>
);
 
const CommentsView = () => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
   return (
        <Item
        item={item}
        onPress={() => setSelectedId(item.comment)}
      />
    );
  };

  return (
    <View style={styles.container}>
    <FlatList
      ListHeaderComponent={AddCommentScreenUI}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.comment}
      extraData={selectedId}
    />
  </View>
  );
};
export default CommentsView;


const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: Theme.colors.PRIMARY
  },
  state: {
    color: Theme.colors.ERROR,
  },
  general:{
    marginLeft: 10,
    fontSize: 20,
  },
  containerBorder: {
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
  ratingContainer:{
    alignSelf: "flex-end"
  }
});

