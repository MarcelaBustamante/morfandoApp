import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getListRestoAPI } from '../../networking/api/endpoints/AuthPartnerWS'

const initialState = {
  restaurants:[],
  error: null,
  status: 'idle'
}

export const getListRestaurants = createAsyncThunk(
  'restaurants',
  async () => {
    return await getListRestoAPI();
  }
)

export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getListRestaurants.pending, (state, action) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(getListRestaurants.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.restaurants = action.payload;
      console.log(action.type);
      console.log("Restaurants in state", state.restaurants?.length);
    }) 
    .addCase(getListRestaurants.rejected, (state, action) => {
      state.status = 'failed';
      state.error = 'Hubo un error en la carga de restaurants';
      console.log(action.type);
    })
  }
})

export default restaurantsSlice.reducer