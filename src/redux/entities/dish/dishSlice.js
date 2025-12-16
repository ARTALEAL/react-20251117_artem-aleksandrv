import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} from '../../../utils/constants.js';
import { getDishes } from './getDishes.js';

// const initialState = {
//   ids: normalizedDishes.map(({ id }) => id),
//   entities: normalizedDishes.reduce((acc, dish) => {
//     acc[dish.id] = dish;
//     return acc;
//   }, {}),
// };

const entityAdapter = createEntityAdapter();

export const dishSlice = createSlice({
  name: 'dishes',
  initialState: entityAdapter.getInitialState({
    requestStatus: IDLE,
    error: null,
  }),
  selectors: {
    selectDishById: (state, id) => {
      return state.entities[id];
    },
    selectDishIds: (state) => state.ids,
    selectDishes: (state) => state.entities,
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getDishes.pending, (state) => {
        state.requestStatus = PENDING;
        state.error = null;
        entityAdapter.removeAll(state);
      })
      .addCase(getDishes.rejected, (state, action) => {
        state.requestStatus = REJECTED;
        state.error = action.payload || action.error.message;
      })
      .addCase(getDishes.fulfilled, (state, { payload }) => {
        state.requestStatus = FULFILLED;
        entityAdapter.setAll(state, payload);
      }),
});

const selectDishSlice = (state) => state[dishSlice.name];
export const { selectById } = entityAdapter.getSelectors(selectDishSlice);

export const {
  selectDishById,
  selectDishIds,
  selectDishes,
  selectRequestStatus,
} = dishSlice.selectors;
