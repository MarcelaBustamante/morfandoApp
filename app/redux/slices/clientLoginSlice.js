import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login } from '../../networking/api/endpoints/authClientWS';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import { config } from '../../config/config';

GoogleSignin.configure({
  webClientId: config.GOOGLE_API_KEY,
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
});

const initialState = {
    isLoggedIn: false,
    isLoading: false,
    token: null,
    userId: null,
    error: null
  }
  
  export const clientLogin = createAsyncThunk(
    'client/login',
    async () => {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("Google device oauth result", userInfo);
      return await login(userInfo.idToken);
    }
  );
  
  const clientLoginSlice = createSlice({
    name: 'clientLogin',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(clientLogin.pending, (state, action) => {
        state.isLoading = true;
        state.isLoggedIn = false;
      })
      .addCase(clientLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
        state.token = action.payload.token;
        state.userId = action.payload.user;
        console.log(action.type);
      }) 
      .addCase(clientLogin.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Error de autenticación';
        state.isLoggedIn = false;
        console.log('loginUser.rejected', action);
      })
    }
  });
  

  export default clientLoginSlice.reducer;