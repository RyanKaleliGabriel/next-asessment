"use client";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/24/solid";
import { logOut } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={logOut}>
      <button className="flex items-center">
        <ArrowRightStartOnRectangleIcon className="rounded-md w-8 h-8 text-primary-700 hover:bg-gray-100 p-1 duration-200 ease-in-out transition-all" />
      </button>
    </form>
  );
}

export default SignOutButton;
