import { createAsyncThunk } from '@reduxjs/toolkit';

export const addTransaction = createAsyncThunk(
  '/contacts/addTransaction',
  async (body, thunkAPI) => {
    try {
      const res = body; // fetch here

      return res.data;
    } catch (err) {
      thunkAPI.rejectWithValue(err.message);
    }
  }
);
