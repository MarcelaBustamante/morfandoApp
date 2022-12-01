import React from 'react';
import MenuViewClientScreenUI from './MenuViewClientScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCategorizedMenuItems } from '../../../redux/slices/clientRestaurantsSlice';
import NavigatorConstant from '../../../navigation/NavigatorConstant';


export default function MenuViewOwnerScreen({navigation, route}) {
  const {restaurant} = route.params;
  const dispatch = useDispatch();
  const {menuItems, isLoading} = useSelector(state => state.clientRestaurants);

  useEffect(() => {
    if (restaurant) {
      dispatch(getCategorizedMenuItems(restaurant.id));
    }
  }, [navigation]);

  return (
      <MenuViewClientScreenUI restaurant={restaurant} menuItems={menuItems} isLoading={isLoading}
      navigateToMealDescription={() => navigation.navigate(NavigatorConstant.CLIENT_STACK.MEAL_DESCRIPTION_CLIENT)}
      navigateToComment={() => navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_COMMENT)}
      navigateToClientNearBy={() => navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_NEAR_BY)}
      /> 
  )};