import React, { useEffect, useState } from 'react';
import NewRestaurantScreen2UI from './NewRestaurantScreen2UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { InitialDaysScreen } from './DaysScreen.data';
import { useDispatch, useSelector } from 'react-redux';
import { createRestaurants } from '../../../redux/slices/newRestaurantsSlice';
import Toast from 'react-native-simple-toast';
import moment from 'moment';


export default function NewRestaurantScreen2({ navigation, route }) {
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

  useEffect(() => {
    if (status === 'succeeded') {
      Toast.show('Register exitoso');
      navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT);
    }
    if (status === 'failed') {
      Toast.show('Hubo un problema al realizar la carga de restaurant');
    }
  }, [status]);

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
      "businessHours": hours,
      "name": form.name,
      "type": selected.label,
      "priceRange": valuePriece,
      "photos": form.imageRest,
      "active": form.isClosed
    }));
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
  )
};
