"use client";

import { useState, createContext, useContext, ReactNode } from "react";

interface SideBarProviderProps {
  children: ReactNode;
}

const SideBarContext = createContext<{isSideOpen:boolean; setSideOpen: React.Dispatch<React.SetStateAction<boolean>>} | undefined>(undefined);

function SideBarProvider({ children }: SideBarProviderProps) {
  const [isSideOpen, setSideOpen] = useState(false);
  return (
    <SideBarContext.Provider value={{ isSideOpen, setSideOpen }}>
      {children}
    </SideBarContext.Provider>
  );
}

function useSideBar() {
  const context = useContext(SideBarContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { useSideBar, SideBarProvider };
