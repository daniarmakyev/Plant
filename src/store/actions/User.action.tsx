import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { UserType } from "../../Types/Types";

const API = "http://localhost:8000/users";

export const registerUser = createAsyncThunk(
  "users/registerUser",
  async (user: UserType) => {
    try {
      await axios.post(API, user);
    } catch (error) {
      console.log(error);
    }
  }
);

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    console.log(window.location.search);

    const { data } = await axios.get(`${API}/${window.location.search}`);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const getOneUser = createAsyncThunk(
  "users/getOneUser",
  async (id: string | number) => {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "users/getCurrentUser",
  async (id: string | number) => {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
