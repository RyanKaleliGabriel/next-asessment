"use client";
import { ReactNode } from "react";
import { useMenuContext } from "../_context/MenuContext";

interface MenuButtonProps {
  children: ReactNode;
  icon: any;
}

function MenuButton({ children, icon }: MenuButtonProps) {
  const { close } = useMenuContext();

  function handleClick() {
    close();
  }
  return (
    <button
      className="flex items-center text-sm gap-4 px-4 py-2 w-full hover:bg-gray-200 transition-all ease-in-out "
      onClick={handleClick}
    >
      {icon}
      {children}
    </button>
  );
}

export default MenuButton;
