"use client";
import { RxHamburgerMenu } from "react-icons/rx";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";
import { ProductDataType, SessionData } from "@/types";
import Link from "next/link";
import Search from "../Search";
import ProfileComponent from "../Profile";
import { useAppSelector } from "@/hooks";
import { FaShoppingCart } from "react-icons/fa";

export default function MobileNavbar({
  user,
  productData,
}: {
  productData: ProductDataType[];
  user?: SessionData;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  const quantity = useAppSelector(
    (state) => state.shoppingCartSlice.items
  ).length;
  const notificationStyle =
    "absolute rounded-full w-[14px] flex items-center justify-center bg-[#55FFFF] top-[-8px] left-[14px] text-xs font-medium text-[black]";
  return (
    <div className="md:hidden flex justify-between items-center p-8">
      <button ref={btnRef} onClick={onOpen}>
        <RxHamburgerMenu />
      </button>
      <div className="flex items-center justify-between gap-2">
        {quantity > 0 && (
          <Link href="/dashboard/checkout" className="relative">
            <FaShoppingCart fontSize="20px" />
            <div className={notificationStyle}>{quantity}</div>
          </Link>
        )}
        <Search productData={productData} />
        {user && <ProfileComponent user={user} />}
        {!user && <Link href="/login">Login/Register</Link>}
      </div>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>!Daraz</DrawerHeader>

          <DrawerBody className="flex flex-col text-start gap-4">
            <Link href="/">Home</Link>
            <Link href="/dashboard/products">All Products</Link>
            <Link href="/dashboard/contact">Contact Us</Link>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
