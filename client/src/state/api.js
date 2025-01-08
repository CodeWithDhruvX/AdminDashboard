import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
    reducerPath: "adminapi",
    tagTypes: ["User","Products","Cusdtomers"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"]
        }),
        getProducts:build.query({
            query: () => `client/products`,
            providesTags: ["Products"]
        }),
        getCustomers:build.query({
            query: () => `client/customers`,
            providesTags: ["Customers"]
        }),
    })
})


export const 
{ useGetUserQuery,useGetProductsQuery,useGetCustomersQuery } = api;
