import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const addTransaction = createAsyncThunk(
  '/contacts/addTransaction',
  async ({ amount, date, category, comment }, thunkAPI) => {
    try {
      const res = await axios.post('/transactions', { amount, date, category, comment });

      return res.data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  '/contacts/deleteTransaction',
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`/transactions/${id}`);

      return res.data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);
