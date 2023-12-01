import SingleProductComponent from "@/components/Product/singleProduct";
import { getApiData } from "@/controllers/getdata";
import { ProductDataType } from "@/types";

export default async function SingleProductPage({
  params,
}: {
  params: { id: string };
}) {
  const singleProductData: ProductDataType = await getApiData(
    `products/${params.id}`
  );
  return (
    <>
      <SingleProductComponent product={singleProductData} />
    </>
  );
}
