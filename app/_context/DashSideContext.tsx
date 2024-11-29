"use client";

import { createContext, ReactNode, useContext, useState } from "react";
interface SideBarProviderProps {
  children: ReactNode;
}

const DashSideContext = createContext<
  | {
      isOpen: boolean;
      setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    }
  | undefined
>(undefined);

function DashSideProvider({ children }: SideBarProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DashSideContext.Provider value={{ isOpen, setIsOpen }}>
     {children}
    </DashSideContext.Provider>
  );
}

function useDashSide() {
  const context = useContext(DashSideContext);
  if (context === undefined) {
    throw new Error("Context was used outside provider");
  }
  return context;
}

export { useDashSide, DashSideProvider };
