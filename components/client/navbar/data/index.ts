import { navbarItems } from "@/constants";
import { NavbarItem } from "@/components/client/navbar/types";

export const getNavbarItems = async () => {
  const navbarItemsArray = navbarItems as NavbarItem[];
  return navbarItemsArray;
}