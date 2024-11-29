"use client"

import { ReactNode, createContext, useContext, useState } from "react";

interface MenuContextProps {
  openId: string;
  open: (id: string) => void;
  close: () => void;
  position: { x: number; y: number } | null;
  setPosition: React.Dispatch<
    React.SetStateAction<{ x: number; y: number } | null>
  >;
}

interface MenuProviderProps {
  children: ReactNode;
}

const MenuContext = createContext<MenuContextProps | any>(undefined);

function MenuProvider({ children }: MenuProviderProps) {
  const [openId, setOpenId] = useState("");
  const [position, setPosition] = useState(null);

  const close = () => setOpenId("");
  const open = (id: string) => setOpenId(id);
  return (
    <MenuContext.Provider
      value={{ openId, close, open, position, setPosition }}
    >
      {children}
    </MenuContext.Provider>
  );
}

function useMenuContext() {
  const context = useContext(MenuContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { MenuProvider, useMenuContext };



