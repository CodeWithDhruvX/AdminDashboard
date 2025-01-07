import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    reducerPath: "adminapi",
    tagTypes: ["User","Products"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        }),
        getProducts:build.query({
            query: () => `client/products`,
            providesTags: ["Products"]
        })
    })
})

console.log('ur',process.env.REACT_APP_API_URL);

export const 
{ useGetUserQuery,useGetProductsQuery } = api;
