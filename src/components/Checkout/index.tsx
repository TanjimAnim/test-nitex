"use client";

import { useAppSelector } from "@/hooks";
import { Box, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from "@/hooks";
import { removeCart } from "@/features/cart.slice";
export default function CheckoutPageComponent() {
  const cartItems = useAppSelector((state) => state.shoppingCartSlice.items);
  const dispatch = useAppDispatch();
  const removeItemFromCart = (id: number) => {
    dispatch(removeCart(id));
  };
  return (
    <>
      {cartItems.length > 0 && (
        <div>
          <Box marginTop="50px" marginLeft="91px">
            <Text fontSize="3xl" fontWeight={700}>
              Cart
            </Text>
          </Box>
          <div className="overflow-x-scroll md:overflow-x-auto">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <Image
                          src={item.image}
                          width={121}
                          height={118}
                          alt={item.image}
                        />
                      </td>
                      <td>{item.title}</td>
                      <td>&#36;{item.price}</td>
                      <td>{item.quantity}</td>
                      <td>&#36;{Number(item.total_price).toFixed(2)}</td>
                      <td
                        onClick={(e) => removeItemFromCart(item.id)}
                        className="cursor-pointer"
                      >
                        <IoMdClose />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="flex justify-end">
            <Link
              className="p-4 mr-24 mt-9 mb-3 bg-black text-white rounded-md hover:bg-white hover:text-black"
              href="/dashboard/payment"
            >
              PROCEED TO PAYMENT
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
