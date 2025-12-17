import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseFetchData } from '../../../utils/api';

export const getDishes = createAsyncThunk(
  'dishes/getDishes',
  async (id, { rejectWithValue }) => {
    try {
      return await baseFetchData(`/dishes?restaurantId=${id}`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
