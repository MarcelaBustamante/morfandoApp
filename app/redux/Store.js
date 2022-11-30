import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { setAuthToken } from '../networking/api/Api';
import { createAction } from '@reduxjs/toolkit'
import partnerLoginReducer from './slices/partnerLoginSlice';
import partnerRegisterReducer from './slices/partnerRegisterSlice';
import restaurantsReducer from './slices/restaurantsSlice';
import newRestaurantsReducer from './slices/newRestaurantsSlice';
import clientLoginReducer from './slices/clientLoginSlice';
import clientRestaurantsReducer from './slices/clientRestaurantsSlice';
import clientReducer from './slices/clientSlice';


// logout global
export const userLogout = createAction('user/logout');

const combinedReducer = combineReducers({
  partnerLogin: partnerLoginReducer,
  partnerRegister: partnerRegisterReducer,
  restaurants: restaurantsReducer,
  restaurant: newRestaurantsReducer,
  clientLogin: clientLoginReducer,
  client: clientReducer,
  clientRestaurants: clientRestaurantsReducer,
});

const rootReducer = (state, action) => {
  if (action.type === userLogout.type) {
    state = undefined;
    setAuthToken(null);
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
});