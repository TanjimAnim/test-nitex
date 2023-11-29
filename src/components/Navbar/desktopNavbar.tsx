"use client";
import { ProductDataType } from "@/types";
import Search from "../Search";
export default function DesktopNavbar({
  productData,
}: {
  productData: ProductDataType[];
}) {
  return (
    <div className="md:grid hidden grid-cols-5 mx-auto text-center cursor-pointer">
      <div>Home</div>
      <div>All Products</div>
      <div>Contact Us</div>
      <div>Login/Register</div>
      <Search productData={productData} />
    </div>
  );
}
