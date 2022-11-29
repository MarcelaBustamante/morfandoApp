import React from 'react';
import NewMealScreenUI from './NewMealScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useFormik } from 'formik';
import { initialValues, validationSchemma } from './MenuScreen.data';

export default function NewMealScreen({navigation,route}) {
  welcomeString = 'Bienvenido a Morfando';
  const { restaurant } = route.params;

  const loginHandler = () => {
    console.log("Este ese el resto de parametro",restaurant);
  }
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchemma(),
    validateOnChange: false,
    onSubmit: async (formValue) =>{
      console.log(formValue);
      navigation.navigate(NavigatorConstant.NEW_RESTAURANT_STACK.SCREEN_2,{form: formValue});
    }
  });
  return (
    <KeyboardAwareScrollView>
          <NewMealScreenUI
            navigateToHomeResto={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT)}
            loginHandler={loginHandler}
            formik={formik}
            /> 
    </KeyboardAwareScrollView>
  )};
