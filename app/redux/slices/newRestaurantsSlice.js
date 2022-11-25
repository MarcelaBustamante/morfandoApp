import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { newRestaurantAPI } from '../../networking/api/endpoints/AuthPartnerWS'

const initialState = {
  restaurants:null,
  error: null,
  status: 'idle',
  isLoading: false
}

export const createRestaurants = createAsyncThunk(
  'partner/restaurant',
  async () => {
    return await newRestaurantAPI(form);
  }
)

export const newRestaurantsSlice = createSlice({
  name: 'restaurant',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createRestaurants.pending, (state, action) => {
      state.status = 'loading';
      state.error = null;
    })
    .addCase(createRestaurants.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.restaurants = action.payload;
      console.log(action.type);
    }) 
    .addCase(createRestaurants.rejected, (state, action) => {
      state.status = 'failed';
      state.error = 'Hubo un error en la creación del restaurante';
      console.log(action.type);
    })
  }
})

export default newRestaurantsSlice.reducer