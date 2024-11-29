"use client";


import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/outline";
import { logOut } from "../_lib/actions";

function LogOutLink() {
  return (
    <form action={logOut}>
      <div className="py-2 px-2 rounded-md flex my-5 items-center gap-5 hover:text-primary-600 hover:bg-gray-100 duration-300 transition-all ease-in-out">
        <i className="w-5 h-5 text-primary-400">
          <ArrowRightStartOnRectangleIcon />
        </i>
        <button className="text-sm text-gray-500">Log out</button>
      </div>
    </form>
  );
}

export default LogOutLink;
