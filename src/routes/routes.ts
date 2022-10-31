import { lazy } from 'react';
import { Route } from '../types/routes';

const MovieListPage = lazy(() => import(/* webpackChunkName: "MovieListPage" */'../features/tmdb/pages/MovieListPage'));
const MoviesRated = lazy(() => import(/* webpackChunkName: "MovieDetailPage" */'../features/tmdb/pages/MoviesRated'));

export const routes: Route[] = [
  {
    to: '/search',
    path: 'search',
    Component: MovieListPage,
    name: 'Movie List',
  },
  {
    to: '/moviesRated',
    path: 'moviesRated',
    Component: MoviesRated,
    name: 'Movies Rated',
  },
];
