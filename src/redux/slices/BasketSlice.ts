/* eslint-disable @typescript-eslint/no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../types/Product";


const basket: Product[] = []

const basketSlice = createSlice({
    name: 'slice',
    initialState: basket,
    reducers: {
        addToBasket: (state, action: PayloadAction<Product>) => {
            state.push(action.payload)
        }
    }
})

export const { addToBasket } = basketSlice.actions
export default basketSlice.reducer