"use client";

import { NavbarItem as NavbarItemType } from "@/components/client/navbar/types";
import { NavbarItem } from "@/components/client/navbar/navbar-item";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

type NavbarItemsProps = {
  navbarItems: NavbarItemType[];
};

export default function NavbarDesktopItems({ navbarItems }: NavbarItemsProps) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <nav>
      <ul className="flex gap-1">
        {navbarItems.length ? (
          navbarItems.map((navbarItem, index) => (
            <NavbarItem
              key={index}
              item={navbarItem}
              className={cn("rounded", isActive(navbarItem.href) ? "bg-gray-100" : "")}
            />
          ))
        ) : (
          <div>Няма елементи</div>
        )}
      </ul>
    </nav>
  );
}