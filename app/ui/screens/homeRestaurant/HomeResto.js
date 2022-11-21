import React, { useReducer } from 'react';
import HomeRestoUI from './HomeRestoUI';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useDispatch, useSelector } from 'react-redux';
import { getListRestaurants } from '../../../redux/slices/restaurantsSlice';
import { useEffect } from 'react';
import { Text } from 'react-native';


export default function HomeResto({navigation}) {
  welcomeString = 'Bienvenido a Morfando';
  const { status, restaurants } = useSelector(state => state.restaurants);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getListRestaurants());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <Text>Cargando...</Text>
    );
  }
  return (
      <HomeRestoUI
      restaurants={restaurants}
      navigateToProfile={() => navigation.navigate(NavigatorConstant.PROFILE_STACK.PROFILE)}
      navigateToNewResto={() => navigation.navigate(NavigatorConstant.LANDING_STACK.NEW_RESTAURANT)}
      navigateMenuOwner={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT_DETAILS)}/>
  )};
