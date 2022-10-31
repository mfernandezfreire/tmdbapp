// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthenticationApiResult, MovieSearchApiResult } from '../../types/movieAPI';

const baseUrl = 'https://api.themoviedb.org/3/';

// Define a service using a base URL and expected endpoints
export const tmdbAPI = createApi({
  reducerPath: 'tmdbAPI',
  baseQuery: fetchBaseQuery(
    {
      baseUrl,
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
