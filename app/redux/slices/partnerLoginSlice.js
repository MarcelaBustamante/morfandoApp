import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setClientToken } from '../../networking/api/Api';
import { login } from '../../networking/api/endpoints/AuthWS'

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
)

export const getListResto = createAsyncThunk(
  'user/restaurants',
   async () => {
    
   })

export const partnerLoginSlice = createSlice({
  name: 'partnerLogin',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginPartner.pending, (state, action) => {
      state.isLoading = true;
    })
    .addCase(loginPartner.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.subject;
      setClientToken(state.token);
    }) 
    .addCase(loginPartner.rejected, (state, action) => {
      state.isLoading = false;
      state.error = 'Credenciales inválidas';
      state.isLoggedIn = false;
    })
  }
})

export default partnerLoginSlice.reducer