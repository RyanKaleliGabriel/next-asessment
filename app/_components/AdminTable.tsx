"use client";

import Image from "next/image";
import React from "react";
import { Admin, AdminTableProps } from "../_models/admin";
import usePagedData from "../hooks/usePagedData";
import Pagination from "./Pagination";
import usePageSortFilter from "../hooks/usePageSortFilter";

function AdminTable({ admins, searchParams }: AdminTableProps) {
  const { query, page, filter, sortBy } = usePageSortFilter(searchParams);

  const count = admins.length;
  const displayedUsers = usePagedData(admins, page);
  return (
    <div className="bg-white rounded-lg shadow-md w-full py-4 px-5 my-8">
      <table className="w-full text-center">
        <thead>
          <tr className=" text-[15px]">
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
          <tr>
            <td colSpan={8}>
              <hr className="border-gray-200 my-2" />
            </td>
          </tr>
        </thead>
        <tbody>
          {displayedUsers.map((user: Admin) => (
            <React.Fragment key={user.id}>
              <tr className="text-sm text-gray-500">
                <td className="relative w-[35px] h-[35px] ">
                  <Image
                    fill
                    src={`/uploads/user/${user.image_url}`}
                    alt="Profile"
                    className="object-cover rounded-full"
                  />
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {user.active && (
                  <td className="text-[#0369a1] bg-[#e0f2fe] rounded-full w-[10%] text-[12px]">
                    Active
                  </td>
                )}
                {!user.active && (
                  <td className="text-primary-700 bg-primary-200 rounded-full w-[10%] px-1 text-[12px">
                    Deactivated
                  </td>
                )}
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

export default AdminTable;
