"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

interface NoDataProps {
  children: ReactNode;
}

function NoDataLanding({ children }: NoDataProps) {
  const router = useRouter();
  function handleClick() {
    router.back();
  }
  return (
    <div className=" h-screen flex items-center justify-center flex-col bg-white rounded-lg shadow-md w-full py-4 px-5 my-8">
      <div className=" w-[400px] h-[300px] relative">
        <Image
          fill
          alt="No Data"
          src="/website/nodata.png"
          className=" object-cover"
        />
      </div>
      <p className="text-gray-500">{children}</p>
      <button
        className="text-sm bg-primary-600 py-1 px-2 rounded-md text-white my-4 hover:bg-primary-700 transition-all ease-in-out duration-200"
        onClick={handleClick}
      >
      Go Back
      </button>
    </div>
  );
}

export default NoDataLanding;
