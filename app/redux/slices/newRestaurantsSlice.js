import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { newRestaurantAPI, newItemAPI, getListItemAPI } from '../../networking/api/endpoints/AuthPartnerWS'
import { getListRestaurants } from './restaurantsSlice';
import { deleteRestoAPI } from '../../networking/api/endpoints/restaurantsWS';

const initialState = {
  restaurants: null,
  error: null,
  status: 'idle',
  statusMeal: 'idle',
  isLoading: false,
  restaurantMeals: [],
}

export const createRestaurants = createAsyncThunk(
  'partner/restaurant',
  async (data, thunkAPI) => {
    const result = await newRestaurantAPI(data);
    thunkAPI.dispatch(getListRestaurants());
    return result;
  }
);

export const deleteRestaurant = createAsyncThunk(
  'partner/restaurant',
  async (restoId, thunkAPI) => {
    const result = await deleteRestoAPI(restoId);
    return result
  }
)

export const createMeal = createAsyncThunk('partner/createMenu',
  async ({ formValue, restoId }, thunkAPI) => {
    const result = await newItemAPI(formValue, restoId);
    thunkAPI.dispatch(getMeal(restoId));
    return result
  }
);
export const getMeal = createAsyncThunk('partner/getMenu',
  async (restoId, thunkAPI) => {
    const result = await getListItemAPI(restoId);
    return result
  }
);

export const newRestaurantsSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    resetMealStatus: state => {
      state.statusMeal = initialState.statusMeal;
      state.restaurantMeals = initialState.restaurantMeals;
    }
  },
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
      }).addCase(createMeal.pending, (state, action) => {
        state.status = 'loading';
        state.error = null;
        state.isLoading = true;
      })
      .addCase(createMeal.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.restaurants = action.payload;
        state.isLoading = false;
        console.log(action.type);
      })
      .addCase(createMeal.rejected, (state, action) => {
        state.status = 'failed';
        state.error = 'Hubo un error en la creación del plato';
        state.isLoading = false;
        console.log(action);
      }).addCase(getMeal.pending, (state, action) => {
        state.statusMeal = 'loading';
        state.error = null;
        state.isLoading = true;
      })
      .addCase(getMeal.fulfilled, (state, action) => {
        state.statusMeal = 'succeeded';
        state.restaurantMeals = action.payload;
        state.isLoading = false;
        console.log(action.type);
      })
      .addCase(getMeal.rejected, (state, action) => {
        state.statusMeal = 'failed';
        state.error = 'Hubo un error en la lista del plato';
        state.isLoading = false;
        console.log(action);
      })
  }
})

export default newRestaurantsSlice.reducer