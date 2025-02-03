import { headers } from "next/headers";

import { navbarItems, adminNavbarItems } from "@/constants";
import { NavbarItem } from "@/components/client/navbar/types";
import { auth } from "@/lib/auth";

export const getNavbarItems = async () => {
  const headerList = await headers();
  const pathname = headerList.get("x-current-path");
  const session = await auth();

  if (session?.user && pathname?.startsWith("/dashboard")) {
    // const user = await prisma.user.findFirst({
    //   where: { email: session.user.email },
    //   select: { role: true },
    // });
    const user = {
      role: "ADMIN"
    }

    if (user && user.role === "ADMIN") {
      const adminNavbarItemsArray = adminNavbarItems as NavbarItem[];
      return adminNavbarItemsArray;
    }
  }

  const navbarItemsArray = navbarItems as NavbarItem[];
  return navbarItemsArray;
};
