"use client";
import { Menu, MenuButton, MenuList, MenuItem, Input } from "@chakra-ui/react";
import { SessionData } from "@/types";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";

export default function ProfileComponent({ user }: { user?: SessionData }) {
  const router = useRouter();
  const toast = useToast();
  const handleLogout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
      });
      toast({
        title: "Logout Successful",
        description: "",
        status: "success",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
      window.location.href = "/";
      // router.push("/");
    } catch (error: any) {
      toast({
        title: "There was some issue",
        description: error.message ?? "",
        status: "error",
        duration: 5000,
        position: "top",
        isClosable: true,
      });
    }
  };
  return (
    <div>
      <Menu>
        <MenuButton>
          <span className="flex items-center gap-2">
            <CgProfile /> {user?.username}
          </span>
        </MenuButton>

        <MenuList>
          <MenuItem>
            <Link href="/dashboard/order-history">Order History</Link>
          </MenuItem>
          <MenuItem>
            <div onClick={handleLogout}>Logout</div>
          </MenuItem>
        </MenuList>
      </Menu>
    </div>
  );
}
