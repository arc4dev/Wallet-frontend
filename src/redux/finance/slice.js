import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addTransaction } from './operations';

const initialState = {
  data: [
    {
      id: nanoid(),
      amount: 100, // income
      category: 'income',
      comment: 'work',
      issuedAt: new Date(),
    },
    {
      id: nanoid(),
      amount: -50, // expense
      category: 'main',
      comment: 'life',
      issuedAt: new Date(),
    },
  ],
  totalBalance: 0,
  statistics: {}, // I presume object of objects TODO
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const slice = createSlice({
  name: 'finance',
  initialState,
  extraReducers: {
    [addTransaction.pending]: handlePending,
    [addTransaction.rejected]: handleRejected,
    [addTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
  },
});

export const financeReducer = slice.reducer;