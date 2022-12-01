import React from 'react';
import UserSetScreenClientUI from './UserSetScreenClientUI';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import NavigatorConstant from '../../../navigation/NavigatorConstant';
import { useDispatch, useSelector } from 'react-redux';
import { updateClient } from '../../../redux/slices/clientSlice';

export default function UserSetScreen({ navigation }) {
  welcomeString = 'Bienvenido a Morfando';
  const dispatch = useDispatch();
  const { user,isLoading } = useSelector(state => state.client);
  const handleNavigateToProfile = () => {
    navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_INFORMATION)
  }
  const loginHandler = () => {
    console.log("Hola mundo");
  }

  // { name, lastName, pictures }
  const handleSaveProfileInformation = async (informacion) => {
    await dispatch(updateClient({ ...informacion, email: user.email }));
    handleNavigateToProfile();
  }

  return (
    <KeyboardAwareScrollView>
      <UserSetScreenClientUI
        navigateToProfile={handleNavigateToProfile}
        navigateToChangePassword={() => navigation.navigate(NavigatorConstant.CLIENT_STACK.CLIENT_CHANGE_PASSWORD)}
        navigateToLoginClient={() => navigation.navigate(NavigatorConstant.NAVIGATOR.LOGINUSER)}
        loginHandler={loginHandler}
        user={user}
        saveLoading={isLoading}
        onSaveProfileInformation={handleSaveProfileInformation} />
    </KeyboardAwareScrollView>
  )
};
