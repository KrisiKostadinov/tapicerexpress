"use server";

import { prisma } from "@/db/prisma";
import { Service } from "@prisma/client";
import { FormSchemaProps } from "@/app/dashboard/services/components/service-save";

export const createService = async (data: FormSchemaProps, steps: string[]) => {
  const createdService = await prisma.service.create({
    data: { ...data, steps },
  });

  return { message: "Услугата е добавена", createdService };
};

export const deleteService = async (id: string) => {
  const deletedService = await prisma.service.delete({
    where: { id },
  });

  if (!deletedService) {
    return { error: "Тази услуга не е намерена" };
  }

  return { message: "Услугата е премахната", deletedService };
};

export const updateService = async (
  id: string,
  data: FormSchemaProps,
  steps: string[]
) => {
  const updatedService = await prisma.service.update({
    where: { id },
    data: { ...data, steps },
  });

  return { message: "Услугата е променена", updatedService };
};

export const getServices = async (sort: "asc" | "desc") => {
  const services: Service[] = await prisma.service.findMany({
    orderBy: { createdAt: sort },
  });

  return services;
};
