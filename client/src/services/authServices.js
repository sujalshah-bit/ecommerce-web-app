import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authServices = createApi({
  reducerPath: "authServices",
  baseQuery: fetchBaseQuery({ baseUrl: "https://ecommerce-web-app-api-2s9v.vercel.app/", credentials:'include',  mode:'no-cors' }),
  endpoints: (builder) => ({
    authSignUp: builder.mutation({
        query: (credentials) => ({
          url: 'auth/signup',
          method: 'POST',
          body: credentials,
        }),
      }),
      authLogIn: builder.mutation({
        query: (credentials) => ({
          url: 'auth/login',
          method: 'POST',
          body: credentials,
        }),
      }),
      authLogOut: builder.query({
        query: () => 'auth/logout',
        method: 'GET',
      }),
      authMiddleware: builder.query({
        query: () => 'auth/contactus',
        method: 'GET',
      }),
    
  }),
});

// export const { useGetAlbumsQuery } = apiServices;
export const { useAuthSignUpMutation, useAuthLogInMutation, useAuthLogOutQuery, useAuthMiddlewareQuery } = authServices;
