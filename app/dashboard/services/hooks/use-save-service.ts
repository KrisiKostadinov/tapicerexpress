import { useContext } from "react";

import { SaveServiceContext } from "@/app/dashboard/services/context";

export const useSaveService = () => {
  const context = useContext(SaveServiceContext);

  if (!context) {
    throw new Error(
      "useSaveService must be used within a SaveServiceContext.Provider"
    );
  }

  return context;
};
