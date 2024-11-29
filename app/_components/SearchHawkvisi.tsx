"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

function SearchHawkvisi() {
  const [query, setQuery] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const newQuery = event.target.value;
    setQuery(newQuery);
    const params = new URLSearchParams(searchParams);
    params.set("query", newQuery);
    router.replace(`${pathname}?${params}`, { scroll: false });
  }

  return (
    <div className="w-full my-4">
      <form className="flex justify-end lg:w-[22%] w-[50%] relative">
        <input
          placeholder="Search..."
          className="text-sm  py-1 pl-10 pr-3 w-full rounded-md border border-gray-300 focus:outline-none"
          onChange={handleChange}
          value={query}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="size-3 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            fillRule="evenodd"
            d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
            clipRule="evenodd"
          />
        </svg>
      </form>
    </div>
  );
}

export default SearchHawkvisi;
