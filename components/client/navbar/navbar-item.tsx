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

export function NavbarItem({
  item,
  classes,
  ...props
}: NavbarItemProps) {
  return (
    <Link href={item.href}>
      <li className={classes} {...props}>
        <Button variant={"link"}>{item.name}</Button>
      </li>
    </Link>
  );
}