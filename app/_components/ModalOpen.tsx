"use client";
import { cloneElement } from "react";
import { useModal } from "../_context/ModalContext";

interface ModalOpenProps {
  children: any;
  opens: string;
}

function ModalOpen({ children, opens: opensName }: ModalOpenProps) {
  const { open } = useModal();
  return cloneElement(children, { onClick: () => open(opensName) });
}

export default ModalOpen;