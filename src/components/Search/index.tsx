import { FaSearch } from "react-icons/fa";
import { Menu, MenuButton, MenuList, MenuItem, Input } from "@chakra-ui/react";
import { ProductDataType } from "@/types";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Search({
  productData,
}: {
  productData: ProductDataType[];
}) {
  const [products, setProducts] = useState<ProductDataType[]>(productData);
  const [searchedWord, setSearchedWord] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchedWord(e.target.value);
  };

  return (
    <div>
      <Menu>
        <MenuButton>
          <span className="flex items-center gap-2">
            <FaSearch /> Search
          </span>
        </MenuButton>

        <MenuList>
          <MenuItem closeOnSelect={false}>
            <Input
              placeholder="Search your product"
              className="p-2"
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => handleChange(e)}
            />
          </MenuItem>
          <MenuItem>
            <div className="flex flex-col h-80 overflow-scroll overflow-x-hidden">
              {searchedWord &&
                products
                  .filter((product) =>
                    product.title.toLowerCase().includes(searchedWord)
                  )
                  .map((product) => (
                    <Link
                      href="/dashboard/products"
                      className="w-60 flex justify-between items-center hover:bg-slate-400 transition-all"
                    >
                      <div>
                        <Image
                          width={200}
                          height={200}
                          alt=""
                          src={product.image}
                          className="min-w-20 max-w-20 w-20 h-20 object-cover"
                        />
                      </div>
                      <div className="truncate">{product.title}</div>
                    </Link>
                  ))}
            </div>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
