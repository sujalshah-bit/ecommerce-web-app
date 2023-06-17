import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiServices = createApi({
  reducerPath: "apiServices",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `products`,
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
    }),
    searchProduct: builder.query({
      query: (query) => `products/search?q=${query}`,
    }),
    
  }),
});

// export const { useGetAlbumsQuery } = apiServices;
export const { useGetAllProductsQuery, useGetProductQuery,useSearchProductQuery } = apiServices;
