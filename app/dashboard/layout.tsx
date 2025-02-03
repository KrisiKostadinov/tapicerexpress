import { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="w-full min-h-screen container mx-auto mt-5 space-y-5">
      {children}
    </main>
  );
}
