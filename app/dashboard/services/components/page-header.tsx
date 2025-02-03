"use client";

import { PlusIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useSaveService } from "../hooks/use-save-service";

export default function PageHeader() {
  const { setService, toggleOpen } = useSaveService();

  const handleOpen = () => {
    setService(undefined);
    toggleOpen();
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
