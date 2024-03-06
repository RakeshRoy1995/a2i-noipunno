import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REHYDRATE } from "redux-persist";


export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:8080` }),
  extractRehydrationInfo(action, { reducerPath }) {
    // console.log(reducerPath);
    if (action.type === REHYDRATE) {
      return action.payload?.[reducerPath];
    }
  },
  tagTypes: ["Products"],
  endpoints: (builder) => ({
    getsProducts: builder.query({
      query: () => `/product/list`,

      // transformResponse: res => res.sort((a, b) => b.id - a.id),
      providesTags: ["Products"],
    }),
    getSingleProducts: builder.query({
      query: (user_id) => `/product/list/${user_id}`,
      // transformResponse: res => res.sort((a, b) => b.id - a.id),
      providesTags: ["Products"],
    }),
  }),
});
export const {
  useGetSingleProductsQuery,

  useGetsProductsQuery,
} = apiSlice;
