import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/product.action";


const INIT_STATE = {
    products: [],
    loading: false,
    error: false,
}

export const productSlice = createSlice({
    name: 'products',
    initialState: INIT_STATE,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProducts.pending, (state) => {

                state.loading = true;
            })
            .addCase(getProducts.fulfilled.type, (state, action:PayloadAction<any>) => {
                state.loading = false;
                state.products = action.payload!;
            })
    },
});