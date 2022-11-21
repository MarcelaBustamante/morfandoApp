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
import HomeResto from '../ui/screens/homeRestaurant/HomeResto';
import NewResto from '../ui/screens/restaurante/NewRestaurantScreen1';
import ProfileScreen from '../ui/screens/profile/ProfileScreen';
import UserSetScreen from '../ui/screens/userSetting/UserSetScreen';
import NewResto2 from '../ui/screens/restaurante/NewRestaurantScreen2';
import NewMealScreen from '../ui/screens/restaurante/NewMealScreen';
import MenuViewOwnerScreen from '../ui/screens/menu/MenuViewOwnerScreen';

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
         <Stack.Screen
          name={NavigatorConstant.LANDING_STACK.RESTAURANT}
          component={HomeResto}
        />
         <Stack.Screen
          name={NavigatorConstant.LANDING_STACK.NEW_RESTAURANT}
          component={NewResto}
        />
        <Stack.Screen
          name={NavigatorConstant.PROFILE_STACK.PROFILE}
          component={ProfileScreen}
        />
        <Stack.Screen
          name={NavigatorConstant.PROFILE_STACK.INFORMATION}
          component={UserSetScreen}
        />
        <Stack.Screen
          name={NavigatorConstant.NEW_RESTAURANT_STACK.SCREEN_2}
          component={NewResto2}
        />
        <Stack.Screen
          name={NavigatorConstant.NEW_RESTAURANT_STACK.NEW_MEAL}
          component={NewMealScreen}
        />
        <Stack.Screen
          name={NavigatorConstant.LANDING_STACK.RESTAURANT_DETAILS}
          component={MenuViewOwnerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
