import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { FULFILLED, IDLE, PENDING, REJECTED } from '../../../utils/constants';
import { getUsers } from './getUsers';
// import { normalizedUsers } from '../../../normalized-mocks.js';

// const initialState = {
//   ids: normalizedUsers.map(({ id }) => id),
//   entities: normalizedUsers.reduce((acc, user) => {
//     acc[user.id] = user;
//     return acc;
//   }, {}),
// };

const entityAdapter = createEntityAdapter();

export const userSlice = createSlice({
  name: 'users',
  initialState: entityAdapter.getInitialState({
    requestStatus: IDLE,
    error: null,
  }),
  selectors: {
    selectUserById: (state, id) => {
      return state.entities[id];
    },
    selectUsersIds: (state) => state.ids,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.requestStatus = PENDING;
        state.error = null;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.requestStatus = REJECTED;
        state.error = action.payload || action.error.message;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.requestStatus = FULFILLED;
        entityAdapter.setAll(state, payload);
      }),
});

const selectUsersSlice = (state) => state[userSlice.name];
export const { selectById } = entityAdapter.getSelectors(selectUsersSlice);

export const { selectUserById, selectUsersIds } = userSlice.selectors;
