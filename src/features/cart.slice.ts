import { createSlice } from "@reduxjs/toolkit";
import { ProductDataType } from "@/types";

export type CartState = {
  items: ProductDataType[];
};

const initialState: CartState = {
  items:
    JSON.parse(
      (typeof window !== "undefined" &&
        localStorage.getItem("shopping-cart")) ||
        "{}"
    ).items || [],
};

export const shoppingCartSlice = createSlice({
  name: "shopping-cart",
  initialState: initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        // if (state.items[itemIndex].quantity_available === 0) {
        //   return state;
        // }

        state.items[itemIndex].quantity += action.payload.quantity;
        // state.items[itemIndex].quantity_available -= 1;
        state.items[itemIndex].total_price =
          state.items[itemIndex].price * state.items[itemIndex].quantity;
      } else {
        state.items.push({
          ...action.payload,
          quantity: action.payload.quantity,
          total_price: action.payload.price + action.payload.quantity,
        });
      }
    },
    // reloadCart: (state, action) => {
    //   console.log("state", state, action);
    //   return {
    //     ...state,
    //     ...JSON.parse(localStorage.getItem("persist:cart")),
    //   };
    // },
    initialCartValue: (state, action) => {
      return {
        ...state,
        items: action.payload,
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        items: [],
      };
    },
    removeCart: (state, action) => {
      return {
        ...state,
        items: state.items.filter((elem) => elem.id !== action.payload),
      };
    },
  },
});

export const { addToCart, initialCartValue, clearCart, removeCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
