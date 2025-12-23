import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { FULFILLED, IDLE, PENDING, REJECTED } from '../../../utils/constants';
import { getRestaurants } from './getRestaurants';

const entityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState: entityAdapter.getInitialState({
    requestStatus: IDLE,
    error: null,
    restraunts: [],
  }),
  reducers: {
    setRestaurantsList: (state, { payload }) =>
      entityAdapter.setAll(state, payload),
  },
  selectors: {
    selectRestaurantById: (state, id) => state.entities[id],
    selectRestaurantIds: (state) => state.ids,
    selectRestaurants: (state) => state.entities,
    selectRequestStatus: (state) => state.requestStatus,
    selectError: (state) => state.error,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.requestStatus = PENDING;
        state.error = null;
      })
      .addCase(getRestaurants.rejected, (state, action) => {
        state.requestStatus = REJECTED;
        state.error = action.payload || action.error.message;
      })
      .addCase(getRestaurants.fulfilled, (state, { payload }) => {
        state.requestStatus = FULFILLED;
        entityAdapter.setAll(state, payload);
      }),
});

const selectRestaurantSlice = (state) => state[restaurantSlice.name];
export const { selectById } = entityAdapter.getSelectors(selectRestaurantSlice);

export const {
  selectRestaurantById,
  selectRestaurantIds,
  selectRestaurants,
  selectRequestStatus,
  selectError,
} = restaurantSlice.selectors;

export const { setRestaurantsList } = restaurantSlice.actions;
