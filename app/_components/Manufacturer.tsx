import Image from "next/image";
import Link from "next/link";
import { getManufacturers } from "../_lib/data-service";
import { defaultQuery } from "../_utils/constants";

async function Manufacturer() {
  const manufacturers = await getManufacturers(defaultQuery);

  return (
    <>
      <div className=" my-24 px-12 py-8 md:w-[85%] w-[100%] rounded-xl flex mx-auto justify-center bg-primary-800 ">
        <div className="text-center">
          <h3 className="text-sm md:text-2xl font-medium text-white  ">
            HawkVision Technologies - the National Distributor for the{" "}
            <span className="hover:underline transition-all duration-200 ease-in-out inline-block text-gray-400">
              <Link href="https://www.hikvision.com/en/">
                {" "}
                World&apos;s No. 1 Security Solutions provider HikVision{" "}
              </Link>
            </span>{" "}
            and many other renowed solution manufacturer&apos;s
          </h3>
        </div>
      </div>
      <div className="mt-2  flex justify-evenly items-center gap-8">
        {manufacturers.map((item) => (
          <div key={item.name}>
            {" "}
            <Image
              width={150}
              quality={100}
              height={150}
              src={`/uploads/manufacturer/${item.image_url}`}
              alt={item.name}
              className="transform transition-transform duration-300 ease-in-out hover:scale-110"
            />
          </div>
        ))}
      </div>{" "}
    </>
  );
}

export default Manufacturer;
