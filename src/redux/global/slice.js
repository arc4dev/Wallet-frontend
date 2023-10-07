import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddTransactionOpen: false,
  isModalLogoutOpen: false,
  isLoading: false,
};

const slice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleStateOf: (state, action) => {
      state[action.payload] = !state[action.payload];
    }, // How to use? => dispatch(toggleStateOf('isLoading'))
    // globalReset: () => {
    //   return { ...initialState };
    // },
  },
});

export const { toggleStateOf } = slice.actions;

export const globalReducer = slice.reducer;
