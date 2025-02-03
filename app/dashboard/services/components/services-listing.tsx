"use client";

import { MenuIcon, PenIcon, Trash } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Service } from "@prisma/client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { deleteService } from "@/app/dashboard/services/data";
import { useSaveService } from "../hooks/use-save-service";

type ServicesListingProps = {
  services: Service[];
};

export default function ServicesListing({ services }: ServicesListingProps) {
  const router = useRouter();
  const { setService, toggleOpen } = useSaveService();

  const onUpdate = (serviceToUpdate: Service) => {
    setService(serviceToUpdate);
    toggleOpen();
  };

  const onDelete = async (id: string) => {
    if (!confirm("Сигурени ли сте, че искате да премахнете тази услуга?"))
      return;

    try {
      await deleteService(id);
      toast.success("Услугата е премахната");
      router.refresh();
    } catch (error) {
      toast.error("Нещо се обърка");
      console.error("Грешка при запазване:", error);
    } finally {
      setService(undefined);
    }
  };

  return (
    <div className="w-full min-h-screen container mx-auto mt-5 space-y-5">
      {services.length ? (
        <Table className="bg-white border rounded-md shadow text-lg">
          <TableHeader>
            <TableRow>
              <TableHead className="border font-semibold text-black">Услуга</TableHead>
              <TableHead className="border font-semibold text-black">Описание</TableHead>
              <TableHead className="border text-right font-semibold text-black">Опции</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {services.map((service) => (
              <TableRow key={service.id}>
                <TableCell className="border">{service.title}</TableCell>
                <TableCell className="line-clamp-4">
                  {service.description ? (
                    service.description
                  ) : (
                    <div className="text-muted-foreground">Няма описание</div>
                  )}
                </TableCell>
                <TableCell align="right" className="border">
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button variant={"outline"} size={"icon"}>
                        <MenuIcon />
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="space-y-2" align="end">
                      <div>Опции</div>
                      <Button
                        variant={"outline"}
                        className="w-full justify-start"
                        onClick={() => onUpdate(service)}
                      >
                        <PenIcon />
                        <span>Промяна</span>
                      </Button>
                      <Button
                        variant={"outline"}
                        className="text-destructive hover:bg-destructive hover:text-white w-full justify-start"
                        onClick={() => onDelete(service.id)}
                      >
                        <Trash />
                        <span>Изтриване</span>
                      </Button>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <div className="bg-white border rounded-md shadow text-lg p-5 text-center">
          Няма намерени услуги
        </div>
      )}
    </div>
  );
}
