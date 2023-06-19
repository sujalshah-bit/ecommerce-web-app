import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slice'
import { apiServices } from '@/services/apiServices'
import { authServices } from '@/services/authServices'
import { setupListeners } from '@reduxjs/toolkit/query';
import userSlice from './userSlice';
import IsLogin from './loginSlice';
export const store = configureStore({
  reducer: {
    cart:cartReducer,
    user:userSlice,
    isSignIn:IsLogin,
    [apiServices.reducerPath]: apiServices.reducer,
    [authServices.reducerPath]: authServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(apiServices.middleware, authServices.middleware),

})

setupListeners(store.dispatch);