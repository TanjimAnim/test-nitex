import { FaSearch } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Input,
} from "@chakra-ui/react";
import { ProductDataType } from "@/types";
import { useState } from "react";

export default async function Search({
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
              placeholder="search here...."
              className="p-2"
              onClick={(e) => e.stopPropagation()}
              onChange={(e) => handleChange(e)}
            />
          </MenuItem>
          <MenuItem>
            {products && (
              <>
                {products.filter((product) => (
                  <div>{product.title}</div>
                ))}
              </>
            )}
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
