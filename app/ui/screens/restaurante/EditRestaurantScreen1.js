import React, { useState }  from 'react';
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
import Toast from 'react-native-simple-toast';
import moment from 'moment';

export default function EditRestaurantScreen1({navigation, route}) {
  const {restaurant}  = route.params;
  const dispatch = useDispatch();
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

  const [businessHours, setBusinessHours] = useState(
    InitialDaysScreen
  );
  const [selected, setSelected] = useState([]); //dropdown menu tags
  const [valuePriece, setValuePriece] = useState(1);
  const { isLoading, status } = useSelector(state => state.restaurant);
  const [checked, setChecked] = useState(false);
  const [name, setName] = useState(restaurant.name);
  const [street, setStreet] = useState(restaurant.address.street);
  const [number, setNumber] = useState(restaurant.address.number);
  const [pictures, setPictures] = useState([]);

  welcomeString = 'Bienvenido a Morfando';

  const formik = useFormik({
     initialValues: initialValues(),
     validateOnChange: false,
     onSubmit: async (formValue) =>{
      dispatch(updateRestaurant({ formValue, restoId: restaurant.id }));
      console.log("el formulario: ", formValue)
       navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT_DETAILS, { restaurant });
     }
   });
 

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
  const onRestaurantSubmit = (e) => {
    e.preventDefault();
    const hours = businessHours
      .filter(day => day.active === true)
      .map((day) => {
        return {
          dayOfWeek: day.dayOfWeek,
          fromTime: moment(day.fromTime).format('HH:mm:ss'),
          toTime: moment(day.toTime).format('HH:mm:ss')
        }
      });
    dispatch(updateRestaurant({
      "address": {
        "latitude": restaurant.latitude,
        "longitude": restaurant.longitude,
        "street": street,
        "number": number,
        "neighborhood": restaurant.neighborhood,
        "city": restaurant.province,
        "province": restaurant.province,
        "latitudeDelta": restaurant.latitudeDelta,
        "longitudeDelta": restaurant.longitudeDelta
      },
      "businessHours": hours,
      "name": name,
      "type": restaurant.type,
      "priceRange": valuePriece,
      "photos": restaurant.photos,
      "active": !checked
    }, restaurant.id));
  };




  return (
    <KeyboardAwareScrollView>
          <EditRestaurantScreen1UI
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
            onRestaurantSubmit={onRestaurantSubmit}
            isLoading={isLoading}
            formik= {formik}
            restaurant={restaurant}
            name={name}
            street={street}
            number={number}
            pictures={pictures}
            setName={setName}
            setStreet={setStreet}
            setNumber={setNumber}
            setPictures={setPictures}
            /> 
    </KeyboardAwareScrollView>
  )};
