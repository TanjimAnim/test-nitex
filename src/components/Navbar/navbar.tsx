import { ProductDataType, SessionData } from "@/types";
import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

export default function Navbar({
  productData,
  user,
}: {
  productData: ProductDataType[];
  user?: SessionData;
}) {
  return (
    <>
      <DesktopNavbar productData={productData} user={user} />
      <MobileNavbar user={user} productData={productData} />
    </>
  );
}
