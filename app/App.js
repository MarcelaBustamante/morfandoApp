/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import RootNavigator from './navigation/RootNavigator';
import { store } from './redux/Store'
import { Provider } from 'react-redux'
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { config } from './config/config';

GoogleSignin.configure({
  webClientId: config.GOOGLE_API_KEY,
  offlineAccess: true,
  forceCodeForRefreshToken: true
});

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

   return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  );
};
export default App;
