"use client";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Division, DivisionArray } from "../_models/division";

function SideProductNavigation({ divisions }: any) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("division") ?? "all";

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("division", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <aside className="w-[20%] lg:inline hidden ">
      <ul className="mt-12 ">
        <li>
          <Button
            filter="all"
            activeFilter={activeFilter}
            handleFilter={handleFilter}
          >
            <p>All</p>
            <ArrowRightStartOnRectangleIcon className="w-4 h-4 text-gray-700" />
          </Button>
          <hr className="my-4 h-[1px] border-none bg-gray-400" />
        </li>
        {divisions.map((division: Division) => (
          <li key={division.id}>
            <Button
              filter={division.name}
              activeFilter={activeFilter}
              handleFilter={handleFilter}
            >
              <p>{division.name}</p>
              <ArrowRightStartOnRectangleIcon className="w-4 h-4 text-gray-700" />
            </Button>
            <hr className="my-4 h-[1px] border-none bg-gray-400" />
          </li>
        ))}
      </ul>
    </aside>
  );
}

function Button({ filter, handleFilter, activeFilter, children }: any) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`${
        activeFilter === filter ? "text-primary-500 bg-gray-100" : ""
      } hover:bg-gray-100 duration-300 transition-all ease-in-out p-2 rounded-md flex text-sm items-center text-gray-700  justify-between w-full`}
    >
      {children}
    </button>
  );
}

export default SideProductNavigation;
