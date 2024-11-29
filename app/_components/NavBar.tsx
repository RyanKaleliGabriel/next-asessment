"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavBar() {
  const pathname = usePathname();
  const links = [
    {
      link: "/categories",
      name: "Products",
      linkState: ["/categories", "/products"],
    },
    { link: "/branches", name: "Branches", linkState: ["/branches"] },
    { link: "/solutions", name: "Solutions", linkState: ["/solutions"] },
  ];
  // some method to check if any of the linkState paths match the beginning of the current pathname.

  return (
    <ul className="text-gray-800 text-sm hidden lg:flex gap-4">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.link}
            className={`${
              link.linkState.some((state) => pathname.startsWith(state))
                ? "text-primary-600 border-b border-primary-600"
                : ""
            } hover:text-primary-600 hover: hover:border-b hover:border-primary-600 transition-all ease-in-out duration-200`}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavBar;
