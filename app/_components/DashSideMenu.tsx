"use client";

import {
  BuildingOffice2Icon,
  CircleStackIcon,
  GlobeAmericasIcon,
  RectangleGroupIcon,
  RectangleStackIcon,
  UserIcon
} from "@heroicons/react/24/solid";
import "animate.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDashSide } from "../_context/DashSideContext";
import { useOutsideClick } from "../hooks/useOutsideClick";
import LogOutLink from "./LogOutLink";

const links = [
  {
    name: "Products",
    icon: <CircleStackIcon />,
    url: "/hawkvisi/products",
  },
  {
    name: "Category",
    icon: <RectangleGroupIcon />,
    url: "/hawkvisi/category",
  },
  {
    name: "Category Division",
    icon: <RectangleStackIcon />,
    url: "/hawkvisi/division",
  },
  {
    name: "Manufacturers",
    icon: <BuildingOffice2Icon />,
    url: "/hawkvisi/manufacturer",
  },
  {
    name: "Branches",
    icon: <GlobeAmericasIcon />,
    url: "/hawkvisi/branches",
  },
];

const linkstwo = [
  {
    name: "Admins",
    icon: <UserIcon />,
    url: "/hawkvisi/admins",
  },
];

function DashSideMenu() {
  const pathname = usePathname();

  const { isOpen, setIsOpen } = useDashSide();
  const ref = useOutsideClick(close, false);
  function close() {
    setIsOpen(false);
  }

  if (!isOpen) return null;
  return (
    <aside
      ref={ref}
      className="animate__animated animate__fadeInLeft  lg:hidden flex flex-col  py-12 px-8  bg-gray-50 mt-[5.4rem] z-50 sm:w-[60%] md:w-[46%] text-white h-screen fixed top-0 left-0"
    >
      <div className="flex justify-center ">
        <div className="w-full">
          {links.map((link) => (
            <div
              key={link.name}
              className={`py-2 px-2 rounded-md flex my-7 items-center gap-5 hover:text-primary-600 hover:bg-gray-100 duration-300 transition-all ease-in-out ${
                pathname === link.url || pathname.startsWith(link.url)
                  ? "bg-gray-100"
                  : ""
              }`}
            >
              <i
                className={`w-5 h-5 text-primary-400 ${
                  pathname === link.url || pathname.startsWith(link.url)
                    ? "text-primary-600 "
                    : ""
                }`}
              >
                {link.icon}
              </i>
     
                <Link href={link.url} className="text-sm text-gray-500">
                  {link.name}
                </Link>
            
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-auto mb-[3rem]">
        <div className="w-full">
          {linkstwo.map((link) => (
            <div
              key={link.name}
              className={`py-2 px-2 rounded-md flex my-7 items-center gap-5 hover:text-primary-600 hover:bg-gray-100 duration-300 transition-all ease-in-out ${
                pathname === link.url || pathname.startsWith(link.url)
                  ? "bg-gray-100"
                  : ""
              }`}
            >
              <i
                className={`w-5 h-5 text-primary-400 ${
                  pathname === link.url || pathname.startsWith(link.url)
                    ? "text-primary-600 "
                    : ""
                }`}
              >
                {link.icon}
              </i>

                <Link href={link.url} className="text-sm text-gray-500">
                  {link.name}
                </Link>
          
            </div>
          ))}
          <LogOutLink />
        </div>
      </div>
    </aside>
  );
}

export default DashSideMenu;
