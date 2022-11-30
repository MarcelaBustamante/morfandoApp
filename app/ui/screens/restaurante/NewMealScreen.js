import React, { useState } from 'react';
import NewMealScreenUI from './NewMealScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useFormik } from 'formik';
import { initialValues, validationSchemma } from './MenuScreen.data';
import { useDispatch } from 'react-redux';
import { createMeal } from '../../../redux/slices/newRestaurantsSlice';

export default function NewMealScreen({ navigation, route }) {
  welcomeString = 'Bienvenido a Morfando';
  const { restaurant } = route.params;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchemma(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      console.log("Datos del formulario .....", formValue);
      dispatch(createMeal({ formValue, restoId: restaurant.id }));
      navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT_DETAILS);
    }
  });

  return (
    <KeyboardAwareScrollView>
          <NewMealScreenUI
            formik={formik}
            restaurant={restaurant}
            navigateToResto={()=>navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT_DETAILS)}
            /> 
    </KeyboardAwareScrollView>
  )
};
