"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { DivisionArray, DivisionFilterFormProps } from "../_models/division";

function DivisionFilterForm({ divisions }: DivisionFilterFormProps) {
  const [filter, setFilter] = useState("all");
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  function handleFilter(event: React.ChangeEvent<HTMLSelectElement>) {
    event.preventDefault();
    const filter = event.target.value;
    setFilter(filter);
    const params = new URLSearchParams(searchParams);
    params.set("division", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <form>
      <select
        value={filter}
        onChange={handleFilter}
        className="px-2 py-2 bg-white text-gray-600 shadow-sm rounded-md "
      >
        <option value="all">All</option>
        {divisions.map((division) => (
          <option key={division.id} value={division.name}>
            {division.name}
          </option>
        ))}
      </select>
    </form>
  );
}

export default DivisionFilterForm;
