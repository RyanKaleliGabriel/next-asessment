"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { ReactNode, cloneElement } from "react";
import { useModal } from "../_context/ModalContext";

interface ModalWindowProps {
  children: ReactNode;
  name: string;
}

function ModalWindow({ children, name }: ModalWindowProps) {
  const { openName, close } = useModal();

  if (name !== openName) return null;
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-[#00000005] backdrop-blur-[4px] z-[1000] transition-all duration-[0.5s]">
      <div className="rounded-lg  fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] bg-gray-100 px-[1.2rem] py-[1.2rem] transition-all duration-500 shadow-lg">
       
        <button onClick={close} className="ml-auto absolute p-1 translate-x-3 transition-all duration-200 top-5 right-5 hover:bg-gray-200">
          <XMarkIcon className="w-5 h-5" />
        </button>

        {/* <div>{cloneElement(children, { onCloseModal: close })}</div> */}
        <div>{children}</div>
      </div>
    </div>
  );
}

export default ModalWindow;