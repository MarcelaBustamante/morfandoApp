import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigatorConstant from './NavigatorConstant';
import LoginPartner from '../ui/screens/loginPartner/LoginScreen';
import LoginUserScreen from '../ui/screens/loginUser/LoginUserScreen';
import RegisterScreen from '../ui/screens/register/RegisterScreen';
import ChangePasswordScreen from '../ui/screens/changePassword/ChangePasswordScreen';
import AskMail from '../ui/screens/forgotPassword/AskMail';
import AskToken from '../ui/screens/forgotPassword/AskToken';


const Stack = createNativeStackNavigator();

export default RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={NavigatorConstant.NAVIGATOR.LOGIN}
        screenOptions={{headerShown: false}}
       >
        <Stack.Screen
          name={NavigatorConstant.NAVIGATOR.LOGIN}
          component={LoginPartner}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigatorConstant.NAVIGATOR.LOGINUSER}
          component={LoginUserScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={NavigatorConstant.LOGIN_STACK.REGISTER}
          component={RegisterScreen}
        />
        <Stack.Screen
          name={NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY}
          component={AskMail}
        />
        <Stack.Screen
          name={NavigatorConstant.PASSWORD_STACK.ASKTOKEN}
          component={AskToken}
        />
        <Stack.Screen
          name={NavigatorConstant.PASSWORD_STACK.CHANGE_PASSWORD}
          component={ChangePasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
