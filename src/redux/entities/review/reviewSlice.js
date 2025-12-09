import { createSlice } from '@reduxjs/toolkit';
import { normalizedReviews } from '../../../normalized-mocks.js';

const initialState = {
  ids: normalizedReviews.map(({ id }) => id),
  entities: normalizedReviews.reduce((acc, review) => {
    acc[review.id] = review;
    return acc;
  }, {}),
};

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState,
  selectors: {
    selectReviewById: (state, id) => {
      return state.entities[id];
    },
    selectReviewIds: (state) => state.ids,
    selectReviewsByRestaurant: (state, ids) => {
      const reviews = [];
      for (let i = 0; i < ids.length; i++) {
        reviews.push(state.entities[ids[i]]);
      }
      return reviews;
    },
  },
});

export const {
  selectReviewById,
  selectReviewIds,
  selectReviews,
  selectReviewsByRestaurant,
} = reviewSlice.selectors;
