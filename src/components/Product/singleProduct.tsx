"use client";

import { ProductDataType } from "@/types";
import Image from "next/image";
import { CgMathPlus } from "react-icons/cg";
import { FaRegStar } from "react-icons/fa";
import CountButton from "../counter";
import useCount from "@/hooks/useCount";
import { useAppDispatch } from "@/hooks";
import { addToCart } from "@/features/cart.slice";

export default function SingleProductComponent({
  product,
}: {
  product: ProductDataType;
}) {
  const { category, description, id, image, price, rating, title } = product;
  const { count, increment, decrement, isMinCount, isMaxCount } = useCount(
    1,
    1,
    5
  );
  const dispatch = useAppDispatch();

  const addToCartfunc = () => {
    dispatch(
      addToCart({
        ...product,
        quantity: count,
      })
    );
  };

  return (
    <div className="grid grid-cols-1 grid-cols lg:grid-cols-2 p-10">
      <div className="order-last lg:order-1">
        <div className="text-black font-bold text-xl truncate">{title}</div>
        <div className="bg-black text-white p-1 rounded-lg w-fit">
          {category}
        </div>
        <div className="text-gray-400 font-bold text-md truncate">
          {description}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold"> &#36;{price}</div>
          <div className="flex items-center justify-between gap-2">
            <CountButton
              count={count}
              decrement={decrement}
              increment={increment}
            />
            <div
              className="bg-black p-1 w-fit text-white rounded-md cursor-pointer flex items-center gap-2 justify-between"
              onClick={(e) => addToCartfunc()}
            >
              <CgMathPlus /> Add to Cart
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1 text-[#FACC15]">
          <FaRegStar classname="" />{" "}
          <span className="text-black">
            {rating.rate}/{rating.count}
          </span>
        </div>
      </div>
      <div className="min-w-[290px] min-h-[290px] md:min-w-[230px] md:min-h-[220px] relative order-1 lg:order-last">
        <Image
          alt={image}
          src={product.image}
          fill
          className="rounded-lg object-contain"
        />
      </div>
    </div>
  );
}
