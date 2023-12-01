import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { addToCart, clearCart, removeCart } from "./features/cart.slice";
import { RootState } from "./store";

export const listenerMiddleware = createListenerMiddleware();
listenerMiddleware.startListening({
  matcher: isAnyOf(addToCart, clearCart, removeCart),
  effect: (action, listenerApi) => {
    localStorage.setItem(
      "shopping-cart",
      JSON.stringify((listenerApi.getState() as RootState).shoppingCartSlice)
    );
  },
});
