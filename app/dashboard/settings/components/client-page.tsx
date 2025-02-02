"use client";

import { ReactNode } from "react";

type ClientPageProps = {
  children: ReactNode;
};

export default function ClientPage({ children }: ClientPageProps) {
  return (
    <div className="w-full min-h-screen container mx-auto mt-5 space-y-5">
      {children}
    </div>
  );
}
