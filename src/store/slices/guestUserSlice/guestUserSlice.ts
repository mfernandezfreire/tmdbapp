import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../../types/movieAPI';

export interface Authentication {
  token: string | null,
  expires_at: string | null,
}

export interface TmdbSlice {
  authentication: Authentication,
  moviesRated: Movie[]
}

const initialState: TmdbSlice = {
  authentication: {
    token: null,
    expires_at: null
  },
  moviesRated: []
};

export const tmdbSlice = createSlice({
  name: 'guestUserSlice',
  initialState,
  reducers: {
    setAuthentication: (state, action: PayloadAction<Authentication>) => {
      state.authentication = action.payload;
    },
    setMoviesRated: (state, action: PayloadAction<Movie[]>) => {
      state.moviesRated = [ ...action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAuthentication, setMoviesRated } = tmdbSlice.actions;
