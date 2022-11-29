import React from 'react';
import ProfileScreenUI from './ProfileScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../redux/Store';


export default function ProfileScreen({ navigation }) {
  welcomeString = 'Bienvenido a Morfando';
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userLogout());
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
