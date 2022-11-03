import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { restaurants } from '../../networking/api/endpoints/AuthWS'

const initialState = {
  isLoading: false,
  restaurants:[],
  error: null
}

export const getListRestaurants = createAsyncThunk(
  'restaurants',
  async () => {
    return await restaurants.getListRestoAPI();
  }
)


export const restaurantsSlice = createSlice({
  name: 'restaurants',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getListRestaurants.pending, (state, action) => {
      state.isLoading = true;
      error='';
    })
    .addCase(getListRestaurants.fulfilled, (state, action) => {
      state.isLoading = false;
      state.restaurants = action.payload.subject;
    }) 
    .addCase(getListRestaurants.rejected, (state, action) => {
      state.isLoading = false;
      state.error = 'Hubo un error en la carga de restaurants';
    })
  }
})

export default restaurantsSlice.reducer