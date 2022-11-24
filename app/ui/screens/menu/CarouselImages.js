/*import { StatusBar } from "react-native";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  Animated,
} from "react-native";

import { LinearGradient } from "react-native-svg";

const imagenes = [
  "https://t2.rg.ltmcdn.com/es/posts/2/0/9/milanesa_de_papas_32902_600.jpg",
  "https://astelus.com/wp-content/viajes/Plato-de-milanesa-con-papas-ti%CC%81pico-de-Argentina.jpg",
  "https://s3.amazonaws.com/us.cdn.ciudadanodiario.com.ar/052022/1651583379333/portada-mila-jpg..jpg",
  "https://t2.rg.ltmcdn.com/es/posts/2/0/9/milanesa_de_papas_32902_600.jpg",
  "https://astelus.com/wp-content/viajes/Plato-de-milanesa-con-papas-ti%CC%81pico-de-Argentina.jpg",
  "https://s3.amazonaws.com/us.cdn.ciudadanodiario.com.ar/052022/1651583379333/portada-mila-jpg..jpg",
  "https://t2.rg.ltmcdn.com/es/posts/2/0/9/milanesa_de_papas_32902_600.jpg",

];

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const ANCHO_CONTENEDOR = width * 0.7;
const ESPACIO_CONTENEDOR = (width - ANCHO_CONTENEDOR) / 2;
const ESPACIO = 10;
const ALTURA_BACKDROP = height * 0.5;

function Backdrop({ scrollX }) {
  return (
    <View
      style={[
        {
          position: "absolute",
          height: ALTURA_BACKDROP,
          top: 0,
          width: width,
        },
        StyleSheet.absoluteFillObject,
      ]}
    >
      {imagenes.map((imagen, index) => {
        const inputRange = [
          (index - 1) * ANCHO_CONTENEDOR,
          index * ANCHO_CONTENEDOR,
          (index + 1) * ANCHO_CONTENEDOR,
        ];

        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0, 1, 0],
        });
        return (
          <Animated.Image
            key={index}
            source={{ uri: imagen }}
            style={[
              { width: width, height: ALTURA_BACKDROP, opacity },
              StyleSheet.absoluteFillObject,
            ]}
          />
        );
      })}
      
    </View>
  );
}

export default function CarouselImages() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <Backdrop scrollX={scrollX} />
      <Animated.FlatList
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        snapToAlignment="start"
        contentContainerStyle={{
          paddingTop: 200,
          paddingHorizontal: ESPACIO_CONTENEDOR,
        }}
        snapToInterval={ANCHO_CONTENEDOR}
        decelerationRate={0}
        scrollEventThrottle={16}
        data={imagenes}
        keyExtractor={(item) => item}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: ANCHO_CONTENEDOR }}>
            </View>
          );
        }}
      />
    </SafeAreaView>
  );
}
//<Image source={{ uri: item }} style={styles.posterImage} />
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});*/
import React from 'react';
import { FlatList, StyleSheet, Text, SafeAreaView, Image, Dimensions } from 'react-native';
import { ScrollView } from 'react-native';
import Theme from '../../styles/Theme';

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;

const TagsList = () => {
  return (
    <ScrollView horizontal= {true}>
        <FlatList
          horizontal={true}
        data={[
          {key: '1',
          image: "https://www.mausi.com/wp-content/uploads/2019/02/rabas-1.jpg"}, 
          {key: '2',
          image: "https://elsol-compress-release.s3-accelerate.amazonaws.com/images/large/1614296501390milanesa%20con%20huevos.jpg"}, 
         {key: '3',
         image: "https://www.mausi.com/wp-content/uploads/2019/02/rabas-1.jpg"}, 
         
        ]}
        renderItem={({item}) => <Image
        style={styles.imagenLista}
        source={{ uri: item.image }}
      />}
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