import React, { useState } from 'react';
import RegisterClientScreenUI from './RegisterClientScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useFormik } from 'formik';
import { initialValues, validationSchemma } from './RegisterClientScreen.data';
import NavigatorConstant from '../../../navigation/NavigatorConstant';

export default function RegisterClientScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';
  const loginHandler = () => {
    console.log("Hola mundo");
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchemma(),
    validateOnChange: false,
    onSubmit: async (formValue) =>{
      console.log(formValue);
      navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_NEAR_BY,{form: formValue});
    }
  });

  return (
    <KeyboardAwareScrollView>
      <RegisterClientScreenUI
            formik={formik}
            loginHandler={loginHandler}
            navigateToClientNearBy ={() => navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_NEAR_BY)}
            navigateToClient ={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGINUSER)}
            /> 
    </KeyboardAwareScrollView>
  )
};
