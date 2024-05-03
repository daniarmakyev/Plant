import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/product.action";


const INIT_STATE = {
    product: [],
    oneProduct: null,
    loading: false,
    error: false,
}

export const productSlice = createSlice({
    name: 'products',
    initialState: INIT_STATE,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getProducts.pending.type, (state, action) => {
                console.log(action);
                state.loading = true;
            })
            .addCase(getProducts.rejected.type, (state, action) => {
                console.log(action);
                state.loading = false;
                state.error = true;
            })
            .addCase(getProducts.fulfilled.type, (state, action:PayloadAction<any>) => {
                console.log(action);
                state.loading = false;
                state.product = action.payload;
            })
    },
});

    