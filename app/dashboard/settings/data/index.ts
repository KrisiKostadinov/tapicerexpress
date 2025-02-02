"use server";

import { prisma } from "@/db/prisma";
import { FormSchemaProps } from "@/app/dashboard/settings/components/company-data";

export const updateSettings = async (data: FormSchemaProps) => {
  const updatedSettings = await prisma.companyData.upsert({
    where: { id: "singleton-company-data" },
    update: {
      websiteTitle: data.websiteTitle,
      phoneNumber: data.phoneNumber,
      emailAddress: data.emailAddress,
      physicalAddress: data.physicalAddress,
    },
    create: {
      id: "singleton-company-data",
      websiteTitle: data.websiteTitle,
      phoneNumber: data.phoneNumber,
      emailAddress: data.emailAddress,
      physicalAddress: data.physicalAddress,
    },
  });

  return { message: "Промените са направени", updatedSettings };
};

export const getSettings = async () => {
  const settings = await prisma.settings.findUnique({
    where: { id: "singleton-settings" },
  });

  const companyData = await prisma.companyData.findUnique({
    where: { id: "singleton-company-data" },
  });

  return { settings, companyData };
};