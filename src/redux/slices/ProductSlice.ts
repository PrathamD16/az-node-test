/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios"
import { Product } from '../../types/Product'
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"


const initialState: Product[] = []

export const fetchProduct = createAsyncThunk('products/fetchProducts', async () => {
    const res = await axios.get(`https://fakestoreapi.com/products`)
    return res.data;
})

const productSlice = createSlice({
    name: 'productSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchProduct.fulfilled, (state, action: PayloadAction<Product[]>) => {
            return action.payload
        })
        builder.addCase(fetchProduct.rejected, (state, action) => {
            console.log(`Failed to fetch the product ${action.error}`)
        })
    },
})


export default productSlice.reducer





