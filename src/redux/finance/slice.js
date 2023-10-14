import { createSlice } from '@reduxjs/toolkit';
import {
  addTransaction,
  deleteTransaction,
  editTransaction,
  fetchTransactions,
} from './operations';

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
    setBalance: (state, action) => {
      state.totalBalance = action.payload;
    },
  },
  extraReducers: {
    [addTransaction.pending]: handlePending,
    [addTransaction.rejected]: handleRejected,
    [editTransaction.pending]: handlePending,
    [editTransaction.rejected]: handleRejected,
    [deleteTransaction.pending]: handlePending,
    [deleteTransaction.rejected]: handleRejected,
    [fetchTransactions.pending]: handlePending,
    [fetchTransactions.rejected]: handleRejected,
    [addTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      state.data.push(action.payload);
      state.totalBalance = state.data.reduce((acc, curr) => acc + curr.sum, 0);
    },
    [editTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      console.log(action);

      const index = state.data.findIndex(transaction => transaction._id === action.payload._id);
      if (index !== -1) state.data[index] = action.payload;
    },
    [fetchTransactions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      state.data = action.payload.data;
    },
    [deleteTransaction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = null;

      state.data = state.data.filter(transaction => transaction._id !== action.payload);
    },
  },
});

export const { resetFinance, setBalance } = slice.actions;

export const financeReducer = slice.reducer;
