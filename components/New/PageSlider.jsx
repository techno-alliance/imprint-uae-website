
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/app/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { SwiperNavButtons } from "./SwiperNavButtons";

export default function PageSlider({
  header = "",
  headercolor = "",
  description = "",
  sliderdata = [{}],
}) {
  return (
    <>
      <div className="flex flex-col gap-16 overflow-hidden w-full">
        <div className="flex flex-col gap-3 justify-between">
          <div
            className=" h-9 md:h-10 rounded-full p-2.5 text-sm md:text-base border border-[#2E2E2E] bg-[#1A1A1A] text-primary vh-center w-[123px]
"
          >
            Explore
          </div>
          <div className="flex flex-col gap-3 lg:flex-row justify-between ">
            <div className="text-2xl md:text-[48px] leading-[140%]">
              <p>{header}</p>
              <p className="gradient-text font-semibold">{headercolor}</p>
            </div>
            <p className="text-sm md:text-[16px] font-normal md:w-[400px] xl:w-[540px] pt-2">
              {description}
            </p>
          </div>
        </div>

        <div className="relative">
          <Swiper
            slidesPerView={2.5}
            // spaceBetween={0}
            // pagination={{
            //   clickable: true,
            // }}
            // width="100%"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
                centeredSlides: true,
                width: "100% !important",
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            }}
            modules={[Navigation]}
            className="mySwiper  !pt-24"
          >
            <div className="absolute right-0 top-0 z-20 ">
              <SwiperNavButtons />
            </div>

            {sliderdata.map((item, index) => (
              <SwiperSlide className="!bg-transparent">
                <div className="md:h-[230px] border border-[#262626] rounded-[20px] md:w-[526px] bg-[#1e1e1e] flex flex-col md:flex-row items-center p-2.5">
                  <div className="flex flex-col gap-2">
                    <p className="text-sm 2xl:text-xl font-medium">{item.title}</p>
                    <p className="text-[10px] 2xl:text-sm leading-[160%]">
                      {item.description}
                    </p>
                  </div>
                  <div className=" h-full w-[240px] rounded-[15px] overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt="bento"
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}
