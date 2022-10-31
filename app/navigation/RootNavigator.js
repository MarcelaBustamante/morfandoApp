import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NavigatorConstant from './NavigatorConstant';
import LoginPartner from '../ui/screens/loginPartner/LoginScreen';
import LoginUserScreen from '../ui/screens/loginUser/LoginUserScreen';
import RegisterScreen from '../ui/screens/register/RegisterScreen'


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
      </Stack.Navigator>
    </NavigationContainer>
  );
};
