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
    toggleState: (state, action) => {
      state[action.payload] = !state[action.payload];
    }, // How to use? => dispatch(toggleState('isLoading'))
  },
});

export const globalReducer = slice.reducer;
