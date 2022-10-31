import React, { useReducer } from 'react';
import LoginScreenUI from './LoginScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { login } from '../../../networking/api/login';
import { loginReducer, initialState } from "../../../redux/loginReducer";
import NavigatorConstant from '../../../navigation/NavigatorConstant';


export default function LoginScreen({navigation}) {
  welcomeString = 'Bienvenido a Morfando';
  const [loginState, loginDispatch] = useReducer(loginReducer, initialState);
  const { username, password, isLoading, error, isLoggedIn } = loginState;

  const loginHandler = async (e)=>{
    e.preventDefault();
    loginDispatch({ type: "login" });
    try {
      await login({ username, password });
      loginDispatch({ type: "success" });
      console.log('success')
    } catch (error) {
       loginDispatch({ type: "failure" });
      console.log('error')
    }
  }

  return (
    <KeyboardAwareScrollView>
          <LoginScreenUI
          username={username}
          password={password}
          isLoggedIn={isLoggedIn}
          loginHandler={loginHandler}
          error={error}
          loginDispatch={loginDispatch}
          navigateToClient={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGINUSER) }
          navigateToRegister={()=> navigation.navigate(NavigatorConstant.LOGIN_STACK.REGISTER)}
          /> 
    </KeyboardAwareScrollView>
  )};
