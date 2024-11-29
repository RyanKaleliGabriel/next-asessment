import Image from "next/image";
import React from "react";

function DashLatestProducts() {
  return (
    <div className="bg-white rounded-lg shadow-md w-full py-4 px-5">
      <div className="my-4">
        <h3 className="font-semibold text-lg">Latest Products</h3>
      </div>
      <table className="w-full text-center">
        <thead>
          <tr className=" text-[15px]">
            <th></th>
            <th>Name</th>
            <th>Sr. No.</th>
            <th>Price</th>
          </tr>
          <tr>
            <td colSpan={8}>
              <hr className="border-gray-200 my-2" />
            </td>
          </tr>
        </thead>
        <tbody>

            <React.Fragment >
              <tr className="text-sm text-gray-500">
                <td className="relative w-[45px] h-[45px] ">
                  <Image
                    fill
                    src={`/uploads/product/`}
                    alt="Profile"
                    className="object-cover rounded-full"
                  />
                </td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td colSpan={8}>
                  <hr className="border-gray-200 my-2" />
                </td>
              </tr>
            </React.Fragment>

        </tbody>
      </table>
    </div>
  );
}

export default DashLatestProducts;
