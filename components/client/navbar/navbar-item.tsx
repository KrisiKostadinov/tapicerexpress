"use client";

import { ComponentProps } from "react";
import Link from "next/link";

import type { NavbarItem } from "@/components/client/navbar/types";
import { Button } from "@/components/ui/button";

type NavbarItemProps = {
  item: NavbarItem;
  listItemClassNames?: string;
  buttonClassNames?: string;
} & ComponentProps<"li">;

export function NavbarItem({
  item,
  listItemClassNames,
  buttonClassNames,
  ...props
}: NavbarItemProps) {
  return (
    <Link href={item.href}>
      <li className={listItemClassNames} {...props}>
        <Button className={buttonClassNames} variant={"link"}>{item.name}</Button>
      </li>
    </Link>
  );
}
