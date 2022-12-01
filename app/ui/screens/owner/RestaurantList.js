import React from "react";
import { FlatList, View, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import Theme from "../../styles/Theme";
import ImageCustom from "../../components/shared/ImageCustom";
import moment from "moment";

const formatTime = (time) => {
  return moment(time, "hh:mm:ss").format("HH:mm");
}

const printTime = (restaurant) => {
  const now = moment().format('dddd').toUpperCase();
  const businessHour = restaurant.businessHours.find(bh => 0 == now.localeCompare(bh.dayOfWeek));
  if (businessHour) {
    const {fromTime, toTime } = businessHour;
    return `Abierto de ${formatTime(fromTime)} a ${formatTime(toTime)}`;
  }
  return "";
};

const printAddress = (restaurant) => {
  const { street, number, neighborhood } = restaurant.address;
  return `${street} ${number}, ${neighborhood}`;
};

const printStatus = (status) => {
  if ("OPEN".localeCompare(status) == 0) {
    return "Abierto";
  }
  if ("CLOSED".localeCompare(status) == 0) {
    return "Cerrado Temporalmente";
  }
  return status;
};

const RestaurantList = ({ navigateMenuOwner, restaurants }) => {
  const Item = ({ item, onPress, backgroundColor, textColor, navigateMenuOwner }) => (
    <TouchableOpacity onPress={() => navigateMenuOwner(item)} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, styles.general, textColor]}>{item.name}</Text>
      <View style={styles.containerList}>
        <View>
          {item.photos && item.photos.length > 0 &&
            <ImageCustom
              styles={styles.imageList}
              uri={item.photos[0].url}
            />
          }
        </View>
        <View style={{ paddingEnd: 25, paddingStart: 5 }}>
          <Text style={[styles.general, textColor]}>{printTime(item)}</Text>
          <Text style={[styles.general, textColor]}>{printAddress(item)}</Text>
          <Text style={[styles.state, textColor]}>{printStatus(item.status)}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderItem = ({ item }) => {
    return (
      <Item
        item={item}
        navigateMenuOwner={navigateMenuOwner}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={restaurants}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
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
  },
  containerList: {
    flexDirection: "row",
  },
  imageList: {
    height: 150,
    width: 150,
    borderRadius: 10,
  }
});

export default RestaurantList;