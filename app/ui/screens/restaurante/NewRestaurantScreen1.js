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
  { label: 'Mendoza', value: '3' },
  { label: 'Santa Fé', value: '4' },
  { label: 'San Juan', value: '5' },
  { label: 'Santiago del Estero', value: '6' },
];
const dataLocation = [
  { label: 'Quilmes', value: '7' },
  { label: 'Florencio Varela', value: '8' },
  { label: 'San Isidro', value: '9' },
  { label: 'Capital Federal', value: '10' },
  { label: 'Lanús', value: '11' },
];
const dataNeighborhood = [
  { label: 'Belgrano', value: '1' },
  { label: 'Palermo', value: '2' },
  { label: 'Recoleta', value: '3' },
  { label: 'Boedo', value: '4' },
];


  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema: validationSchemma(),
    validateOnChange: false,
    onSubmit: async (formValue) =>{
      console.log(formValue);
      navigation.navigate(NavigatorConstant.NEW_RESTAURANT_STACK.SCREEN_2);
    }
  })
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
