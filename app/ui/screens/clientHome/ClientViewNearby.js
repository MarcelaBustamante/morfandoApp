import React, {useEffect, useState} from 'react';
import ClientViewNearbyUI from './ClientViewNearbyUI';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import {useDispatch, useSelector} from 'react-redux';
import {getPublicRestaurants} from '../../../redux/slices/clientRestaurantsSlice';
import {clientProfile} from '../../../redux/slices/clientSlice';
import Geolocation from '@react-native-community/geolocation';

export default function ClientViewNearby({navigation}) {
  const dispatch = useDispatch();
  const {restaurants} = useSelector(
    state => state.clientRestaurants,
  );
  const {userId} = useSelector(state => state.clientLogin);
  const {user} = useSelector(state => state.client);
  const [position, setPosition] = useState({longitude: null, latitude: null});

  useEffect(() => {
    let position = {};
    Geolocation.requestAuthorization(
      () => {
        Geolocation.getCurrentPosition(info => {
          position = {
            longitude: info.coords.longitude,
            latitude: info.coords.latitude,
          };
          setPosition(position);
          dispatch(getPublicRestaurants(position));
        });
      },
      () => dispatch(getPublicRestaurants({})),
    );
  }, [navigation]);
  useEffect(() => {
    dispatch(clientProfile({userId}));
  }, [userId]);

  return (
      <ClientViewNearbyUI
        navigation={navigation}
        client={user}
        restaurants={restaurants}
        longitude={position.longitude}
        latitude={position.latitude}
        navigateToProfileClient={() =>
          navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_INFORMATION)
        }
        navigateToFavourites={() =>
          navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_FAVOURITES, {
            restaurants: user?.favourites
          })
        }
      />
  );
}
