"use client";
import { FaSearch } from "react-icons/fa";
import Search from "../Search";
export default function DesktopNavbar() {
  return (
    <div className="md:grid hidden grid-cols-5 mx-auto text-center cursor-pointer">
      <div>Home</div>
      <div>All Products</div>
      <div>Contact Us</div>
      <div>Login/Register</div>
      <Search />
    </div>
  );
}
