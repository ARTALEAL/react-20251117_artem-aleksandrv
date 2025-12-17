import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import {
  FULFILLED,
  IDLE,
  PENDING,
  REJECTED,
} from '../../../utils/constants.js';
import { getReviews } from './getReviews.js';

const entityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState: entityAdapter.getInitialState({
    requestStatus: IDLE,
    error: null,
  }),
  selectors: {
    selectReviewById: (state, id) => {
      return state.entities[id];
    },
    selectReviewIds: (state) => state.ids,
    selectReviews: (state) => state.entities,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getReviews.pending, (state) => {
        state.requestStatus = PENDING;
        state.error = null;
        entityAdapter.removeAll(state);
      })
      .addCase(getReviews.rejected, (state, action) => {
        state.requestStatus = REJECTED;
        state.error = action.payload || action.error.message;
      })
      .addCase(getReviews.fulfilled, (state, { payload }) => {
        state.requestStatus = FULFILLED;
        entityAdapter.setAll(state, payload);
      }),
});

const selectReviewSlice = (state) => state[reviewSlice.name];
export const { selectById } = entityAdapter.getSelectors(selectReviewSlice);

export const {
  selectReviewById,
  selectReviewIds,
  selectReviews,
  selectReviewsByRestaurant,
} = reviewSlice.selectors;
