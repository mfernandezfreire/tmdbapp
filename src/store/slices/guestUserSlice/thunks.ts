import { setAuthentication, setMoviesRated, TmdbSlice, tmdbSlice } from './guestUserSlice';
import { store, RootState } from '../../store';

import axios from 'axios';
import { Action, ActionCreator, AnyAction, AsyncThunkAction, ThunkAction, ThunkDispatch } from '@reduxjs/toolkit';
import { AgnosticRouteMatch } from '@remix-run/router';
import { MovieSearchApiResult, AuthenticationApiResult, RateApiResult, Movie } from '../../../types/movieAPI';
import { getAuthenticationQuery, getRateQuery } from '../../../utils/urlHelpers';
import { isAuthenticated } from '../../../utils/authenticateHelper';

export const tmdbGuestAuthentication = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

export const rateMovie = (
  movieId: number,
  rateValue: number,
  movieToAdd: Movie
): ThunkAction<void, TmdbSlice, unknown, AnyAction> => {
  return async (dispatch) => {
    let { authentication, moviesRated } = store.getState().guestUserSlice;
    let { token, expires_at } = authentication;
    try {
      if (!isAuthenticated(token, expires_at)) {
        const { data } = await tmdbGuestAuthentication
          .get<AuthenticationApiResult>(getAuthenticationQuery());
        const { guest_session_id: newToken, expires_at: newExpiresAt } = data;
        token = newToken;
        dispatch(setAuthentication({ token, expires_at: newExpiresAt }))
      }
      await tmdbGuestAuthentication
        .post<RateApiResult>(
          getRateQuery(movieId, token as string),
          {
            "value": rateValue
          }
        )
      const movieRated = { ...movieToAdd, user_rate_value: rateValue }
      const moviesFilteredByMovieToAdd = moviesRated.filter((movie: Movie) => movieRated.id === movie.id);
      if (moviesFilteredByMovieToAdd.length > 0) {
        moviesRated = moviesRated.map((movie: Movie) => movieId === movie.id ? ({ ...movie, user_rate_value: rateValue }) : ({ ...movie }))
        dispatch(setMoviesRated([...moviesRated]))
        return;
      }
      dispatch(setMoviesRated([...moviesRated, movieRated]));
    } catch (error) {
      // TODO: Add error Message
    }
  }
}


