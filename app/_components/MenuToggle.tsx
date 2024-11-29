"use client";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { useMenuContext } from "../_context/MenuContext";
import React from "react";

interface MenuToggleProps {
  id: number;
}

function MenuToggle({ id }: MenuToggleProps) {
  const { openId, position, setPosition, open, close } = useMenuContext();

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();
    const button = e.currentTarget as HTMLElement;
    const rect = button.getBoundingClientRect();
    setPosition({
      x: rect.left,
      y: rect.bottom + 8,
    });
    console.log(position);
    openId === "" || openId !== id ? open(id) : close;
  }

  return (
    <button
      onClick={handleClick}
      className="hover:bg-gray-100 rounded-md transform mr-4 translate-x-[0.2rem] duration-300 ease-in-out transition-all p-1 "
    >
      <EllipsisVerticalIcon className="h-5 w-5" />
    </button>
  );
}

export default MenuToggle;
