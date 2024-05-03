import { createAsyncThunk, Action, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from '../store';
import { ProductType } from "../../Types/Types";

export const APIPRODUCT = 'http://localhost:8000/products';

export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }
  
  export const getProducts = createAsyncThunk("products/getProducts", async () => {
    try {
      const { data } = await axios.get<ProductType[]>(APIPRODUCT);
      return data;
    } catch (error) {
      console.log(error);
    }
  });