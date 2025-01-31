import { createContext } from "react";

interface NavbarContextProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

export const NavbarContext = createContext<NavbarContextProps | undefined>(
  undefined
);