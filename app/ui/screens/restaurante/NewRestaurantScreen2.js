import React, { useState } from 'react';
import NewRestaurantScreen2UI from './NewRestaurantScreen2UI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { InitialDaysScreen } from './DaysScreen.data';
import { useDispatch, useSelector } from 'react-redux';
import { createRestaurants } from '../../../redux/slices/newRestaurantsSlice';


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
    const { error, isLoading } = useSelector(state => state.restaurant);

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
      form.businessHours = businessHours.filter((day)=>day.active === true);
      form.isClosed = checked;
      form.priceRange = valuePriece;
      form.type = selected.label;
      console.log('Fusion',form);
      dispatch(createRestaurants(form));
      console.log("error", isLoading);
      console.log("error", error);
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
            />
    </KeyboardAwareScrollView>
  )};
