"use client";

import { ReactNode, useState } from "react";
import { SaveServiceContext } from "@/app/dashboard/services/context";
import { Service } from "@prisma/client";

type ClientPageProps = {
  children: ReactNode;
};

export default function ClientPage({ children }: ClientPageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [service, setService] = useState<Service | undefined>();

  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <SaveServiceContext.Provider
      value={{ isOpen, toggleOpen, service, setService }}
    >
      <div className="container mx-auto mt-5 max-md:px-5">{children}</div>
    </SaveServiceContext.Provider>
  );
}