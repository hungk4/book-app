import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./features/cart/cartSlide"
import booksApi from './features/books/booksApi'
import ordersApi from './features/orders/ordersApi'
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer, // booksApi.reducerPath = 'booksApi'
    [ordersApi.reducerPath]: ordersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware, ordersApi.middleware),
})