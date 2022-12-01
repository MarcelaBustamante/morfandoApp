import React, { useLayoutEffect } from 'react';
import MenuViewOwnerScreenUI from './MenuViewOwnerScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useDispatch, useSelector } from 'react-redux';
import { getMeal } from '../../../redux/slices/newRestaurantsSlice';

export default function MenuViewOwnerScreen({ navigation, route }) {
  welcomeString = 'Bienvenido a Morfando';
  const { restaurant } = route.params;
  console.log("Menu de Restaurant " + restaurant?.name);
  const { statusMeal, restaurantMeals } = useSelector(state => state.restaurant);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    if (statusMeal === 'idle') {
      dispatch(getMeal(restaurant.id));
    }
  })
  return (
    <MenuViewOwnerScreenUI
      categoryMeals={restaurantMeals}
      navigateToHome={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT)}
      onCreateMenu={() => navigation.navigate(NavigatorConstant.NEW_RESTAURANT_STACK.NEW_MEAL, { restaurant })}
      navigateToEditScreen1={() => navigation.navigate(NavigatorConstant.EDIT_RESTAURANT_STACK.EDIT_SCREEN_1)}
      navigateToMenuOwner={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT_DETAILS)}
    />
  )
};
