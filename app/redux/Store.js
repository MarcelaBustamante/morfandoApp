import { configureStore } from '@reduxjs/toolkit'
import partnerLoginReducer from './slices/partnerLoginSlice'
import partnerRegisterReducer from './slices/partnerRegisterSlice'
export const store = configureStore({
  reducer: {
    partnerLogin: partnerLoginReducer,
    partnerRegister: partnerRegisterReducer,
  },
})