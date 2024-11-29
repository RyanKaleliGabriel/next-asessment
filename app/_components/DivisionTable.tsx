import MenuButton from "@/app/_components/MenuButton";
import MenuList from "@/app/_components/MenuList";
import MenuToggle from "@/app/_components/MenuToggle";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { Division, DivisionTableProps } from "../_models/division";
import useCount from "../hooks/useCount";
import usePagedData from "../hooks/usePagedData";
import usePageSortFilter from "../hooks/usePageSortFilter";
import useSortData from "../hooks/useSortData";
import ConfirmDelete from "./ConfirmDelete";
import ModalOpen from "./ModalOpen";
import ModalWindow from "./ModalWindow";
import NoData from "./NoData";
import Pagination from "./Pagination";

function DivisionTable({ searchParams, divisions }: DivisionTableProps) {
  const { query, page, filter, sortBy } = usePageSortFilter(searchParams);

  // const operatedDivisions = useDataOperations("division", divisions, sortBy);
  const operatedDivisions = useSortData(divisions, sortBy);

  const count = useCount("division", divisions, operatedDivisions, sortBy);
  const displayedDivisions = usePagedData(operatedDivisions, page);

  if (!displayedDivisions || displayedDivisions.length === 0) {
    return <NoData>No category divisions available</NoData>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md w-full py-4 px-5 my-8">
      <table className="w-full text-center">
        <thead>
          <tr className=" text-[15px]">
            <th>Division No.</th>
            <th>Name</th>
            <th>Category</th>
            <th>No. Products</th>
          </tr>
          <tr>
            <td colSpan={8}>
              <hr className="border-gray-200 my-2" />
            </td>
          </tr>
        </thead>
        <tbody>
          {displayedDivisions.map((division: Division) => (
            <>
              <tr className="text-sm text-gray-500">
                <td>{division.id}</td>
                <td>{division.name}</td>
                <td>{division.category.name}</td>
                <td>{division._count.products}</td>
                <td>
                  <MenuToggle id={division.id} />
                  <MenuList id={division.id}>
                    <div className="flex items-center text-sm gap-4 px-4 py-2 w-full hover:bg-gray-200 transition-all ease-in-out ">
                      <PencilIcon className="w-4 h-4" />
                      <Link href={`/hawkvisi/division/${division.id}`}>
                        Edit
                      </Link>
                    </div>
                    <ModalOpen opens={`delete-${division.id}`}>
                      <MenuButton icon={<TrashIcon className="w-4 h-4" />}>
                        Delete
                      </MenuButton>
                    </ModalOpen>
                  </MenuList>
                  <ModalWindow name={`delete-${division.id}`}>
                    <ConfirmDelete
                      resourceName="Division"
                      id={division.id}
                      name={division.name}
                    />
                  </ModalWindow>
                </td>
              </tr>
              <tr>
                <td colSpan={8}>
                  <hr className="border-gray-200 my-2" />
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>

      <Pagination count={count} />
    </div>
  );
}

export default DivisionTable;
