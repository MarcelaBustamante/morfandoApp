import React from 'react';
import LoginScreenUI from './LoginScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useDispatch, useSelector } from 'react-redux';
import { loginPartner } from '../../../redux/slices/partnerLoginSlice';

export default function LoginScreen({navigation}) {
  const dispatch = useDispatch();
  welcomeString = 'Bienvenido a Morfando';
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const { isLoading, error, isLoggedIn } = useSelector(state => state.partnerLogin);
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginPartner({email: username, password}));
  };
  return (
    <KeyboardAwareScrollView>
      <LoginScreenUI
        isLoggedIn={isLoggedIn}
        error={error}
        loginHandler={loginHandler}
        navigateToClient={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGINUSER) }
        navigateToRegister={()=> navigation.navigate(NavigatorConstant.LOGIN_STACK.REGISTER)}
        navigateToRecovery={()=> navigation.navigate(NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY)}
        username={username}
        onChangeUsername={onChangeUsername}
        password={password}
        onChangePassword={onChangePassword}
      /> 
    </KeyboardAwareScrollView>
  )};
