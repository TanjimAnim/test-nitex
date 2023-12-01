import { getRequestCookie } from "@/libs/getRequestCookie";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export default async function OrderHistory() {
  const user = await getRequestCookie(cookies());
  if (!user) {
    redirect("/login");
  }
  return <>this is order history page</>;
}
