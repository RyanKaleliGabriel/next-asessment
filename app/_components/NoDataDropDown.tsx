import Link from "next/link";
import { NoDataDropDownProps } from "../_models/app";

function NoDataDropDown({ href, model }: NoDataDropDownProps) {
  return (
    <div className="mx-auto w-[32%]">
      <p className="text-sm text-gray-400 my-2">No {model} available</p>
      <Link
        className="bg-primary-600 text-white text-sm py-1 px-2 rounded-md"
        href={`/${href}/add`}
      >
        Add new
      </Link>
    </div>
  );
}

export default NoDataDropDown;
