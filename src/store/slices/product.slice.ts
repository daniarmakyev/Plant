import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { deleteProductFromApi, getOneProduct, getProducts } from "../actions/product.action";
import { ProductType } from "../../Types/Types";

export type StateType = {
    products: ProductType[];
    oneProduct: ProductType | null;
    loading: boolean;
  };

const INIT_STATE:StateType = {
    products: [],
    oneProduct: null,
    loading: false,
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
            }).addCase(getOneProduct.pending, (state) => {
                state.loading = true;
              })
              .addCase(getOneProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.oneProduct = action.payload!;
              })
    },
});

    