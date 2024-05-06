import { createSlice } from "@reduxjs/toolkit";
import { getOneUser, getUsers } from "../actions/User.action";
import { UserType } from "../../Types/Types";

export type StateType = {
  currentUser: null | UserType;
  users: UserType[];
  oneUser: UserType | null;
  loading: boolean;
};

const INIT_STATE: StateType = {
  currentUser: null,
  users: [],
  oneUser: null,
  loading: false,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: INIT_STATE,
  reducers: {
    logout(state) {
      state.currentUser = null;
      localStorage.removeItem("currentUser");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload!;
      })
      .addCase(getOneUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getOneUser.fulfilled, (state, action) => {
        state.loading = false;
        state.oneUser = action.payload!;
      });
  },
});

export const { logout } = usersSlice.actions;
