"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { ScaleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useSearchForm } from "../_context/SearchFormContext";
import { useSideBar } from "../_context/SideBarContext";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { useProductComparison } from "../_context/ProductComparisonContext";
import { useEffect } from "react";
import ProductNav from "./ProductNav";

function Header({ productsComp }: any) {
  const { isFormOpen, setFormOpen } = useSearchForm();
  const { isSideOpen, setSideOpen } = useSideBar();

  const { products, setProducts } = useProductComparison();
  useEffect(() => {
    if (productsComp) {
      const productIds = productsComp.map((product: any) => product.id);
      setProducts([...productIds]);
    }
  }, [setProducts, productsComp]);
  if (isSideOpen) return null;

  return (
    <header
      className={`${
        isFormOpen ? "justify-center" : "justify-between"
      } flex items-center w-full shadow-md fixed top-0 z-50 bg-white`}
    >
      <div className="flex items-center text-md px-8 py-4 w-full text-gray-800">
        <Link href="/">
          <Logo />
        </Link>
        <h4 className="text-2xl text-gray-700 font-semibold">
          Hawk Vision Technologies.
        </h4>
        {/* <ProductNav /> */}
      </div>

      {/* {isFormOpen && <SearchForm />} */}

      <div className="flex items-center gap-4 px-8 py-4 ">
        <NavBar />
        <ul className="flex gap-2">
          <Link href="/products/compare">
            <li>
              <button
                onClick={() => setFormOpen(true)}
                className="flex items-center gap-1"
              >
                <ScaleIcon className="h-5 w-5 text-gray-600 hover:text-primary-600" />
                <p className="text-sm bg-primary-700 rounded-full py-1 px-2 text-white">
                  {products.length}
                </p>
              </button>
            </li>
          </Link>
          <li className=" lg:hidden">
            <button onClick={() => setSideOpen(true)}>
              <Bars3Icon className="h-5 w-5 text-gray-600 hover:text-primary-600" />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
