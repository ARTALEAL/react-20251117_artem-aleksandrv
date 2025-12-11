import { createSlice } from '@reduxjs/toolkit';
import { normalizedDishes } from '../../../normalized-mocks.js';

const initialState = {
  ids: normalizedDishes.map(({ id }) => id),
  entities: normalizedDishes.reduce((acc, dish) => {
    acc[dish.id] = dish;
    return acc;
  }, {}),
};

export const dishSlice = createSlice({
  name: 'dishes',
  initialState,
  selectors: {
    selectDishById: (state, id) => {
      return state.entities[id];
    },
    selectDishIds: (state) => state.ids,
    selectDishes: (state) => state.entities,
  },
});

export const { selectDishById, selectDishIds, selectDishes } =
  dishSlice.selectors;
