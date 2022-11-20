import React from 'react';
import ProfileScreenUI from './ProfileScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { logoutPartner } from '../../../redux/slices/partnerLoginSlice';
import { useDispatch } from 'react-redux';


export default function ProfileScreen({ navigation }) {
  welcomeString = 'Bienvenido a Morfando';
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutPartner());
    navigation.navigate(NavigatorConstant.NAVIGATOR.LOGIN);
  }
  return (
    <KeyboardAwareScrollView>
      <ProfileScreenUI
        navigateToHomeResto={() => navigation.navigate(NavigatorConstant.LANDING_STACK.RESTAURANT)}
        navigateToPersonalInfo={() => navigation.navigate(NavigatorConstant.PROFILE_STACK.INFORMATION)}
        navigateToLoginPartner={logout} />
    </KeyboardAwareScrollView>
  )
};
