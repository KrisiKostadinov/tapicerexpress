"use client";

import { useContext } from "react";
import { PlusIcon } from "lucide-react";

import { SaveServiceContext } from "@/app/dashboard/services/context";
import { Button } from "@/components/ui/button";

export default function PageHeader() {
  const saveServiceContext = useContext(SaveServiceContext);

  const handleOpen = () => {
    saveServiceContext?.toggleOpen();
  }

  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Услуги</h1>
      <Button variant={"outline"} onClick={handleOpen}>
        <PlusIcon />
        <span>Създаване</span>
      </Button>
    </div>
  );
}
