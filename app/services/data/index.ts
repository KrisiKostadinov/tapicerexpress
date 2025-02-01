import { servicesItems } from "@/constants";

export type Service = {
  title: string;
  description: string;
  steps: string[];
  endMessage: string;
};

export const getServices = async () => {
  const services = servicesItems as Service[];
  return services;
};
