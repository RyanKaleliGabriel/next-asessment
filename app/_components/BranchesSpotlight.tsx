"use client";
import { MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Branch } from "../_models/branch";

function BranchesSpotlight({ branches }: any) {
  const finalBranches = branches.slice(0, 8);
  return (
    <div className="my-24">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-lg lg:text-xl mx-auto">
            Branches Country Wide
          </h1>
        </div>
        <div className=" mx-8 flex gap-2 text-primary-600 hover:underline  duration-200 hover:transition-all hover:ease-in-out items-center">
          <Link className="ml-auto text-sm " href="/branches">
            Explore All Branches&rarr;
          </Link>
        </div>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
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
        className="mySwiper"
      >
        <div className="flex ">
          {finalBranches.map((branch:Branch) => (
            <SwiperSlide key={branch.name}>
              <div className="flex flex-1 flex-col px-4">
                <div className="relative h-[300px] w-[300px]">
                  <Image
                    src={`/uploads/branch/${branch.image_url}`}
                    alt=""
                    quality={100}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="w-[300px]">
                  <div className="h-[110px] ">
                    <div className="flex gap-2 items-center ">
                      <MapPinIcon className="h-4 w-4 bg-primary-00 text-primary-600 rounded-lg   " />
                      <h3 className=" font-semibold my-3 text-md">
                        {branch.name}
                      </h3>
                    </div>

                    <p className="text-gray-500 text-[12px]">{branch.location}</p>
                  </div>

                  <div className="mt-3 flex gap-2 items-center ">
                    <PhoneIcon className="w-4 h-4 text-primary-600  " />
                    <p className="ext-[12px] underline text-gray-500 underline-offset-2 inline-block border-primary-600">
                      {branch.phone}
                    </p>
                    <Link
                      href={`/branches/${branch.id}`}
                      className="ml-auto text-sm text-primary-600 hover:underline inline-block duration-300 transition-all ease-in-out"
                    >
                      Details&rarr;
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
}

export default BranchesSpotlight;
