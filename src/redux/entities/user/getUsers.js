import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseFetchData } from '../../../utils/api';

export const getUsers = createAsyncThunk(
  'users/getUsers',
  async (_, { rejectWithValue }) => {
    try {
      return await baseFetchData(`/users`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
