import { configureStore } from '@reduxjs/toolkit';
import { restaurantSlice } from '../entities/restauraunt/restaurauntSlice';
import { dishSlice } from '../entities/dish/dishSlice';
import { reviewSlice } from '../entities/review/reviewSlice';
import { userSlice } from '../entities/user/userSlice';

export const store = configureStore({
  reducer: {
    [restaurantSlice.name]: restaurantSlice.reducer,
    [dishSlice.name]: dishSlice.reducer,
    [reviewSlice.name]: reviewSlice.reducer,
    [userSlice.name]: userSlice.reducer,
  },
});
