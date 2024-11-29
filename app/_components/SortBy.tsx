"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SortOptionsProps } from "../_models/app";
import SelectSort from "./SelectSort";

function SortBy({ options }: SortOptionsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const sortBy = searchParams.get("sortBy") ?? "";

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", event.target.value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="flex gap-5 text-gray-600 text-sm items-center">
      <div>
        <SelectSort value={sortBy} options={options} onChange={handleChange} />
      </div>
    </div>
  );
}

export default SortBy;
