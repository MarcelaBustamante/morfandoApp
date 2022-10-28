import React, { useReducer } from 'react';
import LoginUserScreenUI from './LoginUserScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { login } from '../../../networking/api/login';
import { loginReducer, initialState } from "../../../redux/loginReducer";


export default function LoginScreen() {
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
          <LoginUserScreenUI
          /> 
    </KeyboardAwareScrollView>
  )};
