import { createContext, Dispatch, SetStateAction } from "react";

import { Service } from "@prisma/client";

export const SaveServiceContext = createContext<{
  isOpen: boolean;
  service: Service | undefined;
  toggleOpen: () => void;
  setService: Dispatch<SetStateAction<Service | undefined>>;
}>({
  isOpen: false,
  service: undefined,
  toggleOpen: () => {},
  setService: () => {},
});
