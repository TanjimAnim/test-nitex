"use client";
import { ProductDataType, SessionData } from "@/types";
import Search from "../Search";
import Link from "next/link";
import ProfileComponent from "../Profile";
export default function DesktopNavbar({
  productData,
  user,
}: {
  productData: ProductDataType[];
  user?: SessionData;
}) {
  return (
    <div className="md:grid hidden grid-cols-5 mx-auto text-center cursor-pointer">
      <Link href="/">Home</Link>
      <Link href="/dashboard/products">All Products</Link>
      <Link href="/dashboard/contact">Contact Us</Link>
      <Search productData={productData} />
      {user && <ProfileComponent user={user} />}
      {!user && <Link href="/login">Login/Register</Link>}
    </div>
  );
}
