import MenuButton from "@/app/_components/MenuButton";
import MenuList from "@/app/_components/MenuList";
import MenuToggle from "@/app/_components/MenuToggle";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Shop, ShopsProps } from "../_models/shop";
import useCount from "../hooks/useCount";
import usePageSortFilter from "../hooks/usePageSortFilter";
import ConfirmDelete from "./ConfirmDelete";
import ModalOpen from "./ModalOpen";
import ModalWindow from "./ModalWindow";
import Pagination from "./Pagination";

function ShopTable({ searchParams, shops }: ShopsProps) {
  const { query, page, filter, sortBy } = usePageSortFilter(searchParams);
  let count = useCount("shops", shops, shops, filter, sortBy);
  return (
    <div className="bg-white rounded-lg shadow-md w-full py-4 px-5 my-8">
      <table className="w-full text-center">
        <thead>
          <tr className=" text-[15px]">
            <th></th>
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
          {shops.map((shop: Shop) => (
            <React.Fragment key={shop.id}>
              <tr key={shop.id} className="text-sm text-gray-500">
                <td className="relative w-[45px] h-[45px] ">
                  <Image
                    fill
                    src={`/uploads/shop/${shop.logo}`}
                    alt={shop.logo}
                    className="object-cover rounded-full"
                  />
                </td>
                <td>{shop.name}</td>
                <td>{shop.description}</td>
                <td>
                  <MenuToggle id={shop.id} />
                  <MenuList id={shop.id}>
                    <div className="flex items-center text-sm gap-4 px-4 py-2 w-full hover:bg-gray-200 transition-all ease-in-out ">
                      <PencilIcon className="w-4 h-4" />
                      <Link href={`/hawkvisi/shop/${shop.id}`}>Edit</Link>
                    </div>
                    <ModalOpen opens={`delete-${shop.id}`}>
                      <button className="flex items-center text-sm gap-4 px-4 py-2 w-full hover:bg-gray-200 transition-all ease-in-out ">
                        <TrashIcon className="w-4 h-4" />
                        Delete
                      </button>
                    </ModalOpen>
                  </MenuList>
                  <ModalWindow name={`delete-${shop.id}`}>
                    <ConfirmDelete
                      resourceName="Shop"
                      name={shop.name}
                      id={shop.id}
                    />
                  </ModalWindow>
                </td>
              </tr>
              <tr>
                <td colSpan={8}>
                  <hr className="border-gray-200 my-2" />
                </td>
              </tr>{" "}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <Pagination count={count} />
    </div>
  );
}

export default ShopTable;
