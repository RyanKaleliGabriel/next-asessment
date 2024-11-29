"use client";
import hero9 from "@/public/website/ezvizslide.jpg";
import hero10 from "@/public/website/netwequipslide.png";
import hero11 from "@/public/website/wdslide.jpg";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

function Hero() {
  return (
    <div className="mt-8">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-[300px] md:h-[500px] text-primary-600"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src="/website/slide3.jpeg"
              fill
              quality={100}
              alt="Hero Three"
              className="object-cover md:inline hidden"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <Image
              src="/website/hikab2.jpg"
              fill
              quality={100}
              alt="Hero Three"
              className="object-cover inline md:hidden"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src={hero11}
              fill
              quality={100}
              alt="Hero One"
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src={hero9}
              fill
              quality={100}
              alt="Hero Two"
              className="object-cover md:inline hidden"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <Image
              src="/website/cabslide.webp"
              fill
              quality={100}
              alt="Hero Three"
              className="object-cover inline md:hidden"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <Image
              src={hero10}
              fill
              quality={100}
              alt="Hero One"
              className="object-cover md:inline hidden"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
            <Image
              src="/website/ezv.png"
              fill
              quality={100}
              alt="Hero Three"
              className="object-cover inline md:hidden"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Hero;
