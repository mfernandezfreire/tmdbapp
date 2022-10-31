import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface tmdbSlice {
  status: string,
  id: string,
  page: number,
}

const initialState: tmdbSlice = {
  status: '',
  id: 'testID',
  page: 1
};

export const tmdbSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    setNewPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setNewPage } = tmdbSlice.actions;
