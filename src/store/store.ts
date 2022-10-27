import { configureStore } from '@reduxjs/toolkit';
import { tmdbAPI } from './api/tmdbAPI';

export const store = configureStore({
  reducer: {
    [tmdbAPI.reducerPath]: tmdbAPI.reducer,
  },
  middleware: (getDefaultSettings) => getDefaultSettings()
    .concat(tmdbAPI.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
