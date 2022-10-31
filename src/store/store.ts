import { configureStore } from '@reduxjs/toolkit';
import { tmdbSlice } from './slices';
import { tmdbAPI } from './api';

export const store = configureStore({
  reducer: {
    tmdb: tmdbSlice.reducer,
    [tmdbAPI.reducerPath]: tmdbAPI.reducer,
  },
  middleware: (getDefaultSettings) => getDefaultSettings()
    .concat(tmdbAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
