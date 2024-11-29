import Image from "next/image";
import { ReactNode } from "react";

interface NoDataProps {
  children: ReactNode;
}

function NoData({ children }: NoDataProps) {
  return (
    <div className="flex items-center justify-center flex-col bg-white rounded-lg shadow-md w-full py-4 px-5 my-8">
      <div className=" w-[400px] h-[300px] relative">
        <Image
          fill
          alt="No Data"
          src="/website/nodata.png"
          className=" object-cover"
        />
      </div>
      <p className="text-gray-500">{children}</p>
    </div>
  );
}

export default NoData;
