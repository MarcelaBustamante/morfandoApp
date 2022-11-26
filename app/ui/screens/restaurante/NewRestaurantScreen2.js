import React, { useState } from 'react';
import NewRestaurantScreen2UI from './NewRestaurantScreen2UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { InitialDaysScreen } from './DaysScreen.data';
import { useDispatch, useSelector } from 'react-redux';
import { createRestaurants } from '../../../redux/slices/newRestaurantsSlice';
import moment from 'moment';


export default function NewRestaurantScreen2({navigation, route}) {
  const { form } = route.params;
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
    const [checked, setChecked] = useState(true); //cerrar temporalmente
    const { error, isLoading, status } = useSelector(state => state.restaurant);

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
    const onRestaurantSubmit = () => {
      form.businessHours = businessHours
        .filter(day => day.active === true)
        .map((day)=>{
          day.fromTime= moment(day.fromTime).format('hh:mm:ss');
          day.toTime= moment(day.toTime).format('hh:mm:ss');
          return day;
        });
      dispatch(createRestaurants({
          "address": {
              "latitude": form.location?.latitude,
              "longitude": form.location?.longitude,
              "street": form.street,
              "number": form.number,
              "neighborhood": form.neighborhood,
              "city": form.province,
              "province": form.province,
              "latitudeDelta": form.location.latitudeDelta,
              "longitudeDelta": form.location.longitudeDelta
          },
          "businessHours": form.businessHours,
          "name": form.name,
          "type": selected.label,
          "priceRange": valuePriece,
          "photos": form.imageRest,
          "active": form.isClosed
      }));
      if ( status === 'succeeded') {
        Toast.show('Register exitoso');
        navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT);
      } else{
        Toast.show('Hubo un problema al realizar la carga de restaurant');
      }
    };
  
  return (
    <KeyboardAwareScrollView>
          <NewRestaurantScreen2UI
            navigateToNewResto={() => navigation.navigate(NavigatorConstant.LANDING_STACK.NEW_RESTAURANT)}
            navigateToNewMeal={() => navigation.navigate(NavigatorConstant.NEW_RESTAURANT_STACK.NEW_MEAL)}
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
            />
    </KeyboardAwareScrollView>
  )};
