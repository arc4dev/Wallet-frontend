import { createSlice, nanoid } from '@reduxjs/toolkit';
import { addTransaction } from './operations';

const initialState = {
  data: [
    {
      id: nanoid(),
      amount: 100, // income
      category: 'income',
      comment: 'work',
      date: new Date().toLocaleDateString(),
    },
    {
      id: nanoid(),
      amount: -50, // expense
      category: 'main',
      comment: 'life',
      date: new Date().toLocaleDateString(),
    },
  ],
  totalBalance: 0,
  statistics: {}, // I assume object of objects TODO
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
  reducers: {
    resetFinance: () => {
      return initialState;
    },
  },
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

export const { resetFinance } = slice.actions;

export const financeReducer = slice.reducer;
