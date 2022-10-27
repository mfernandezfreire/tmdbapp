// Need to use the React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { AuthenticationApiResult, MovieSearchApiResult } from '../../types/movieAPI';

const baseUrl = 'https://api.themoviedb.org/3/';

// Define a service using a base URL and expected endpoints
export const tmdbAPI = createApi({
  reducerPath: 'pokemonApi',
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
      query: () => `movie/popular/?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=es-ES&page=1`,
    }),
    getMovie: builder.query<MovieSearchApiResult, string>({
      query: (movieToSearch) => `search/movie/?api_key=${import.meta.env.VITE_TMDB_API_KEY}&language=es-ES&query=${movieToSearch}&page=1&include-adult=false`,
    }),
    getGuestAuthentication: builder.query<AuthenticationApiResult, string>({
      query: () => `/authentication/guest_session/new/?api_key=${import.meta.env.VITE_TMDB_API_KEY}`,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
  useGetMoviesListQuery,
  useGetMovieQuery,
  useGetGuestAuthenticationQuery,
} = tmdbAPI;
