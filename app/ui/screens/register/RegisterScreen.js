import React, { useState } from 'react';
import RegisterScreenUI from './RegisterScreenUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useDispatch } from 'react-redux';
import { registerPartner } from '../../../redux/slices/partnerRegisterSlice';

export default function RegisterScreen({navigation}) {
  const dispatch = useDispatch();
  const { isLoading, error, success } = useSelector(state => state.partnerRegister);
  welcomeString = 'Bienvenido a Morfando';
  const [registerPartnerInfo, setRegisterPartnerInfo] = useState({
    email: "",
    lastName: "",
    name: "",
    password: "",
    password2:"",
    profilePicture: ""
  });

  const registerHandler = function (e){
    e.preventDefault();
    dispatch(registerPartner(registerPartnerInfo));
  }
  return (
    <KeyboardAwareScrollView>
          <RegisterScreenUI
            formState={registerPartnerInfo}
            setFormState={setRegisterPartnerInfo}
            navigateToClient={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGIN) }
            registerHandler={registerHandler}
            error={error}
          /> 
    </KeyboardAwareScrollView>
  )};
