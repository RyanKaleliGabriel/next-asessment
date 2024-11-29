"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { FilterByManufacturerProps } from "../_models/manufacturer";
import { ButtonFilterProduct } from "../_models/product";

function FilterByManufacturer({ manufacturers }: FilterByManufacturerProps) {
  // useSearchParams is a Client Component hook that lets you read the current URL's query string.
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("manufacturer") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("manufacturer", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex lg:gap-3 bg-white lg:px-4 lg:py-2 p-1 border shadow-sm rounded-md md:w-[50%] lg:w-full  ">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All
      </Button>

      {manufacturers.map((manufacturer) => (
        <Button
          key={manufacturer.id}
          filter={manufacturer.name}
          handleFilter={handleFilter}
          activeFilter={activeFilter}
        >
          {manufacturer.name}
        </Button>
      ))}
    </div>
  );
}

function Button({
  filter,
  handleFilter,
  activeFilter,
  children,
}: ButtonFilterProduct) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`${
        filter === activeFilter ? "text-white bg-primary-500" : ""
      } px-2 py-1 rounded-md text-gray-500 hover:text-white hover:bg-primary-600 transition-all duration-200 ease-in-out `}
    >
      {children}
    </button>
  );
}

export default FilterByManufacturer;
