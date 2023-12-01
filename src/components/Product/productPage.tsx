import { ProductDataType } from "@/types";
import ProductCard from "./productCard";

export default function ProductsPageComponent({
  productData,
}: {
  productData: ProductDataType[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 items-center justify-center md:justify-items-center">
      {productData &&
        productData.map((product) => {
          return (
            <div key={product.id} className="w-full">
              <ProductCard product={product} />
            </div>
          );
        })}
    </div>
  );
}
