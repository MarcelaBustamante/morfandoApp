import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const SearchRestaurants = ({filters, setFilters}) => {
  const onChange = search => {
    setFilters({...filters, search: search});
  };
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChange}
    />
  );
};

// TODO implementar otros filtros

export default SearchRestaurants;