"use client";
import { MapPinIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import useFilterData from "../hooks/useFilterData";
import usePageSortFilter from "../hooks/usePageSortFilter";
import { Branch } from "../_models/branch";

function BranchList({ searchParams, branches }: any) {
  const { page, filter, sortBy } = usePageSortFilter(searchParams, "branch");

  const operatedBranches = useFilterData(branches, filter, "branches");

  return (
    <div>
      <div className="flex flex-1 flex-wrap ">
        {operatedBranches.map((branch: Branch) => (
          <div key={branch.name} className="flex flex-1 my-4 flex-col px-4">
            <div className="relative h-[300px] w-[300px]">
              <Image
                src={`/uploads/branch/${branch.image_url}`}
                alt=""
                quality={100}
                layout="fill"
                className="object-cover rounded-md"
              />
            </div>
            <div className="w-[300px]">
              <div className="h-[90px] ">
                <div className="flex gap-2 items-center ">
                  <MapPinIcon className="h-4 w-4 bg-primary-00 text-primary-600 rounded-lg   " />
                  <h3 className=" font-semibold my-3 text-md">{branch.name}</h3>
                </div>

                <p className="text-gray-500 text-sm">{branch.location}</p>
              </div>

              <div className="mt-3 flex gap-2 items-center ">
                <Link
                  href={`/branches/${branch.id}`}
                  className="ml-auto text-sm text-primary-600 hover:underline inline-block duration-300 transition-all ease-in-out"
                >
                  More&rarr;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BranchList;
