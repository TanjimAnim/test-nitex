"use client";
import { ProductDataType } from "@/types";
import Image from "next/image";
import { CgMathPlus } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CountButton from "../counter";
import useCount from "@/hooks/useCount";
import { useAppDispatch } from "@/hooks";
import { addToCart } from "@/features/cart.slice";
export default function ProductCard({ product }: { product: ProductDataType }) {
  const { category, description, id, image, price, rating, title } = product;
  const router = useRouter();
  const dispatch = useAppDispatch();
  const handleClick = () => {
    router.push(`/dashboard/products/${id}`);
  };
  const { count, increment, decrement, isMinCount, isMaxCount } = useCount(
    1,
    1,
    5
  );

  const addToCartfunc = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: count,
      })
    );
  };

  return (
    <div className="w-full p-2 border-[1px] border-solid border-green-200 rounded-md cursor-pointer">
      <div
        className="min-w-[90px] min-h-[90px] md:min-w-[130px] md:min-h-[120px] relative"
        onClick={handleClick}
      >
        <Image
          alt={image}
          src={product.image}
          fill
          className="w-[110px] h-[122px] md:w-[162px] md:h-[162px] rounded-lg object-contain"
        />
      </div>
      <div className="w-60" onClick={handleClick}>
        <div className="text-black font-bold text-xl truncate">{title}</div>
      </div>
      <div className="bg-black text-white p-1 rounded-lg w-fit">{category}</div>
      <div className="text-gray-400 font-bold text-md truncate">
        {description}
      </div>
      <div className="text-xl font-bold"> &#36;{price}</div>
      <div className="flex justify-between items-center">
        <CountButton
          count={count}
          decrement={decrement}
          increment={increment}
        />
        <div
          className="bg-black p-1 w-fit text-white rounded-md flex items-center"
          onClick={addToCartfunc}
        >
          <CgMathPlus /> Add to cart
        </div>
      </div>
      <div className="flex items-center gap-1 text-[#FACC15]">
        <FaRegStar className="" />
        <span className="text-black">
          {rating.rate}/{rating.count}
        </span>
      </div>
    </div>
  );
}
