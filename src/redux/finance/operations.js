import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api';

export const addTransaction = createAsyncThunk(
  '/transactions/addTransaction',
  async (body, thunkAPI) => {
    try {
      const res = await axios.post('/transactions', body);

      const { sum, category, comment, date, type, _id } = res.data.data;

      return { sum, category, comment, date, type, _id };
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editTransaction = createAsyncThunk(
  '/transactions/editTransaction',
  async (id, thunkAPI) => {
    try {
      const res = await axios.patch(`/transactions/${id}`);

      const { sum, category, comment, date, type, _id } = res.data.data;

      return { sum, category, comment, date, type, _id };
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTransaction = createAsyncThunk(
  '/transactions/deleteTransaction',
  async (id, thunkAPI) => {
    try {
      await axios.delete(`/transactions/${id}`);

      return id;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const fetchTransactions = createAsyncThunk(
  '/users/fetchTransactions',
  async (_, thunkAPI) => {
    try {
      const res = await axios.get('/users/transactions');

      return res.data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);
