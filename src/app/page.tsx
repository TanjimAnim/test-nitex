import Header from "@/components/Header";
import Navbar from "@/components/Navbar/navbar";
import { getApiData } from "@/controllers/getdata";
import { getRequestCookie } from "@/libs/getRequestCookie";
import { ProductDataType } from "@/types";
import { cookies } from "next/headers";

export default async function Home() {
  const productData: ProductDataType[] = await getApiData("products");
  const user = await getRequestCookie(cookies());
  return (
    <>
      <Navbar productData={productData} user={user} />
      <Header />
    </>
  );
}
