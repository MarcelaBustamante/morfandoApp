import { configureStore } from '@reduxjs/toolkit';
import partnerLoginReducer from './slices/partnerLoginSlice';
import partnerRegisterReducer from './slices/partnerRegisterSlice';
import restaurantsReducer from './slices/restaurantsSlice';
import newRestaurantsReducer from './slices/newRestaurantsSlice';

export const store = configureStore({
  reducer: {
    partnerLogin: partnerLoginReducer,
    partnerRegister: partnerRegisterReducer,
    restaurants: restaurantsReducer,
    restaurant: newRestaurantsReducer
  },
})