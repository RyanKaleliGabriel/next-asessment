"use client";
import React, { ReactNode } from "react";
import { useMenuContext } from "../_context/MenuContext";
import { useOutsideClick } from "../hooks/useOutsideClick";

interface MenuListProps {
  children: ReactNode;
  id: number;
}

function MenuList({ children, id }: MenuListProps) {
  const { openId, position, close } = useMenuContext();
  const ref = useOutsideClick(
    close,
    false
  ) as React.MutableRefObject<HTMLUListElement | null>;

  if (openId !== id) return null;
  return (
    <ul
      ref={ref}
      className={`absolute z-50 bg-gray-100 shadow-md flex flex-col gap-2 right-[${
        position?.x ?? 0
      }px] top-[${position?.y ?? 0}px  `}
    >
      {children}
    </ul>
  );
}

export default MenuList;
