import { createAsyncThunk } from '@reduxjs/toolkit';

export const registerUser = createAsyncThunk('/auth/register', async (body, thunkAPI) => {
  try {
    const res = body; // Fetch here

    return res.data;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
