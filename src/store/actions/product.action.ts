import { createAsyncThunk, Action, ThunkAction, ThunkDispatch } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from '../store';

export const APIPRODUCT = 'http://localhost:8000/products';

export interface Product {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
  }
  
  export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (): Promise<Product[]> => {
      const { data } = await axios.get(APIPRODUCT);
      return data;
    }
  );