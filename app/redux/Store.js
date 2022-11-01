import { configureStore } from '@reduxjs/toolkit'
import partnerReducer from './slices/partnerSlice'
export const store = configureStore({
  reducer: {
    partner: partnerReducer,
  },
})