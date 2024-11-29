"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { PAGE_SIZE } from "../_utils/constants";
import { PaginationProps } from "../_models/app";

function Pagination({ count }: PaginationProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const params = new URLSearchParams(searchParams);
    const next = currentPage === pageCount ? currentPage : currentPage + 1;
    params.set("page", next.toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  function prevPage() {
    const params = new URLSearchParams(searchParams);
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    params.set("page", prev.toString());
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-between">
      <div>
        <p className="text-sm ">
          Showing{" "}
          <span className="font-semibold">
            {(currentPage - 1) * PAGE_SIZE + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold">
            {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
          </span>{" "}
          of <span className="font-semibold">{count}</span> results
        </p>
      </div>
      <div className="flex items-center gap-3 text-sm">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="flex items-center hover:bg-primary-600 px-2 py-1 rounded-md hover:text-white transition-all duration-300 ease-in-out"
        >
          <ChevronLeftIcon className="w-5 h-5" />
          <p>Previous</p>
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          className="flex items-center hover:bg-primary-600 transition-all duration-300 ease-in-out px-2 py-1 rounded-md hover:text-white "
        >
          <p>Next</p>
          <ChevronRightIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
