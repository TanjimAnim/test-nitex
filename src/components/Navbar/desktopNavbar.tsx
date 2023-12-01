"use client";
import { ProductDataType, SessionData } from "@/types";
import Search from "../Search";
import Link from "next/link";
import ProfileComponent from "../Profile";
import { useAppSelector } from "@/hooks";
import { FaShoppingCart } from "react-icons/fa";

export default function DesktopNavbar({
  productData,
  user,
}: {
  productData: ProductDataType[];
  user?: SessionData;
}) {
  const notificationStyle =
    "absolute rounded-full w-[14px] flex items-center justify-center bg-[#55FFFF] top-[-8px] left-[14px] text-xs font-medium text-[black]";

  const quantity = useAppSelector(
    (state) => state.shoppingCartSlice.items
  ).length;

  const headerStyle = () => {
    const style = `md:grid hidden grid-cols-5 mx-auto text-center cursor-pointer p-10`;
    if (quantity > 0) {
      return `md:grid hidden grid-cols-6 mx-auto text-center cursor-pointer p-10`;
    } else return style;
  };

  return (
    <div className={headerStyle()}>
      <Link href="/">Home</Link>
      <Link href="/dashboard/products">All Products</Link>
      <Link href="/dashboard/contact">Contact Us</Link>
      <Search productData={productData} />
      {user && <ProfileComponent user={user} />}
      {!user && <Link href="/login">Login/Register</Link>}
      {quantity > 0 && (
        <Link href="/dashboard/checkout" className="relative">
          <FaShoppingCart fontSize="20px" />
          <div className={notificationStyle}>{quantity}</div>
        </Link>
      )}
    </div>
  );
}
