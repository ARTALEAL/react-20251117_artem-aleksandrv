import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseFetchData } from '../../../utils/api';
import { selectDishById } from './dishSlice';

export const getDishById = createAsyncThunk(
  'dishes/getDishById',
  async (id, { rejectWithValue }) => {
    try {
      return await baseFetchData(`/dish/${id}`);
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (id, { getState }) => {
      const state = getState();
      const existingRestaurant = selectDishById(state, id);
      return !existingRestaurant;
    },
  }
);
