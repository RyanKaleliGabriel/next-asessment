import MenuButton from "@/app/_components/MenuButton";
import MenuList from "@/app/_components/MenuList";
import MenuToggle from "@/app/_components/MenuToggle";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { Category, CategoryTableProps } from "../_models/category";
import useCount from "../hooks/useCount";
import usePagedData from "../hooks/usePagedData";
import usePageSortFilter from "../hooks/usePageSortFilter";
import useSortData from "../hooks/useSortData";
import ConfirmDelete from "./ConfirmDelete";
import ModalOpen from "./ModalOpen";
import ModalWindow from "./ModalWindow";
import NoData from "./NoData";
import Pagination from "./Pagination";

function CategoryTable({ searchParams, categories }: CategoryTableProps) {
  const { query, page, filter, sortBy } = usePageSortFilter(searchParams);

  // const operatedCategories = useDataOperations("category", categories, sortBy);
  const sortedData = useSortData(categories, sortBy);

  const count = useCount("category", categories, sortedData, sortBy);
  const displayedCategories = usePagedData(sortedData, page);

  if (!displayedCategories || displayedCategories.length === 0) {
    return <NoData>No Categories available</NoData>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md w-full py-4 px-5 my-8">
      <table className="w-full text-center">
        <thead>
          <tr className=" text-[15px]">
            <th>Category No.</th>
            <th>Name</th>
            <th>No. Products</th>
          </tr>
          <tr>
            <td colSpan={8}>
              <hr className="border-gray-200 my-2" />
            </td>
          </tr>
        </thead>
        <tbody>
          {displayedCategories.map((category: Category) => (
            <React.Fragment key={category.id}>
              <tr className="text-sm text-gray-500">
                <td>{category.id} </td>
                <td>{category.name} </td>
                <td>{category._count.products}</td>
                <td className="relative">
                  <MenuToggle id={category.id} />
                  <MenuList id={category.id}>
                    <div className="flex items-center text-sm gap-4 px-4 py-2 w-full hover:bg-gray-200 transition-all ease-in-out ">
                      <PencilIcon className="w-4 h-4" />
                      <Link href={`/hawkvisi/category/${category.id}`}>
                        Edit
                      </Link>
                    </div>
                    <ModalOpen opens={`delete-${category.id}`}>
                      <MenuButton icon={<TrashIcon className="w-4 h-4" />}>
                        Delete
                      </MenuButton>
                    </ModalOpen>
                  </MenuList>

                  <ModalWindow name={`delete-${category.id}`}>
                    <ConfirmDelete
                      resourceName="Category"
                      id={category.id}
                      name={category.name}
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

export default CategoryTable;
