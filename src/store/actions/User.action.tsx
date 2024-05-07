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
  async (id: string | number | undefined) => {
    try {
      const { data } = await axios.get(`${API}/${id}`);
      console.log(data);
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


export const updateUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, newData }: { id: string | number; newData: UserType }) => {
    try {
      const response = await axios.put(`${API}/${id}`, newData);
      return response.data;
    } catch (error) {
      console.error("Error updating user:", error);
      throw error;
    }
  }
);

export const addCart = createAsyncThunk(
  "users/addCart",
  async ({ id, user }: { id: string | undefined; user: UserType }) => {
    try {
      await axios.patch(`${API}/${id}`, user);
    } catch (error) {
      console.log(error);
    }
  }
);

