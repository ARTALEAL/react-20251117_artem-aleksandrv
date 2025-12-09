import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    addToCart: (state, { payload }) => {
      const { id, name, price, counter } = payload;
      state[id] = { name, price, amount: counter };
    },
    deleteFromCart: (state, { payload }) => {
      const { id, counter } = payload;
      if (!state[id]) {
        return state;
      }

      state[id] = { ...state[id], amount: counter };

      if (state[id].amount === 0) {
        delete state[id];
      }
    },
  },
  selectors: {
    selectCartItems: (state) =>
      Object.keys(state).reduce((acc, id) => {
        acc.push({
          id,
          amount: state[id].amount,
          name: state[id].name,
          total: state[id].price * state[id].amount,
        });

        return acc;
      }, []),
    selectAmountById: (state, id) => state[id]?.amount ?? 0,
    selectTotalSum: (state) => {
      return Object.values(state).reduce((acc, { amount, price }) => {
        return acc + price * amount;
      }, 0);
    },
  },
});

export const { selectCartItems, selectAmountById, selectTotalSum } =
  cartSlice.selectors;

export const { addToCart, deleteFromCart } = cartSlice.actions;
