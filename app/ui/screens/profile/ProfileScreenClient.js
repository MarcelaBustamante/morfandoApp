import React from 'react';
import ProfileScreenClientUI from './ProfileScreenClientUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useDispatch } from 'react-redux';
import { userLogout } from '../../../redux/Store';


export default function ProfileScreenClient({ navigation }) {
  welcomeString = 'Bienvenido a Morfando';
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(userLogout());
    navigation.navigate(NavigatorConstant.NAVIGATOR.LOGINUSER);
  }
  return (
    <KeyboardAwareScrollView>
      <ProfileScreenClientUI
        navigateToPersonalInfo={() => navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_INFORMATION_SETTINGS)}
        navigateToClientNearBy ={() => navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_NEAR_BY)}
        navigateToLoginClient={logout} />
    </KeyboardAwareScrollView>
  )
};
