import { configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from '../entities/restauraunt/restaurauntSlice';
import { dishSlice } from '../entities/dish/dishSlice';
import { reviewSlice } from '../entities/review/reviewSlice';
import { userSlice } from '../entities/user/userSlice';
import { cartSlice } from '../entities/cart/cartSlice';
import { api } from '../services/api';

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
    [cartSlice.name]: cartSlice.reducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(api.middleware),
});
