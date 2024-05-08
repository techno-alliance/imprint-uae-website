import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import box from "@/public/images/pad.png";
import { GoArrowUpRight } from "react-icons/go";
import project1 from "@/public/images/project1.png";
import project4 from "@/public/images/project4.png";
import book from "@/public/images/books1.png";
import { FaPhone } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/app/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { SwiperNavButtons } from "./SwiperNavButtons";

export default function Testimonial() {
  return (
    <>
      <Swiper
        slidesPerView={2.5}
        spaceBetween={20}
        centeredSlides={true}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 0,
          },

          640: {
            slidesPerView: 1,
            spaceBetween: 0,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            spaceBetween: 10,
          },

          1280: {
            spaceBetween: 10,
          },

          1536: {
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper !pb-24 !pt-20"
      >
        <div className="absolute left-1/2 bottom-[0px] z-20 -translate-x-[50%]">
          <SwiperNavButtons />
        </div>
        <SwiperSlide className="!p-3 lg:!p-0 !bg-black">
          <div className="!flex !flex-col lg:!flex-row !justify-between rounded-[10px] !p-3 !w-full !h-full lg:!w-[600px] lg:!h-[200px] !overflow-hidden !relative group !bg-[#1E1E1E]">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="flex justify-start">
                <p className="text-sm font-extrabold text-white">
                  Etisalat Telecom LLCuyuf
                </p>
              </div>
            </div>
            <div className="rounded-[10px] w-auto overflow-hidden lg:w-[400px] h-full">
              <Image
                src={project4}
                // layout="responsive"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!p-3 lg:!p-0 !bg-black">
          <div className="!flex !flex-col lg:!flex-row !justify-between rounded-[10px] !p-3 !w-full !h-full lg:!w-[600px] lg:!h-[200px] !overflow-hidden !relative group !bg-[#1E1E1E]">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="flex justify-start">
                <p className="text-sm font-extrabold text-white">
                  Etisalat Telecom LLC
                </p>
              </div>
            </div>
            <div className="rounded-[10px] w-[240px] overflow-hidden lg:w-[400px] h-full">
              <Image
                src={project4}
                layout="responsive"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!p-3 lg:!p-0 !bg-black">
          <div className="!flex !flex-col lg:!flex-row !justify-between rounded-[10px] !p-3 !w-full !h-full lg:!w-[600px] lg:!h-[200px] !overflow-hidden !relative group !bg-[#1E1E1E]">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="flex justify-start">
                <p className="text-sm font-extrabold text-white">
                  Etisalat Telecom LLC
                </p>
              </div>
            </div>
            <div className="rounded-[10px] w-[240px] overflow-hidden lg:w-[400px] h-full">
              <Image
                src={project4}
                layout="responsive"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!p-3 lg:!p-0 !bg-black">
          <div className="!flex !flex-col lg:!flex-row !justify-between rounded-[10px] !p-3 !w-full !h-full lg:!w-[600px] lg:!h-[200px] !overflow-hidden !relative group !bg-[#1E1E1E]">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="flex justify-start">
                <p className="text-sm font-extrabold text-white">
                  Etisalat Telecom LLC
                </p>
              </div>
            </div>
            <div className="rounded-[10px] w-[240px] overflow-hidden lg:w-[400px] h-full">
              <Image
                src={project4}
                layout="responsive"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!p-3 lg:!p-0 !bg-black">
          <div className="!flex !flex-col lg:!flex-row !justify-between rounded-[10px] !p-3 !w-full !h-full lg:!w-[600px] lg:!h-[200px] !overflow-hidden !relative group !bg-[#1E1E1E]">
            <div className="flex flex-col justify-center items-center w-full h-full">
              <div className="flex justify-start">
                <p className="text-sm font-extrabold text-white">
                  Etisalat Telecom LLC
                </p>
              </div>
            </div>
            <div className="rounded-[10px] w-[240px] overflow-hidden lg:w-[400px] h-full">
              <Image
                src={project4}
                layout="responsive"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
