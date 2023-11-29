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

export default function Search() {
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
            />
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
