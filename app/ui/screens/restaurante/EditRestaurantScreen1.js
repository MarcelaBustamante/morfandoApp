import React, { useState } from "react";
import EditRestaurantScreen1UI from './EditRestaurantScreen1UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useFormik } from 'formik';
import { initialValues, validationSchemma } from './RestaurantScreen.data';
import { useEffect } from "react";
import { getRestoAPI } from "../../../networking/api/endpoints/restaurantsWS";

export default function EditRestaurantScreen1({navigation,route}) {
  
  const {restaurant} = route.params;
  console.log("soy el resto del route ", restaurant)
  const [restoData, setRestoData] = useState(null);  

  const getdataresto = async () => {
    const restodata = await getRestoAPI(restaurant.id)
    console.log("estos son los datos", restodata)
    setRestoData(restodata);
  }

  useEffect(() =>{
    getdataresto();
  },[]) 

  welcomeString = 'Bienvenido a Morfando';

  const dataCountry = [
    { label: 'Argentina', value: '1' },
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

  const loginHandler = () => {
    console.log("Hola mundo");
  }

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    onSubmit: async (formValue) =>{
      console.log(formValue);
      navigation.navigate(NavigatorConstant.EDIT_RESTAURANT_STACK.EDIT_SCREEN_2,{form: formValue});
    }
  });

  return (
    <KeyboardAwareScrollView>
          <EditRestaurantScreen1UI
            navigateToMenuOwner={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT_DETAILS, {restaurant})}
            formik={formik}
            loginHandler={loginHandler}
            dataCountry={dataCountry}
            dataNeighborhood={dataNeighborhood}
            dataLocation={dataLocation}
            dataProvince={dataProvince}
            restaurant={restaurant}
            /> 
    </KeyboardAwareScrollView>
  )};
