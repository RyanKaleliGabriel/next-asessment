import MenuButton from "@/app/_components/MenuButton";
import MenuList from "@/app/_components/MenuList";
import MenuToggle from "@/app/_components/MenuToggle";
import { DashProdName, ProductSerialNo } from "@/app/_utils/Product";
import Image from "next/image";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";
import { Product, ProductTableProps } from "../_models/product";
import useFilterData from "../hooks/useFilterData";
import usePagedData from "../hooks/usePagedData";
import usePageSortFilter from "../hooks/usePageSortFilter";
import useSortData from "../hooks/useSortData";
import ConfirmDelete from "./ConfirmDelete";
import ModalOpen from "./ModalOpen";
import ModalWindow from "./ModalWindow";
import NoData from "./NoData";
import Pagination from "./Pagination";

function ProductTable({ searchParams, products }: ProductTableProps) {
  const { query, page, filter, sortBy } = usePageSortFilter(searchParams);

  // let operatedProducts = useDataOperations("product", products, filter, sortBy);
  const filteredData = useFilterData(products, filter, "product");
  const operatedProducts = useSortData(filteredData, sortBy);

  let count =
    (filter === "" || filter === "all") &&
    (sortBy === "" || sortBy === "default")
      ? products.length
      : operatedProducts.length;

  const displayedProducts = usePagedData(operatedProducts, page);
  if (!displayedProducts || displayedProducts.length === 0) {
    return <NoData>No products available</NoData>;
  }

  return (
    <div className="bg-white rounded-lg shadow-md w-full py-4 px-5 my-8">
      <table className="w-full text-center overflow-x-scroll">
        <thead>
          <tr className=" text-[15px]">
            <th> </th>
            <th>Sr. No.</th>
            <th>Name</th>
            <th className="lg:table-cell hidden">Price</th>
            <th className="lg:table-cell hidden">Stock</th>
          </tr>
          <tr>
            <td colSpan={8}>
              <hr className="border-gray-200 my-2" />
            </td>
          </tr>
        </thead>
        <tbody>
          {displayedProducts.map((product: Product) => (
            <React.Fragment key={product.id}>
              <tr className="text-sm text-gray-500">
                <td className="relative   w-[45px] h-[45px] ">
                  <Image
                    fill
                    src={`/uploads/product/${product.photo}`}
                    alt="Profile"
                    className="object-cover rounded-full"
                  />
                </td>
                <td>{product.id}</td>
                <td>{DashProdName(product.name)}</td>
                
                {/* <td className="lg:table-cell hidden">
                  {product.manufacturer.name}
                </td>
                <td className="lg:table-cell hidden">
                  {product.category.name}
                </td> */}
                <td className="lg:table-cell hidden">{product.price}</td>
                <td className="lg:table-cell hidden">{product.stock_level}</td>


                <td className="lg:table-cell hidden">
                  <MenuToggle id={product.id} />
                  <MenuList id={product.id}>
                    <div className="flex items-center text-sm gap-4 px-4 py-2 w-full hover:bg-gray-200 transition-all ease-in-out ">
                      <PencilIcon className="w-4 h-4" />
                      <Link href={`/products/${product.id}`}>
                        Edit
                      </Link>
                    </div>
                    <ModalOpen opens={`delete-${product.id}`}>
                      <MenuButton icon={<TrashIcon className="w-4 h-4" />}>
                        Delete
                      </MenuButton>
                    </ModalOpen>
                  </MenuList>
                  <ModalWindow name={`delete-${product.id}`}>
                    <ConfirmDelete
                      resourceName="Product"
                      id={product.id}
                      name={product.name}
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

export default ProductTable;
