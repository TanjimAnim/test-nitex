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
      <Link href="/">Home</Link>
      <Link href="/dashboard/products">All Products</Link>
      <Link href="/dashboard/contact">Contact Us</Link>
      <Link href="/login">Login/Register</Link>
      <Search productData={productData} />
    </div>
  );
}
