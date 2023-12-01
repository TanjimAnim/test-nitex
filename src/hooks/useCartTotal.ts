import { useEffect, useState } from "react";
import { useAppSelector } from "@/hooks";
import { ProductDataType } from "@/types";

const useCartTotal = () => {
  const cartItems = useAppSelector((state) => state.shoppingCartSlice.items);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  useEffect(() => {
    if (cartItems && cartItems.length > 0) {
      // Calculate the total price of items in the cart
      const calculatedTotalPrice = cartItems.reduce(
        (accumulator: number, currentItem: ProductDataType) => {
          return accumulator + currentItem.price * currentItem.quantity;
        },
        0
      );
      setTotalPrice(calculatedTotalPrice);
    } else {
      setTotalPrice(0); // Reset total price if cart is empty
    }
  }, [cartItems]);

  return totalPrice;
};

export default useCartTotal;
