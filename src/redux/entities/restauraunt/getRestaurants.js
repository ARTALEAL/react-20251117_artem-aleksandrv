import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseFetchData } from '../../../utils/api';

export const getRestaurants = createAsyncThunk(
  'restaurants/getRestaurants',
  async (_, { rejectWithValue }) => {
    try {
      return await baseFetchData('/restaurants');
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
