import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseFetchData } from '../../../utils/api';
import { selectRestaurantById } from './restaurauntSlice';

export const getRestaurantById = createAsyncThunk(
  'restaurants/getRestaurantById',
  async (id, { rejectWithValue }) => {
    try {
      const data = await baseFetchData(`/restaurant/${id}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (id, { getState }) => {
      const state = getState();
      const existingRestaurant = selectRestaurantById(state, id);
      return !existingRestaurant;
    },
  }
);
