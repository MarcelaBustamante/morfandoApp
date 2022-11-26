import React from 'react';
import LoginUserScreenUI from './LoginUserScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

export default function LoginScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';
  GoogleSignin.configure({
    webClientId: '163501080359-ecr6qqkja70nn1tjcklirq8l672gdc7c.apps.googleusercontent.com',
    offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
    forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  });  
  _signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      Alert.alert(`Sign in ok ${userInfo.user}`);
      console.log(JSON.stringify(userInfo));
      navigation.navigate(NavigatorConstant.PROFILE_STACK.INFORMATION);
    } catch (error) {
      const typedError = error;

      switch (typedError.code) {
        case statusCodes.SIGN_IN_CANCELLED:
          // sign in was cancelled
          Alert.alert('cancelled');
          break;
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          Alert.alert('in progress');
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // android only
          Alert.alert('play services not available or outdated');
          break;
        default:
          Alert.alert('Something went wrong', typedError.toString());
          this.setState({
            error: typedError,
          });
      }
    }
  };
  
  return (
    <KeyboardAwareScrollView>
          <LoginUserScreenUI
          navigateToPartner={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGIN)}
          _signIn={_signIn}
          /> 
    </KeyboardAwareScrollView>
  )};
