import React, { useState } from "react";
import EditRestaurantScreen1UI from './EditRestaurantScreen1UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useFormik } from 'formik';
import { initialValues, validationSchemma } from './RestaurantScreen.data';
import { useEffect } from "react";
import { getRestoAPI } from "../../../networking/api/endpoints/restaurantsWS";
import { useDispatch, useSelector } from 'react-redux';
import { updateRestaurant } from "../../../redux/slices/newRestaurantsSlice";
import { InitialDaysScreen } from './DaysScreen.data';

export default function EditRestaurantScreen1({navigation,route}) {
  const dispatch = useDispatch();
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

  const dataPrice = [
    { label: '$', value: '1' },
    { label: '$$', value: '2' },
    { label: '$$$', value: '3' },
  ];
  const restaurantType = [
    { label: 'ALEMANA', value: '1' },
    { label: 'ARGENTINA', value: '2' },
    { label: 'ARMENIA', value: '3' },
    { label: 'CHINA', value: '4' },
    { label: 'INDIA', value: '5' },
    { label: 'JAPONESA', value: '6' },
    { label: 'NORTEAMERICANA', value: '7' },
    { label: 'PERUANA', value: '8' },
  ];
  const changeSingleBusinessHour = (dayOfWeek, attr, newValue) => {
    return setBusinessHours(businessHours => {
      return businessHours.map(businessHour => {
        if (businessHour.dayOfWeek === dayOfWeek) {
          return { ...businessHour, [attr]: newValue };
        }
        return businessHour;
      });
    });
  };
  const [businessHours, setBusinessHours] = useState(
    InitialDaysScreen
  );
  const [selected, setSelected] = useState([]); //dropdown menu tags
  const [valuePriece, setValuePriece] = useState(1);
  const [checked, setChecked] = useState(true);
 const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    onSubmit: async (formValue) =>{
      console.log(formValue);
      navigation.navigate(NavigatorConstant.EDIT_RESTAURANT_STACK.EDIT_SCREEN_2,{form: formValue});
    }
  });

const handleNavegationScreen2 = () => {
  navigation.navigate(NavigatorConstant.EDIT_RESTAURANT_STACK.EDIT_SCREEN_2,{form: formValue});
}
const handleSaveRestaurantInformation = async (informacion) => {
  await dispatch(updateRestaurant({ ...informacion, restoid: restaurant.id }));
  handleNavegationScreen2();
}



  return (
    <KeyboardAwareScrollView>
          <EditRestaurantScreen1UI
            navigateToMenuOwner={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT_DETAILS, {restaurant})}
            loginHandler={loginHandler}
            dataCountry={dataCountry}
            dataNeighborhood={dataNeighborhood}
            dataLocation={dataLocation}
            dataProvince={dataProvince}
            restaurant={restaurant}
            formik= {formik}
            dataPrice={dataPrice}
            dataTypeFood={restaurantType}
            businessHours={businessHours}
            selected={selected}
            setSelected={setSelected}
            valuePriece={valuePriece}
            setValuePriece={setValuePriece}
            checked={checked}
            setChecked={setChecked}
            changeSingleBusinessHour={changeSingleBusinessHour}
            handleNavegationScreen2={handleNavegationScreen2}
            handleSaveRestaurantInformation={handleSaveRestaurantInformation}
            /> 
    </KeyboardAwareScrollView>
  )};
