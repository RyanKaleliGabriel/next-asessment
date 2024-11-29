import Image from "next/image";
import Link from "next/link";
import { ProductName, ProductSerialNo } from "../_utils/Product";
import ezviz from "@/public/website/ezvizposter.png";
import turnpost from "@/public/website/solargreen.png";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function New({ products }: any) {
  const finalProducts = products.slice(-20);
  const firstProduct = finalProducts.at(4);
  const secondProduct = finalProducts.at(8);
  return (
    <div className="my-14">
      <div className="mb-8  items-center justify-center">
        <div className="flex justify-center">
          <h1 className="font-semibold text-lg lg:text-xl mx-auto">What&apos;s New</h1>
        </div>
        <div className="mt-12 flex  flex-col lg:flex-row gap-4 justify-center">
          <div className="w-[70%]">
            {" "}
            <div className="relative h-[100%] my-auto ">
              <Image
                src={ezviz}
                alt="A new Ezviz Product"
                quality={80}
                fill
                className="object-cover object-top "
              />
            </div>
          </div>

          <div
            className="my-auto py-6 px-4 lg:w-[25%] w-full shadow-2xl "
            key={firstProduct.serialNo}
          >
            <div className="relative h-[60%]  ">
              <Link href="/">
                <Image
                  width={150}
                  height={150}
                  src={`/uploads/product/${firstProduct.image_url}`}
                  alt={firstProduct.name}
                  className="object-cover mx-auto my-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <h5 className="my-3 text-md text-gray-800 font-semibold">
              {ProductSerialNo(firstProduct.serialNumber)}
            </h5>
            <p className="text-sm mb-4 w-[90%] text-gray-500">
              {ProductName(firstProduct.name)}
            </p>

            <div className=" mx-8 flex gap-2 text-primary-600 hover:underline  duration-200 hover:transition-all hover:ease-in-out items-center">
              <Link
                className="ml-auto font-semibold "
                href={`/products/${firstProduct.id}`}
              >
                Check out
              </Link>
              <ArrowRightIcon className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="mt-12 flex  flex-col lg:flex-row gap-4 justify-center ">
          <div
            className="my-auto py-6 px-2   shadow-2xl lg:w-[25%] w-full  "
            key={secondProduct.serialNumber}
          >
            <div className="relative h-[60%]  ">
              <Link href="/">
                <Image
                  width={150}
                  height={150}
                  src={`/uploads/product/${secondProduct.image_url}`}
                  alt={secondProduct.name}
                  className="object-cover mx-auto my-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </Link>
            </div>
            <h5 className="my-3 text-md text-gray-800 font-semibold">
              {ProductSerialNo(secondProduct.serialNumber)}
            </h5>
            <p className="text-sm mb-4 w-[90%] text-gray-500">
              {ProductName(secondProduct.name)}
            </p>

            <div className=" mx-8 flex gap-2 text-primary-600 hover:underline  duration-200 hover:transition-all hover:ease-in-out items-center">
              <Link
                className="ml-auto font-semibold "
                href={`/products/${secondProduct.id}`}
              >
                Check out
              </Link>
              <ArrowRightIcon className="h-5 w-5" />
            </div>
          </div>

          <div className="w-[70%]">
            <div className="relative h-[100%] my-auto   ">
              <Image
                src={turnpost}
                alt="A new Ezviz Product"
                quality={100}
                fill
                className="object-fill   "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default New;
