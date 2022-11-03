import React, { useReducer } from 'react';
import HomeRestoUI from './HomeRestoUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useDispatch, useSelector } from 'react-redux';
import { restaurants } from '../../../redux/slices/restaurantsSlice';


export default function HomeResto({navigation}) {
  welcomeString = 'Bienvenido a Morfando';
  const dispatch = useDispatch();

  const getListResto = ()=>{

  }
  return (
    <KeyboardAwareScrollView>
          <HomeRestoUI
          navigateToNewResto={() => navigation.navigate(NavigatorConstant.LANDING_STACK.NEW_RESTAURANT)}
          navigateToProfile={()=> navigation.navigate(NavigatorConstant.DRAWER_SCREEN.PROFILE)} />
    </KeyboardAwareScrollView>
  )};
