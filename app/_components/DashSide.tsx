"use client";
import {
  BuildingOffice2Icon,
  CircleStackIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";

const links = [
  {
    name: "Products",
    icon: <CircleStackIcon />,
    url: "/products",
  },
  {
    name: "Shops",
    icon: <BuildingOffice2Icon />,
    url: "/shops",
  },
];

function DashSide() {
  const pathname = usePathname();
  return (
    <aside className="h-screen flex flex-col  py-12 px-8 ">
      <div className="flex justify-center">
        <Link href="/hawkvisi">
          <Logo />
        </Link>
      </div>

      <div className="flex justify-center ">
        <div className="">
          <div
            className={`py-2 px-2 rounded-md flex my-7 items-center gap-5 hover:text-primary-600 hover:bg-gray-100 duration-300 transition-all ease-in-out ${
              pathname === "/hawkvisi" ? "bg-gray-100" : ""
            }`}
          >
            <i
              className={`w-5 h-5 ${
                pathname === "/hawkvisi" ? "text-primary-600 " : ""
              }`}
            >
              <HomeIcon />
            </i>
            <Link href="/hawkvisi" className="text-sm text-gray-500">
              Home
            </Link>
          </div>
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
                className={`w-5 h-5 ${
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
    </aside>
  );
}

export default DashSide;
