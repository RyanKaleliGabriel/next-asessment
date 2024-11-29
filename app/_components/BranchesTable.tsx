"use client";
import MenuButton from "@/app/_components/MenuButton";
import MenuList from "@/app/_components/MenuList";
import MenuToggle from "@/app/_components/MenuToggle";
import { CategoryDescription } from "@/app/_utils/Product";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Branch, BranchesTableProps } from "../_models/branch";
import useCount from "../hooks/useCount";
import useFilterData from "../hooks/useFilterData";
import usePagedData from "../hooks/usePagedData";
import usePageSortFilter from "../hooks/usePageSortFilter";
import ConfirmDelete from "./ConfirmDelete";
import ModalOpen from "./ModalOpen";
import ModalWindow from "./ModalWindow";
import NoData from "./NoData";
import Pagination from "./Pagination";

function BranchesTable({ searchParams, branches }: BranchesTableProps) {
  const { query, page, filter, sortBy } = usePageSortFilter(
    searchParams,
    "branch"
  );

  // const operatedBranches = useDataOperations("branch", branches, filter);
  const filteredData = useFilterData(branches, filter, "branch");
  const count = useCount("branch", branches, filteredData, filter);
  const displayedBranches = usePagedData(filteredData, page);

  if (!displayedBranches || displayedBranches.length === 0) {
    return <NoData>No Branches available</NoData>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md w-full py-4 px-5 my-8">
      <table className="w-full text-center">
        <thead>
          <tr className=" text-[15px]">
            <th></th>
            <th>Name</th>
            <th>Location</th>
            <th className="lg:table-cell hidden">Email</th>
            <th className="lg:table-cell hidden">Phone No.</th>
            <th className="lg:table-cell hidden">County</th>
          </tr>
          <tr>
            <td colSpan={8}>
              <hr className="border-gray-200 my-2" />
            </td>
          </tr>
        </thead>
        <tbody>
          {displayedBranches.map((branch: Branch) => (
            <React.Fragment key={branch.id}>
              <tr className="text-sm text-gray-500">
                <td className="relative w-[45px] h-[45px] ">
                  <Image
                    fill
                    src={`/uploads/branch/${branch.image_url}`}
                    alt="Profile"
                    className="object-cover rounded-full"
                  />
                </td>
                <td>{branch.name}</td>
                <td>{CategoryDescription(branch.location)}</td>
                <td className="lg:table-cell hidden">{branch.email}</td>
                <td className="lg:table-cell hidden">{branch.phone}</td>
                <td className="lg:table-cell hidden">{branch.county}</td>
                <td className="">
                  <MenuToggle id={branch.id} />
                  <MenuList id={branch.id}>
                    <div className="flex items-center text-sm gap-4 px-4 py-2 w-full hover:bg-gray-200 transition-all ease-in-out ">
                      <PencilIcon className="w-4 h-4" />
                      <Link href={`/hawkvisi/branches/${branch.id}`}>Edit</Link>
                    </div>
                    <ModalOpen opens={`delete-${branch.id}`}>
                      <MenuButton icon={<TrashIcon className="w-4 h-4" />}>
                        Delete
                      </MenuButton>
                    </ModalOpen>
                  </MenuList>
                  <ModalWindow name={`delete-${branch.id}`}>
                    <ConfirmDelete
                      resourceName="Branch"
                      name={branch.name}
                      id={branch.id}
                    />
                  </ModalWindow>
                </td>
              </tr>
              <tr>
                <td colSpan={8}>
                  <hr className="border-gray-200 my-2" />
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <Pagination count={count} />
    </div>
  );
}

export default BranchesTable;
