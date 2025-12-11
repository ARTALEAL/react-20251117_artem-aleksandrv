import { createSlice } from '@reduxjs/toolkit';
import { normalizedUsers } from '../../../normalized-mocks.js';

const initialState = {
  ids: normalizedUsers.map(({ id }) => id),
  entities: normalizedUsers.reduce((acc, user) => {
    acc[user.id] = user;
    return acc;
  }, {}),
};

export const userSlice = createSlice({
  name: 'users',
  initialState,
  selectors: {
    selectUserById: (state, id) => {
      return state.entities[id];
    },
    selectUsersIds: (state) => state.ids,
  },
});

export const { selectUserById, selectUsersIds } = userSlice.selectors;
