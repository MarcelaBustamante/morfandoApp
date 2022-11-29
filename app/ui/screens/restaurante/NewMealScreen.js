import React from 'react';
import NewMealScreenUI from './NewMealScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useFormik } from 'formik';
import { initialValues, validationSchemma } from './MenuScreen.data';
import { useDispatch, useSelector } from 'react-redux';


export default function NewMealScreen({navigation,route}) {
  welcomeString = 'Bienvenido a Morfando';
  const { restaurant } = route.params;
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchemma(),
    validateOnChange: false,
    onSubmit: async (formValue) =>{
      console.log("datos de plato",formValue);
      dispatch(createMeal(formValue));
      navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT);
    }
  });

  return (
    <KeyboardAwareScrollView>
          <NewMealScreenUI
            formik={formik}
            restaurant={restaurant}
            navigateToHome={()=>navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT)}
            /> 
    </KeyboardAwareScrollView>
  )};
