import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./slices/product.slice";
import { usersSlice } from "./slices/users.slices";

export const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    users: usersSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
