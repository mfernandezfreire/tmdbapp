// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { MovieSearchApiResult } from '../../types/movieAPI';

import { BASE_TMDB_URL } from '../../config';

// Define a service using a base URL and expected endpoints
export const tmdbAPI = createApi({
  reducerPath: 'tmdbAPI',
  baseQuery: fetchBaseQuery(
    {
      baseUrl: BASE_TMDB_URL,
      headers: {
        'Content-type': 'application/json;charset=utf-8',
      },
    },
  ),
  endpoints: (builder) => ({
    getMoviesList: builder.query<MovieSearchApiResult, string>({
      query: (query: string) => query,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMoviesListQuery,
} = tmdbAPI;
