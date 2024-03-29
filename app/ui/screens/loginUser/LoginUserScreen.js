import React, { useEffect } from 'react';
import LoginUserScreenUI from './LoginUserScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { clientLogin } from '../../../redux/slices/clientLoginSlice';

export default function LoginScreen({ navigation }) {

  const { error, isLoggedIn, isLoading, userId, firstLogin } = useSelector(state => state.clientLogin);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isLoggedIn) {
      console.log('Fist login...',firstLogin);
      // if (!firstLogin) {
      //   navigation.navigate(NavigatorConstant.CLIENT_STACK.REGISTER_CLIENT);
      // } else {
        navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_NEAR_BY, {});
      //}
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (error) {
      Alert.alert("Error de autenticación");
      console.log("Error de autenticación", error);
    }
  }, [error]);

  _signIn = async () => {
    dispatch(clientLogin());
  };

  return (
    <KeyboardAwareScrollView>
      <LoginUserScreenUI
        navigateToPartner={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGIN)}
        navigateToClientRegister={() => navigation.navigate(NavigatorConstant.CLIENT_STACK.REGISTER_CLIENT)}
        _signIn={_signIn}
        isLoading={isLoading}
      />
    </KeyboardAwareScrollView>
  )
};
