import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import DashSideMenuButton from "./DashSideMenuButton";
import Logo from "./Logo";


async function DashNav() {
  return (
    <div className=" px-5 py-4 shadow-sm bg-white">
      <div className=" flex items-center justify-end gap-3 ">
        <div className="mr-auto lg:hidden inline">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div>
          <div className="flex items-center mx-auto gap-2  ">
            {" "}
            <div className="relative w-[40px] h-[40px]">
            </div>
          </div>
        </div>

        <div className="lg:inline hidden ml-4 mr-1">
          <Link href="/">
            <UserIcon className="rounded-md w-8 h-8 text-primary-700 hover:bg-gray-100 duration-200 p-1 ease-in-out transition-all" />
          </Link>
        </div>
        <DashSideMenuButton />
      </div>
    </div>
  );
}

export default DashNav;
