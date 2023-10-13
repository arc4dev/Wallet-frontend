import { createSlice } from '@reduxjs/toolkit';
import { addTransaction, fetchTransactions } from './operations';

const initialState = {
  data: [],
  totalBalance: 0,
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
    [fetchTransactions.pending]: handlePending,
    [fetchTransactions.rejected]: handleRejected,
    [addTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data.push(action.payload);
    },
    [fetchTransactions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      state.data = action.payload.data;
      state.totalBalance = action.payload.balance;
    },
  },
});

export const { resetFinance } = slice.actions;

export const financeReducer = slice.reducer;
