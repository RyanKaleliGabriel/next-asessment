"use client";

import { ReactNode, createContext, useContext, useState } from "react";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalContextProps {
  openName: string;
  open: (name: string) => void;
  close: () => void;
}
const ModalContext = createContext<ModalContextProps | any>(undefined);

function ModalProvider({ children }: ModalProviderProps) {
  const [openName, setOpenName] = useState("");
  const close = () => setOpenName("");
  const open = (name: string) => setOpenName(name);
  return (
    <ModalContext.Provider value={{ openName, setOpenName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined)
    throw new Error("Context was used outside provider");
  return context;
}

export { useModal, ModalProvider };
