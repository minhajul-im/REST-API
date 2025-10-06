import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://backend.ummahsign.com/api',
  }),
  tagTypes: ['products', 'carts', 'orders', 'categories'],
  endpoints: () => ({}),
});
