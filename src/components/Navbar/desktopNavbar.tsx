"use client";
import { ProductDataType } from "@/types";
import Search from "../Search";
import Link from "next/link";
export default function DesktopNavbar({
  productData,
}: {
  productData: ProductDataType[];
}) {
  return (
    <div className="md:grid hidden grid-cols-5 mx-auto text-center cursor-pointer">
      <div>Home</div>
      <Link href="/products">All Products</Link>
      <div>Contact Us</div>
      <div>Login/Register</div>
      <Search productData={productData} />
    </div>
  );
}
