import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUserProfile, updateUser } from '../../networking/api/endpoints/authClientWS';

const initialState = {
    isLoading: false,
    user: null,
    error: null
  }
  
  export const clientProfile = createAsyncThunk(
    'client/profile',
    async ({userId}) => {
      return await getUserProfile(userId);
    }
  );

  export const updateClient = createAsyncThunk(
    'cliente/update',async (form) =>{
      return await updateUser(form);
    }
  )
  
  const clientSlice = createSlice({
    name: 'client',
    initialState,
    extraReducers: (builder) => {
      builder.addCase(clientProfile.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(clientProfile.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
        console.log(action.type);
      }) 
      .addCase(clientProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Error obteniendo datos de usuario';
        console.log(action.type);
      })
      .addCase(updateClient.pending, (state, action) => {
        state.isLoading = true;
      }) 
      .addCase(updateClient.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.user = action.payload;
        console.log(action.type);
      }) 
      .addCase(updateClient.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Error obteniendo datos de usuario';
        console.log(action.type);
      })
    }
  });
  

  export default clientSlice.reducer;