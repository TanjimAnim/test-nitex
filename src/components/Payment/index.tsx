"use client";
import { useAppSelector } from "@/hooks";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useState, FormEvent, ChangeEvent } from "react";
import { useAppDispatch } from "@/hooks";
import { clearCart } from "@/features/cart.slice";
import useCartTotal from "@/hooks/useCartTotal";
import { useRouter } from "next/navigation";

export default function PaymentComponent() {
  const cartItems = useAppSelector((state) => state.shoppingCartSlice.items);
  const totalPrice = useCartTotal();
  const router = useRouter();
  var [input, setInput] = useState({
    user_email: "",
    user_first_name: "",
    user_last_name: "",
  });
  const toast = useToast();
  const dispatch = useAppDispatch();
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    if (cartItems.length === 0) {
      return toast({
        title: "Please select some product before confirming payment",
        description: "",
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }
    event.preventDefault();

    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    dispatch(clearCart());
    toast({
      title: "Order Placed Successfully",
      description: "",
      status: "success",
      duration: 5000,
      position: "top",
      isClosable: true,
    });
    router.push("/");
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <>
      {cartItems.length > 0 && (
        <Box
          id="signin"
          display="flex"
          flexDir="column"
          justifyContent="center"
        >
          <Box marginX={{ base: "11%", md: "22%", lg: "26%" }}>
            <Text fontWeight={700} fontSize="3xl">
              Checkout
            </Text>
          </Box>
          <Box
            width={{
              base: "85%",
              md: "60%",
              xl: "50%",
            }}
            border="10px"
            p={5}
            mr="auto"
            ml="auto"
            mb="5%"
          >
            <Flex flexDir="column">
              <form onSubmit={(e) => handleSubmit(e)}>
                <FormControl id="email" isRequired>
                  <FormLabel fontSize="18px">Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="type your email here"
                    name="user_email"
                    _focus={{
                      zIndex: "0",
                      borderColor: "#3182ce",
                    }}
                    onChange={(e) => handleChange(e)}
                  />
                </FormControl>

                <Box display="flex" marginTop="30px">
                  <FormControl id="first-name" isRequired>
                    <FormLabel fontSize="18px">First Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="first name"
                      name="user_first_name"
                      _focus={{
                        zIndex: "0",
                        borderColor: "#3182ce",
                      }}
                      onChange={handleChange}
                      width="77%"
                    />
                  </FormControl>
                  <FormControl id="Last-name" isRequired>
                    <FormLabel fontSize="18px">Last Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="last name"
                      name="user_last_name"
                      _focus={{
                        zIndex: "0",
                        borderColor: "#3182ce",
                      }}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Box>

                <Box
                  display="flex"
                  backgroundColor="#F7F7F7"
                  justifyContent="space-between"
                  marginTop="40px"
                >
                  <Box padding="1rem">
                    <Text>Product</Text>
                  </Box>
                  <Box padding="1rem">
                    <Text>Total</Text>
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                >
                  {cartItems.map((item) => {
                    return (
                      <Box
                        key={item.id}
                        display="flex"
                        justifyContent="space-between"
                        padding="1rem"
                      >
                        <Box>
                          <Text>
                            {item.title} x {item.quantity}
                          </Text>
                        </Box>
                        <Box>
                          <Text>&#36;{item.total_price}</Text>
                        </Box>
                      </Box>
                    );
                  })}
                </Box>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  marginTop="10px"
                >
                  <Box padding="1rem">
                    <Text fontWeight={700}>Total</Text>
                  </Box>
                  <Box padding="1rem">
                    <Text fontWeight={700}>&#36;{totalPrice.toFixed(2)}</Text>
                  </Box>
                </Box>
                <button
                  type="submit"
                  className="mt-4 p-2 bg-black text-white font-bold rounded-md mx-5"
                >
                  CONFIRM PURCHASE
                </button>
              </form>
            </Flex>
          </Box>
        </Box>
      )}
    </>
  );
}
