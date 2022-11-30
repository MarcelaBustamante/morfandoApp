import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { getPublicRestaurants } from '../../../redux/slices/clientRestaurantsSlice';

const SearchRestaurants = ({longitude, latitude}) => {
  const dispatch = useDispatch();
  const [filters, setFilters] = React.useState({
    page: 0,
    longitude: longitude,
    latitude: latitude,
    type: null,
    rating: null,
    minPrice: null,
    maxPrice: null
  });
  React.useEffect(() => {    
    dispatch(
      getPublicRestaurants(filters),
    );
  }, [filters]);
  return (
    <Searchbar
      placeholder="Search"
      onEndEditing={e => {
        const search = e.nativeEvent.text;
        if (search != filters?.search) {
          setFilters({...filters, search: search});
        }
      }}
    />
  );
};

// TODO implementar otros filtros

export default SearchRestaurants;