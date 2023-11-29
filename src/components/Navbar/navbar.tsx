import { ProductDataType } from "@/types";
import DesktopNavbar from "./desktopNavbar";
import MobileNavbar from "./mobileNavbar";

export default function Navbar({
  productData,
}: {
  productData: ProductDataType[];
}) {
  return (
    <>
      <DesktopNavbar productData={productData} />
      <MobileNavbar />
    </>
  );
}
