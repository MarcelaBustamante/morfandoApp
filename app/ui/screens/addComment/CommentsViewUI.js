import React, { useState } from "react";
import { FlatList, SectionList, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Theme from "../../styles/Theme";
import { Rating } from 'react-native-elements';
import AddCommentScreenUI from "./AddCommentScreenUI";
import { useEffect } from "react";
import { getReviews } from "../../../networking/api/endpoints/reviewsWS";
import { prefix } from "@fortawesome/free-regular-svg-icons";

const DATA = [
  {id: 1,
    comment: "mucho texto",
    rating: "4"
  },{
    id: 2,
    comment: "mucho texto",
    rating: "3"
   },{
    id: 3,
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
 
const CommentsViewUI = ({formik,restaurantId}) => {
  const [selectedId, setSelectedId] = useState(null);
  const [reviews, setReviews] = useState([]);

  const getAllReviews = async () => {
    const reviews = await getReviews({restaurantId});
    console.log("todas las reviews: ", reviews)
    setReviews(reviews.items);
  }

  useEffect(() =>{
      getAllReviews();
  },[]) 

  const renderItem = ({ item }) => {
   return (
        <Item
        item={item}
        onPress={() => setSelectedId(item.comment)}
      />
    );
  };

  const handleNewReview = (review) => {
    console.log("review", review)
    setReviews(pre => pre.concat(review))
  }

  console.log("soy el hook: ", reviews)
  return (
    <View style={styles.container}>
    <FlatList
      ListHeaderComponent={AddCommentScreenUI({formik,handleNewReview})}
      data={reviews}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
  </View>
  );
};
export default CommentsViewUI;


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

