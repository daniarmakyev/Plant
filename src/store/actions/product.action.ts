import {
  createAsyncThunk,
  Action,
  ThunkAction,
  ThunkDispatch,
} from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { ProductType } from "../../Types/Types";

export const APIPRODUCT = "http://localhost:8000/products";

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

export const getProducts = createAsyncThunk(
  "products/getProducts",
  async () => {
    try {
      const { data } = await axios.get<ProductType[]>(APIPRODUCT);
      return data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }
);

export const addProduct = createAsyncThunk(
  "products/addProduct",
  async (product: ProductType) => {
    try {
      const response = await axios.post<ProductType>(APIPRODUCT, product);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  }
);

export const getOneProduct = createAsyncThunk(
  "oneProduct/getOneProduct",
  async (id: string | undefined) => {
    try {
      const { data } = await axios.patch(`${APIPRODUCT}/${id}`);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

export const editProduct = createAsyncThunk(
  "oneProduct/editProduct",
  async ({ id, newObj }: { id: string | undefined; newObj: ProductType }) => {
    if (id === undefined) {
      throw new Error("ID is undefined");
    }

    try {
      await axios.put(`${APIPRODUCT}/${id}`, newObj);
    } catch (error) {
      console.error(error);
    }
  }
);

export const deleteProductFromApi = createAsyncThunk(
  "oneProduct/deleteProduct",
  async (id: string | undefined) => {
    try {
      await axios.delete(`${APIPRODUCT}/${id}`);
    } catch (error) {
      console.log(error);
    }
  }
);
