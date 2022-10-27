import { createSlice } from '@reduxjs/toolkit';

interface AunthenticationStatus {
  status: string,
  id: string
}

const initialState: AunthenticationStatus = {
  status: '',
  id: 'testID',
};

export const authenticateSlice = createSlice({
  name: 'template',
  initialState,
  reducers: {
    increment: (state) => {
      state.id += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = authenticateSlice.actions;
