// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// (option) helper types/selectors ในอนาคต
// export const selectCartItems = (state) => state.cart.items;
