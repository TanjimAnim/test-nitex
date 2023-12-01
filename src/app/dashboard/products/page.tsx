import ProductsPageComponent from "@/components/Product/productPage";
import { getApiData } from "@/controllers/getdata";
import { ProductDataType } from "@/types";

export default async function ProductsPage() {
  const productData: ProductDataType[] = await getApiData("products");
  return (
    <>
      <ProductsPageComponent productData={productData} />
    </>
  );
}
