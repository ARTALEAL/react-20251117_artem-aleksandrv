import { createSlice } from '@reduxjs/toolkit';
import { normalizedRestaurants } from '../../../normalized-mocks.js';

const initialState = {
  ids: normalizedRestaurants.map(({ id }) => id),
  entities: normalizedRestaurants.reduce((acc, restaurant) => {
    acc[restaurant.id] = restaurant;
    return acc;
  }, {}),
};

export const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  selectors: {
    selectRestaurantById: (state, id) => {
      return state.entities[id];
    },
    selectRestaurantIds: (state) => state.ids,
    selectRestaurants: (state) => state.entities,
  },
});

export const { selectRestaurantById, selectRestaurantIds, selectRestaurants } =
  restaurantSlice.selectors;
