import Link from "next/link";

function ProductNav() {
  return (
    <ul className="mx-auto text-[11px] hidden lg:flex gap-4 ">
      <li className="bg-primary-500 text-white py-1 px-2 rounded-md hover:bg-primary-800 transition-all ease-in-out duration-200">
        <Link href="/" className="">
          HD cameras
        </Link>
      </li>{" "}
      <li className="bg-primary-500 text-white py-1 px-2 rounded-md hover:bg-primary-800 transition-all ease-in-out duration-200">
        <Link href="/" className="">
          IP cameras
        </Link>
      </li>{" "}
      <li className="bg-primary-500 text-white py-1 px-2 rounded-md hover:bg-primary-800 transition-all ease-in-out duration-200">
        <Link href="/" className="">
          Access Controls
        </Link>
      </li>{" "}
      <li className="bg-primary-500 text-white py-1 px-2 rounded-md hover:bg-primary-800 transition-all ease-in-out duration-200">
        <Link href="/" className="">
          ColorVu{" "}
        </Link>
      </li>{" "}
      <li className="bg-primary-500 text-white py-1 px-2 rounded-md hover:bg-primary-800 transition-all ease-in-out duration-200">
        <Link href="/" className="">
          Networking Equipment
        </Link>
      </li>
    </ul>
  );
}

export default ProductNav;
