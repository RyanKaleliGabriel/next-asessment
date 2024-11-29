import { Toaster } from "react-hot-toast";
import { DashSideProvider } from "../_context/DashSideContext";
import DashNav from "./DashNav";
import DashSide from "./DashSide";
import DashSideMenu from "./DashSideMenu";
import { ReactNode } from "react";

function DashLayout({ children }: { children: ReactNode }) {
  return (
    <DashSideProvider>
      <div className="flex h-screen overflow-hidden ">
        <div className="fixed top-0 left-0 w-full z-50">
          <DashNav />
        </div>
        <div className="flex bg-gray-100 w-full">
          <div className="fixed top-0 left-0 shadow-md  bg-white h-full z-50 hidden lg:inline">
            <DashSide />
          </div>
          <main className="flex-grow my-20 lg:ml-56 w-full">
            <DashSideMenu />
            <div className="overflow-scroll h-screen pt-[1rem] pb-[7rem] lg:px-8 px-2 px-auto mt-[1rem]">
              {children}
            </div>
          </main>
        </div>
      </div>
    </DashSideProvider>
  );
}

export default DashLayout;
