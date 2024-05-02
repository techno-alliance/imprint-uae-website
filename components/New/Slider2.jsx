import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import box from "@/public/images/pad.png";
import { GoArrowUpRight } from "react-icons/go";
import project1 from "@/public/images/machine.png";
import project4 from "@/public/images/project4.png";
import book from "@/public/images/books1.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/app/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { SwiperNavButtons } from "./SwiperNavButtons";

export default function App() {
  return (
    <div className="py-20 bg-[#36393A]">
      <div className="bg-[#36393A]">
        <div className="max-w-screen-xl mx-auto px-10">
          <div className="flex flex-col gap-3">
            <button
              className="button-58 flex transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
              href=""
            >
              <span className="text-btn flex gap-2 items-center">
                Our service
              </span>
              <span className="pb-3">Our service</span>
            </button>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-auto md:w-[630px]">
                <p className="text-[48px] leading-[140%] font-semibold text-white">
                  Produce Stunning Printing For Your Business
                </p>
              </div>
              <div className="flex justify-center items-center w-auto md:w-[400px]">
                <p className="text-[#DADADA] text-xl font-normal leading-[160%]">
                  Imprint printing press is the foremost provider of varied
                  offset printing solutions to more than a thousand clients
                  today..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // centeredSlides={true}
        loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 30,
          },

          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },

          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },

          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },

          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },

          1536: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper !bg-[#36393A] !pb-24"
      >
        <div className="absolute right-[80px] bottom-[0px] z-20">
          <SwiperNavButtons />
        </div>
        <SwiperSlide className="!p-3 lg:!p-0 !bg-[#36393A] !w-full lg:!w-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-[300px] flex flex-col justify-end">
              <p className="text-white text-left text-[28px] font-semibold">Speed Master CD 102</p>
              <p className="text-[#ADACAC] text-left text-xl font-normal">
                Experience the pinnacle of printing precision with Speedmaster
                CD 102. Where speed meets finesse, delivering vibrant colors and
                unmatched quality on every sheet.
              </p>
            </div>
            <div className="rounded-[10px] w-auto h-auto lg:w-[550px] lg:h-[400px] overflow-hidden relative group">
              <Image src={project1} className="w-full h-full object-cover" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!p-3 lg:!p-0 !bg-[#36393A] !w-full lg:!w-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-[300px] flex flex-col justify-end">
            <p className="text-white text-left text-[28px] font-semibold">Speed Master CD 102</p>
              <p className="text-[#ADACAC] text-left text-xl font-normal">
                Experience the pinnacle of printing precision with Speedmaster
                CD 102. Where speed meets finesse, delivering vibrant colors and
                unmatched quality on every sheet.
              </p>
            </div>
            <div className="rounded-[10px] w-auto h-auto lg:w-[550px] lg:h-[400px] overflow-hidden relative group">
              <Image src={project1} className="w-full h-full object-cover" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!p-3 lg:!p-0 !bg-[#36393A] !w-full lg:!w-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-[300px] flex flex-col justify-end">
            <p className="text-white text-left text-[28px] font-semibold">Speed Master CD 102</p>
              <p className="text-[#ADACAC] text-left text-xl font-normal">
                Experience the pinnacle of printing precision with Speedmaster
                CD 102. Where speed meets finesse, delivering vibrant colors and
                unmatched quality on every sheet.
              </p>
            </div>
            <div className="rounded-[10px] w-auto h-auto lg:w-[550px] lg:h-[400px] overflow-hidden relative group">
              <Image src={project1} className="w-full h-full object-cover" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!p-3 lg:!p-0 !bg-[#36393A] !w-full lg:!w-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-[300px] flex flex-col justify-end">
            <p className="text-white text-left text-[28px] font-semibold">Speed Master CD 102</p>
              <p className="text-[#ADACAC] text-left text-xl font-normal">
                Experience the pinnacle of printing precision with Speedmaster
                CD 102. Where speed meets finesse, delivering vibrant colors and
                unmatched quality on every sheet.
              </p>
            </div>
            <div className="rounded-[10px] w-auto h-auto lg:w-[550px] lg:h-[400px] overflow-hidden relative group">
              <Image src={project1} className="w-full h-full object-cover" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!p-3 lg:!p-0 !bg-[#36393A] !w-full lg:!w-auto">
          <div className="flex flex-col lg:flex-row gap-10">
            <div className="w-[300px] flex flex-col justify-end">
            <p className="text-white text-left text-[28px] font-semibold">Speed Master CD 102</p>
              <p className="text-[#ADACAC] text-left text-xl font-normal">
                Experience the pinnacle of printing precision with Speedmaster
                CD 102. Where speed meets finesse, delivering vibrant colors and
                unmatched quality on every sheet.
              </p>
            </div>
            <div className="rounded-[10px] w-auto h-auto lg:w-[550px] lg:h-[400px] overflow-hidden relative group">
              <Image src={project1} className="w-full h-full object-cover" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
