"use client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { SortOptionsProps } from "../_models/app";
import SelectSort from "./SelectSort";

function FilterByRecord({ options }: SortOptionsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const filter = searchParams.get("filter") ?? "";

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const params = new URLSearchParams(searchParams);
    params.set("filter", event.target.value);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }
  return (
    <div className="flex gap-5 text-gray-600 text-sm items-center">
      <div>
        <SelectSort value={filter} options={options} onChange={handleChange} />
      </div>
    </div>
  );
}

export default FilterByRecord;
