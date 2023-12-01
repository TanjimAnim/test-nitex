import { configureStore } from "@reduxjs/toolkit";
import { shoppingCartSlice } from "./features/cart.slice";
import { listenerMiddleware } from "./listenerMiddleware";
// ...

export const store = configureStore({
  reducer: {
    shoppingCartSlice: shoppingCartSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
