/* eslint-disable @typescript-eslint/no-unused-vars */
import { configureStore } from "@reduxjs/toolkit";
import basketSlice from './slices/BasketSlice'
import productSlice from './slices/ProductSlice'


const store = configureStore({
    reducer: {
        productList: productSlice,
        userBasket: basketSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store