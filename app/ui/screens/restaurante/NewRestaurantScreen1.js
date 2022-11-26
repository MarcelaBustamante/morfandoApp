import React from 'react';
import NewRestaurantScreen1UI from './NewRestaurantScreen1UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useFormik } from 'formik';
import { initialValues, validationSchemma } from './RestaurantScreen.data';
export default function NewRestaurantScreen1({navigation}) {
  
const dataCountry = [
  { label: 'Argetina', value: '1' },
];
const dataProvince = [
  { label: 'Buenos Aires', value: '2' },
];
const dataLocation = [
  { label: 'Capital Federal', value: '3' },
];
const dataNeighborhood = [
  { label: 'Belgrano', value: '1' },
  { label: 'Palermo', value: '2' },
  { label: 'Recoleta', value: '3' },
  { label: 'Boedo', value: '4' },
];


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
          <NewRestaurantScreen1UI
            navigateToHomeResto={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT)}
           formik={formik}
           dataCountry={dataCountry}
           dataNeighborhood={dataNeighborhood}
           dataLocation={dataLocation}
           dataProvince={dataProvince}
          /> 
    </KeyboardAwareScrollView>
  )};
