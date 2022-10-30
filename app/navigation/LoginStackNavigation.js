import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginPartner from '../ui/screens/loginPartner/LoginScreen';
import NavigatorConstant from './NavigatorConstant';

const Stack = createNativeStackNavigator();
export default LoginNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={NavigatorConstant.LOGIN_STACK.LOGIN}>
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.LOGIN}
        component={LoginPartner}
       // options={{title: I18n.t(TextKey.login)}}
      />
{/* 
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.PASSWORD_RECOVERY}
        component={PasswordRecovery}
        options={{
          statusBarHidden: false,
          statusBarColor: Theme.colors.SECONDARY,
          title: I18n.t(TextKey.showRecoveryPassword),
          presentation: 'containedModal',
        }}
      />
      <Stack.Screen
        name={NavigatorConstant.LOGIN_STACK.REGISTER}
        component={Register}
        initialParams={{name: I18n.t(TextKey.showRegister)}}
        options={({route}) => ({
          title: route.params.name,
          animation: 'fade',
        })}
      /> */}
    </Stack.Navigator>
  );
};