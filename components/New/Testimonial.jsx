import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import box from "@/public/images/pad.png";
import { GoArrowUpRight } from "react-icons/go";
import project1 from "@/public/images/project1.png";
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

export default function Testimonial() {
  return (
    <>
      <div className="bg-black">
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
            spaceBetween: 10,
          },

          1536: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className="absolute right-[80px] top-[0px] z-20">
          <SwiperNavButtons />
        </div>
        <SwiperSlide className="!flex !flex-col lg:!flex-row !justify-between rounded-[10px] !p-3 !w-auto !h-auto lg:!w-[550px] lg:!h-[300px] !overflow-hidden !relative group !bg-[#1E1E1E]">
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex justify-start">
              <p className="text-sm font-extrabold text-white">
                Etisalat Telecom LLC
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-14 h-14 overflow-hidden rounded-full flex justify-center">
                <Image
                  src={project4}
                  layout="responsive"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-semibold">Jacob Woods</p>
                <p className="text-white text-[16px]">Chief Executive</p>
              </div>
            </div>
          </div>
          <div className="bg-[#222627] rounded-[10px] w-auto lg:w-[400px] p-4 h-full flex justify-center items-center">
            <p className="text-[#6A6A6A] font-semibold text-left text-xl">
              <span className=" text-white font-semibold text-xl">
                “ Get speed and consistency
              </span>
              —our global in-house and partner facilities offer competitive
              shipping rates and consistent quality.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-between rounded-[10px] !p-3 !w-auto !h-auto lg:!w-[500px] lg:!h-[300px] !overflow-hidden !relative group !bg-[#1E1E1E]">
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex justify-start">
              <p className="text-sm font-extrabold text-white">
                Etisalat Telecom LLC
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-14 h-14 overflow-hidden rounded-full flex justify-center">
                <Image
                  src={project4}
                  layout="responsive"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-semibold">Jacob Woods</p>
                <p className="text-white text-[16px]">Chief Executive</p>
              </div>
            </div>
          </div>
          <div className="bg-[#222627] rounded-[10px] w-auto lg:w-[400px] p-4 h-full flex justify-center items-center">
            <p className="text-[#6A6A6A] font-semibold text-left text-xl">
              <span className=" text-white font-semibold text-xl">
                “ Get speed and consistency
              </span>
              —our global in-house and partner facilities offer competitive
              shipping rates and consistent quality.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-between rounded-[10px] !p-3 !w-auto !h-auto lg:!w-[500px] lg:!h-[300px] !overflow-hidden !relative group !bg-[#1E1E1E]">
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex justify-start">
              <p className="text-sm font-extrabold text-white">
                Etisalat Telecom LLC
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-14 h-14 overflow-hidden rounded-full flex justify-center">
                <Image
                  src={project4}
                  layout="responsive"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-semibold">Jacob Woods</p>
                <p className="text-white text-[16px]">Chief Executive</p>
              </div>
            </div>
          </div>
          <div className="bg-[#222627] rounded-[10px] w-auto lg:w-[400px] p-4 h-full flex justify-center items-center">
            <p className="text-[#6A6A6A] font-semibold text-left text-xl">
              <span className=" text-white font-semibold text-xl">
                “ Get speed and consistency
              </span>
              —our global in-house and partner facilities offer competitive
              shipping rates and consistent quality.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-between rounded-[10px] !p-3 !w-auto !h-auto lg:!w-[500px] lg:!h-[300px] !overflow-hidden !relative group !bg-[#1E1E1E]">
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex justify-start">
              <p className="text-sm font-extrabold text-white">
                Etisalat Telecom LLC
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-14 h-14 overflow-hidden rounded-full flex justify-center">
                <Image
                  src={project4}
                  layout="responsive"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-semibold">Jacob Woods</p>
                <p className="text-white text-[16px]">Chief Executive</p>
              </div>
            </div>
          </div>
          <div className="bg-[#222627] rounded-[10px] w-auto lg:w-[400px] p-4 h-full flex justify-center items-center">
            <p className="text-[#6A6A6A] font-semibold text-left text-xl">
              <span className=" text-white font-semibold text-xl">
                “ Get speed and consistency
              </span>
              —our global in-house and partner facilities offer competitive
              shipping rates and consistent quality.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="!flex !justify-between rounded-[10px] !p-3 !w-auto !h-auto lg:!w-[500px] lg:!h-[300px] !overflow-hidden !relative group !bg-[#1E1E1E]">
          <div className="flex flex-col justify-between w-full h-full">
            <div className="flex justify-start">
              <p className="text-sm font-extrabold text-white">
                Etisalat Telecom LLC
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-14 h-14 overflow-hidden rounded-full flex justify-center">
                <Image
                  src={project4}
                  layout="responsive"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-white text-xl font-semibold">Jacob Woods</p>
                <p className="text-white text-[16px]">Chief Executive</p>
              </div>
            </div>
          </div>
          <div className="bg-[#222627] rounded-[10px] w-auto lg:w-[400px] p-4 h-full flex justify-center items-center">
            <p className="text-[#6A6A6A] font-semibold text-left text-xl">
              <span className=" text-white font-semibold text-xl">
                “ Get speed and consistency
              </span>
              —our global in-house and partner facilities offer competitive
              shipping rates and consistent quality.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}