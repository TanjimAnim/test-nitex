import Navbar from "@/components/Navbar/navbar";
import { getApiData } from "@/controllers/getdata";
import { getRequestCookie } from "@/libs/getRequestCookie";
import { ProductDataType } from "@/types";
import { cookies } from "next/headers";

export default async function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const productData: ProductDataType[] = await getApiData("products");
  const user = await getRequestCookie(cookies());
  return (
    <section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Navbar productData={productData} user={user} />

      {children}
    </section>
  );
}
