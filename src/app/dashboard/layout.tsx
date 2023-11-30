import Navbar from "@/components/Navbar/navbar";
import { getApiData } from "@/controllers/getdata";
import { ProductDataType } from "@/types";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const productData: ProductDataType[] = await getApiData("products");
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar productData={productData} />

      {children}
    </section>
  );
}
