import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isModalAddTransactionOpen: false,
  isModalEditTransactionOpen: false,
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
    resetGlobal: () => {
      return initialState;
    },
  },
});

export const { toggleStateOf, resetGlobal } = slice.actions;

export const globalReducer = slice.reducer;
