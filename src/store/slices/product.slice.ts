import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { deleteProductFromApi, getOneProduct, getProducts } from "../actions/product.action";
import { ProductType } from "../../Types/Types";


export type StateType = {
    data: ProductData; // Тип данных продуктов соответствует ProductData
    oneProduct: ProductType | null; // Один продукт или null
    loading: boolean;
};

export interface ProductData {
    data: never[];
    first: number;
    prev: number | null;
    next: number | null;
    last: number;
    pages: number;
    items: number;
    products: ProductType[]; // Массив объектов типа ProductType
}

const INIT_STATE: StateType = {
    //@ts-ignore
    data: {
        first: 1,
        prev: null,
        next: 0,
        last: 0,
        pages: 1,
        items: 0,
        products: [],
    },
    oneProduct: null,
    loading: false,
};

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
                state.data = action.payload!;
            }).addCase(getOneProduct.pending, (state) => {
                state.loading = true;
              })
              .addCase(getOneProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.oneProduct = action.payload!;
              })
    },
});
