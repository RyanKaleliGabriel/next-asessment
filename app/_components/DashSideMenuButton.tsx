"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useDashSide } from "../_context/DashSideContext";

function DashSideMenuButton() {
  const { isOpen, setIsOpen } = useDashSide();
  return (
    <button className="inline lg:hidden" onClick={() => setIsOpen(!isOpen)}>
      {!isOpen && (
        <Bars3Icon className="h-5 w-5 text-gray-600 hover:text-primary-600" />
      )}
      {isOpen && (
        <XMarkIcon className="h-5 w-5 text-gray-600 hover:text-primary-600" />
      )}
    </button>
  );
}

export default DashSideMenuButton;
