import Header from "@/components/Header";
import Navbar from "@/components/Navbar/navbar";
import { getApiData } from "@/controllers/getdata";
import { ProductDataType } from "@/types";

export default async function Home() {
  const productData: ProductDataType[] = await getApiData("products");

  return (
    <>
      <Navbar productData={productData} />
      <Header />
    </>
  );
}
