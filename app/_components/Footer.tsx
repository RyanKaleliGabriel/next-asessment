import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiTwitterXFill } from "react-icons/ri";

import { LinkIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { getBranches, getCategories, getProducts } from "../_lib/data-service";
import { defaultQuery } from "../_utils/constants";
import Logo from "./Logo";

async function Footer() {
  const categories = await getCategories(defaultQuery);
  const branches = await getBranches(defaultQuery);

  const finalCategories = categories
    .filter((category) => category._count.products > 0)
    .slice(0, 13);

  return (
    <footer className="bg-black mt-24 py-8  ">
      <div className="flex flex-1 flex-col lg:flex-row gap-2  justify-between mx-4 my-6 ">
        <div className="text-white flex items-center ">
          <Logo />
          <h3 className="font-semibold text-lg ">HAWK VISION TECHNOLOGIES</h3>
        </div>

        <div className="text-white flex items-center gap-4">
          <RiTwitterXFill className="text-2xl hover:text-primary-600 duration-200 transition-all ease-in-out" />
          <FaTiktok className="text-2xl hover:text-primary-600 duration-200 transition-all ease-in-out" />
          <FaInstagram className="text-2xl hover:text-primary-600 duration-200 transition-all ease-in-out" />
          <FaFacebookF className="text-2xl hover:text-primary-600 duration-200 transition-all ease-in-out" />
        </div>
      </div>
      <div className="flex md:flex-row flex-col  mx-4 gap-6 flex-1 my-6">
        <div className="text-white">
          <p className="w-[80%]">
            White Ash shopping complex, Munyu Road off Luthuli
          </p>
          <div className="flex items-center gap-3 mt-2 hover:underline">
            <MdEmail className="text-primary-600 text-xl inline-block h-5 w-5" />
            <p className="inline-block">sales@hawkvsion.co.ke</p>
          </div>
          <div className="flex items-center gap-3 mt-2 hover:underline">
            <PhoneIcon className="text-primary-600 text-xl inline-block h-5 w-5" />
            <p className="inline-block">0716 611 311</p>
          </div>
          <div className="flex items-center gap-3 mt-2 hover:underline">
            <PhoneIcon className="text-primary-600 text-xl inline-block h-5 w-5" />
            <p className="inline-block">0799 444 999</p>
          </div>
        </div>
        <div>
          <div>
            <Link href="/" className="font-semibold text-2xl text-white">
              Products
            </Link>
            <div className="flex mt-4 flex-col gap-3 text-gray-500">
              {finalCategories.map((category) => (
                <div
                  key={category.id}
                  className="flex items-center gap-3 hover:text-white transition-all duration-300 ease-in-out"
                >
                  <LinkIcon className="w-5 h-5" />
                  <Link href={`/category/${category.id}`}>{category.name}</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <div>
              <Link href="/" className="font-semibold text-2xl text-white">
                Branches
              </Link>
              <div className="flex mt-4 flex-col gap-3 text-gray-500">
                {branches.map((branch) => (
                  <div
                    key={branch.id}
                    className="flex items-center gap-3 hover:text-white transition-all duration-300 ease-in-out"
                  >
                    <LinkIcon className="w-5 h-5" />
                    <Link href={`/branches/${branch.id}`}>{branch.name}</Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div>
            <div>
              <Link href="/" className="font-semibold text-2xl text-white">
                Useful Links
              </Link>
              <div className="flex mt-4 flex-col gap-3 text-gray-500">
                <div className="flex items-center gap-3 hover:text-white transition-all duration-300 ease-in-out">
                  <LinkIcon className="w-5 h-5" />
                  <Link href="/">Home</Link>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-all duration-300 ease-in-out">
                  <LinkIcon className="w-5 h-5" />
                  <Link href="/categories">Products</Link>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-all duration-300 ease-in-out">
                  <LinkIcon className="w-5 h-5" />
                  <Link href="/branches">Branches</Link>
                </div>
                <div className="flex items-center gap-3 hover:text-white transition-all duration-300 ease-in-out">
                  <LinkIcon className="w-5 h-5" />
                  <Link href="/solutions">Solutions</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border border-t-2 border-gray-500"></div>

      <div className="flex flex-1 justify-between gap-2 m-4">
        <p className="text-white ">
          @{new Date().getFullYear()} HawkVision Technologies. All Rights
          Reserved
        </p>

        <Link
          href="/"
          className="text-gray-500 hover:text-white transition-all duration-300 ease-in-out"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
