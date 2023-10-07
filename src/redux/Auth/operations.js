import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const registerUser = createAsyncThunk('/auth/register', async (body, thunkAPI) => {
  try {
    console.log(body);
    const response = await axios.post('endpoint', body);

    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});

export const loginUser = createAsyncThunk('/auth/login', async (body, thunkAPI) => {
  try {
    console.log(body);
    const response = await axios.post('endpoint', body);

    return response;
  } catch (err) {
    return thunkAPI.rejectWithValue(err.message);
  }
});
