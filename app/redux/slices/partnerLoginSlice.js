import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login } from '../../networking/api/endpoints/AuthPartnerWS'

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  token: null,
  user: null,
  error: null
}

export const loginPartner = createAsyncThunk(
  'partner/login',
  async ({email, password}, thunkAPI) => {
    return await login(email, password);
  }
);

export const partnerLoginSlice = createSlice({
  name: 'partnerLogin',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginPartner.pending, (state, action) => {
      state.isLoading = true;
      state.isLoggedIn = false;
    })
    .addCase(loginPartner.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.error=null;
      state.token = action.payload.token;
      state.user = action.payload.subject;
      console.log(action.type);
    }) 
    .addCase(loginPartner.rejected, (state, action) => {
      state.isLoading = false;
      state.error = 'Credenciales inválidas';
      state.isLoggedIn = false;
      console.log(action.type.timeout);
    })
  }
})

export default partnerLoginSlice.reducer