"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { NavbarItem as NavbarItemType } from "@/components/client/navbar/types";
import { NavbarItem } from "@/components/client/navbar/navbar-item";

type NavbarItems = {
  navbarItems: NavbarItemType[];
};

export default function NavbarMobileItems({ navbarItems }: NavbarItems) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {!isOpen && (
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => setIsOpen(true)}
        >
          <MenuIcon />
        </Button>
      )}
      <nav
        className={cn(
          "fixed right-0 top-0 sm:w-4/12 w-8/12 h-screen bg-white border shadow transition-transform duration-500 z-40",
          !isOpen && "translate-x-full"
        )}
      >
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3"
        >
          <XIcon />
        </Button>
        <div className="text-xl font-semibold py-3 px-5">Навигация</div>
        <Separator />
        <nav>
          <ul className="flex flex-col gap-1 pt-2.5">
            {navbarItems.map((navbarItem, index) => (
              <NavbarItem
                item={navbarItem}
                key={index}
                classes={cn(
                  "w-full hover:bg-gray-100 cursor-pointer",
                  isActive(navbarItem.href) ? "bg-gray-100" : "",
                )}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </ul>
        </nav>
      </nav>
    </>
  );
}
