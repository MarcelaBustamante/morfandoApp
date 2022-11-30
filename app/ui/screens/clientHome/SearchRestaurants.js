import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Button, Searchbar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { getPublicRestaurants } from '../../../redux/slices/clientRestaurantsSlice';
import Filter from "./Filter";

const SearchRestaurants = ({longitude, latitude}) => {
  const dispatch = useDispatch();
  const [filters, setFilters] = React.useState({
    page: 0,
    longitude: longitude,
    latitude: latitude,
    type: null,
    rating: null,
    minPrice: null,
    maxPrice: null,
    radius: null,
  });
  React.useEffect(() => {    
    dispatch(
      getPublicRestaurants(filters),
    );
  }, [filters]);

  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search"
        style={styles.search}
        onEndEditing={e => {
          const search = e.nativeEvent.text;
          if (search != filters?.search) {
            setFilters({...filters, search: search});
          }
        }}
      />
      <Filter filters={filters} setFilters={setFilters} />
    </View>
  );
};

// TODO implementar otros filtros
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  search: {
    flex: 9
  }
});

export default SearchRestaurants;