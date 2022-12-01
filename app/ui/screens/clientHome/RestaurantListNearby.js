import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Theme from '../../styles/Theme';
import Image from '../../components/shared/ImageCustom';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

const printAddress = (restaurant) => {
  const { street, number } = restaurant.address;
  return `${street} ${number}`;
};

const printNeighbor = (restaurant) => {
  const { neighborhood, city } = restaurant.address;
  return `${neighborhood}, ${city}`;
};

const Item = ({item, onPress, backgroundColor, textColor}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <View>
      <Text style={[styles.title, textColor]}>{item.name}</Text>
      <View style={styles.containerInfo}>
        <View>
        {item.photos && item.photos.length > 0 && 
          <Image styles={styles.imageList} uri={item.photos[0].url} />
        }
        </View>
        <View style={styles.listText}>
          <Text style={[styles.general, textColor]}>
            {printAddress(item)}
          </Text>
          <Text style={[styles.general, textColor]}>
            {printNeighbor(item)}
          </Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const RestaurantListNearby = ({navigation, restaurants}) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({item}) => {
    return <Item 
      item={item}
      onPress={() => navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_MENU_VIEW, {
        restaurant: item
      })}
      textColor={{ color: Theme.colors.PRIMARY }} 
    />;
  };

  if (!restaurants || restaurants.length == 0) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.general}>No encontramos restaurantes</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },

  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: Theme.colors.GREY,
  },
  imageList: {
    height: 70,
    width: 70,
    borderRadius: 10,
  },
  item: {
    padding: 20,
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
    textAlign: 'right',
  },
  listText: {
    textAlign: 'right',
  },
  seeMore:{
    margin: 10,
    justifyContent:"flex-end",
    alignItems: "flex-end",
  }
});

export default RestaurantListNearby;
