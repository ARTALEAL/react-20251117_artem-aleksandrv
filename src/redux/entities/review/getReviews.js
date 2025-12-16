import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseFetchData } from '../../../utils/api';

export const getReviews = createAsyncThunk(
  'reviews/getReviews',
  async (id, { rejectWithValue }) => {
    try {
      return await baseFetchData(`/reviews?restaurantId=${id}`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
