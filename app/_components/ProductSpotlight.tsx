"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductName, ProductSerialNo } from "../_utils/Product";

import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import ComparisonForm from "./ComparisonForm";
import { Product } from "../_models/product";
function ProductSpotlight({ products }: any) {
  const finalProducts = products
    .filter((product: Product) => product.display === "Popular")
    .slice(0, 9);
  return (
    <div className="my-24">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-lg lg:text-xl mx-auto">
            Product Spotlight
          </h1>
        </div>
        <div className=" mx-8 flex gap-2 text-primary-600 hover:underline  duration-200 hover:transition-all hover:ease-in-out items-center">
          <Link className="ml-auto text-sm " href="/categories">
            View All
          </Link>
          <ArrowRightIcon className="h-4 w-4" />
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          // when window width is >= 640px (small devices)
          640: {
            slidesPerView: 1,
          },
          // when window width is >= 768px (medium devices)
          768: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px (large devices)
          1024: {
            slidesPerView: 4,
          },
        }}
        modules={[Pagination, Autoplay, Navigation]}
      >
        {finalProducts.map((product: Product) => (
          <SwiperSlide
            key={product.serialNumber}
            className="flex justify-center"
          >
            <div
              className="my-6  py-4 px-4 h-[340px]  w-full shadow-2xl"
              key={product.serialNumber}
            >
              <div className="relative mx-auto h-[150px] w-[50%]">
                <Link href={`/products/${product.id}`}>
                  <Image
                    fill
                    src={`/uploads/product/${product.image_url}`}
                    alt={product.name}
                    className="object-cover mx-auto my-4 transform transition-transform duration-300 ease-in-out hover:scale-110"
                  />
                </Link>
              </div>
              <h5 className="my-6 text-md text-gray-800 font-semibold">
                {ProductSerialNo(product.serialNumber)}
              </h5>
              <p className="text-sm mb-4 w-[90%] h-[16%] text-gray-500">
                {ProductName(product.name)}
              </p>
              <ComparisonForm product={product} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ProductSpotlight;
