"use client";

import Link from "next/link";
import type { NavbarItem } from "@/components/client/navbar/types";
import { Button } from "@/components/ui/button";
import { ComponentProps } from "react";
import { usePathname } from "next/navigation";

type NavbarItemProps = {
  item: NavbarItem;
  classes?: string;
  buttonClasses?: string;
} & ComponentProps<"li">;

export function NavbarItem({ item, classes, buttonClasses, ...props }: NavbarItemProps) {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <Link href={item.href}>
      <li className={classes} {...props}>
        <Button variant={!isActive(item.href) ? "link" : "secondary"} className={buttonClasses}>
          {item.name}
        </Button>
      </li>
    </Link>
  );
}