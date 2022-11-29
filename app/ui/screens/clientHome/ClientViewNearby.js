import React, {useEffect, useState} from 'react';
import ClientViewNearbyUI from './ClientViewNearbyUI';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import {useDispatch, useSelector} from 'react-redux';
import {getPublicRestaurants} from '../../../redux/slices/clientRestaurantsSlice';
import {clientProfile} from '../../../redux/slices/clientSlice';

export default function ClientViewNearby({navigation}) {
  const dispatch = useDispatch();
  const {restaurants, error, status} = useSelector(state => state.clientRestaurants);
  const {userId} = useSelector(state => state.clientLogin);
  const {user} = useSelector(state => state.client);
  const [filters, setFilters] = useState({
    page: 0,
    latitude: null,
    longitude: null,
    type: null,
    rating: null,
    minPrice: null,
    maxPrice: null
  });
  useEffect(() => {
    dispatch(
      getPublicRestaurants(filters),
    );
  }, [navigation]);
  useEffect(() => {
    dispatch(clientProfile({userId}));
  }, [userId]);

  return (
    <KeyboardAwareScrollView>
      <ClientViewNearbyUI
        client={user}
        restaurants={restaurants}
        favourites={user?.favourites}
        filters={filters}
        setFilters={setFilters}
        navigateToProfileClient={() =>
          navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_INFORMATION)
        }
      />
    </KeyboardAwareScrollView>
  );
}
