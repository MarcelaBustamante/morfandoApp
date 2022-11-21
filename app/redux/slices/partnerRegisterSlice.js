import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login, registerPartnerAPI } from '../../networking/api/endpoints/AuthPartnerWS'

const initialState = {
  isLoading: false,
  error: null,
  success: null
}


export const registerPartner = createAsyncThunk(
  'partner/register',
  async ({email, name, lastName, password, profilePicture}, thunkAPI) => registerPartnerAPI(email, name, lastName, password, profilePicture)
);

export const partnerRegisterSlice = createSlice({
  name: 'partnerRegister',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(registerPartner.pending, (state, action) => {
      state.isLoading = true;
      state.error = null,
      state.success = null;
    })
    .addCase(registerPartner.fulfilled, (state, action) => {
      state.isLoading = false;
      state.success = true;
    }) 
    .addCase(registerPartner.rejected, (state, action) => {
      state.isLoading = false;
      state.error = 'Error en registro';
      state.success = false;
    })
  }
});

export default partnerRegisterSlice.reducer