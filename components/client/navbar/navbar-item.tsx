"use client";

import { ComponentProps } from "react";
import Link from "next/link";

import type { NavbarItem } from "@/components/client/navbar/types";
import { Button } from "@/components/ui/button";

type NavbarItemProps = {
  item: NavbarItem;
  classes?: string;
  buttonClasses?: string;
} & ComponentProps<"li">;

export function NavbarItem({ item, classes, buttonClasses, ...props }: NavbarItemProps) {
  return (
    <li className={classes} {...props}>
      <Link href={item.href}>
        <Button variant={"link"}>
          {item.name}
        </Button>
      </Link>
    </li>
  );
}
