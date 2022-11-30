import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getRestaurantsAPI} from '../../networking/api/endpoints/restaurantsWS';

const initialState = {
  restaurants: [],
  pageCount: 0,
  error: null,
  isLoading: false,
};

export const getPublicRestaurants = createAsyncThunk(
  'client/restaurants',
  async filters => {
    return await getRestaurantsAPI(filters);
  },
);

const clientRestaurantsSlice = createSlice({
  name: 'clientRestaurants',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getPublicRestaurants.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPublicRestaurants.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.restaurants = action.payload.items;
        state.pageCount = action.payload.pageCount;
        console.log(action.type);
      })
      .addCase(getPublicRestaurants.rejected, (state, action) => {
        state.isLoading = false;
        state.error = 'Hubo un error en la carga de restaurants';
        console.log(action.type);
      });
  },
});

export default clientRestaurantsSlice.reducer;
