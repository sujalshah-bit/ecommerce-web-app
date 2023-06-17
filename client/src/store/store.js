import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice'
import { apiServices } from '@/services/apiServices'
import { setupListeners } from '@reduxjs/toolkit/query';
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    [apiServices.reducerPath]: apiServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiServices.middleware),
})

setupListeners(store.dispatch);