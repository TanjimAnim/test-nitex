import PaymentComponent from "@/components/Payment";
import { getRequestCookie } from "@/libs/getRequestCookie";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Payment() {
  const user = await getRequestCookie(cookies());
  if (!user) {
    redirect("/login");
  }
  return (
    <div>
      <PaymentComponent />
    </div>
  );
}
