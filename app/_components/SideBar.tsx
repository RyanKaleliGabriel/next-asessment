"use client";
import { XMarkIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import Link from "next/link";
import { useSideBar } from "../_context/SideBarContext";

function SideBar() {
  const { isSideOpen, setSideOpen } = useSideBar();

  if (!isSideOpen) return null;
  return (
    <aside
      className={`fixed  inset-0 bg-white shadow-lg transform ${
        isSideOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-20`}
    >
      <ul className="my-10 px-4">
        <li>
          <button onClick={() => setSideOpen(false)}>
            <XMarkIcon className="h-5 w-5  text-gray-600 hover:text-primary-600" />
          </button>
          <hr className="mt-3" />
        </li>
        <li>
          <hr className="mb-3" />
          <Link href="/" className="hover:text-primary-600 ">
            Products
          </Link>
          <hr className="mt-3" />
        </li>

        <li>
          <hr className="mb-3" />
          <Link href="/" className="hover:text-primary-600 py-4">
            About
          </Link>
          <hr className="mt-3" />
        </li>

        <li>
          <hr className="mb-3" />
          <Link href="/" className="hover:text-primary-600">
            Branches
          </Link>
          <hr className="mt-3" />
        </li>

        <li>
          <hr className="mb-3" />
          <Link href="/" className="hover:text-primary-600">
            Solutions
          </Link>
          <hr className="mt-3" />
        </li>
      </ul>

      <div className="flex justify-center">
        <div className="flex justify-center mt-5 flex-col">
          <Image
            src="/website/logo.png"
            width="80"
            height="80"
            alt="HawkVision Logo"
            quality={100}
            className="mx-auto"
          />
          <span className="text-sm text-gray-950">
            Copyright@{new Date().getFullYear()}
          </span>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
