import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:3003/',
  }),
  tagTypes: ['seminars'],
  endpoints: () => ({}),
});
