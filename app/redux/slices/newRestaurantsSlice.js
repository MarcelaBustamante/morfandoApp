import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { newRestaurantAPI } from '../../networking/api/endpoints/AuthPartnerWS'
import { getListRestaurants } from './restaurantsSlice';
const initialState = {
  restaurants: null,
  error: null,
  status: 'idle',
  isLoading: false
}

export const createRestaurants = createAsyncThunk(
  'partner/restaurant',
  async (data, thunkAPI) => {
    const result = await newRestaurantAPI(data);
    thunkAPI.dispatch(getListRestaurants());
    return result;
  }
);

export const createMeal = createAsyncThunk('partner/createMenu',
  async (data,thunkAPI) => {
    console.log(data);
  }
)

export const newRestaurantsSlice = createSlice({
  name: 'restaurant',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createRestaurants.pending, (state, action) => {
      state.status = 'loading';
      state.error = null;
      state.isLoading = true;
    })
      .addCase(createRestaurants.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.restaurants = action.payload;
        state.isLoading = false;
        console.log(action.type);
      })
      .addCase(createRestaurants.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Hubo un error en la creación del restaurante';
        state.isLoading = false;
        console.log(action);
      })
  }
})

export default newRestaurantsSlice.reducer