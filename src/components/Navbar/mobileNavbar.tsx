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

export default function MobileNavbar({
  user,
  productData,
}: {
  productData: ProductDataType[];
  user?: SessionData;
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef(null);
  return (
    <div className="md:hidden flex justify-between items-center">
      <button ref={btnRef} onClick={onOpen}>
        <RxHamburgerMenu />
      </button>
      <div className="flex items-center justify-between gap-2">
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

          <DrawerBody className="flex flex-col text-start">
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
