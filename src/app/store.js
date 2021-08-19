import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import productsReducer from '../features/product/productSlice';
import storeReducer from '../features/store/storeSlice';


export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartReducer,
    products: productsReducer,
    stores: storeReducer
  },
});
