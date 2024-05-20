import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import project1 from "@/public/images/machine.png";
import machine1 from "@/public/images/machine1.jpeg";
import machine2 from "@/public/images/machine2.jpeg";
import machine3 from "@/public/images/machine3.png";
import machine4 from "@/public/images/machine4.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/app/styles.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { SwiperNavButtons } from "./SwiperNavButtons";

export default function App() {
  const items = [
    {
      title: "Speed Master CD 102",
      text: "Experience the pinnacle of printing precision with Speedmaster CD 102. Where speed meets finesse, delivering vibrant colors and unmatched quality on every sheet."
    },
    {
      title: "HP latex 370",
      text: "Experience the pinnacle of printing precision with Speedmaster CD 102. Where speed meets finesse, delivering vibrant colors and unmatched quality on every sheet."
    },
    {
      title: "Folder Gluer Machine",
      text: "Experience the pinnacle of printing precision with Speedmaster CD 102. Where speed meets finesse, delivering vibrant colors and unmatched quality on every sheet."
    },
    {
      title: "RICOH Pro C7200x",
      text: "Experience the pinnacle of printing precision with Speedmaster CD 102. Where speed meets finesse, delivering vibrant colors and unmatched quality on every sheet."
    },
    {
      title: "Automatic Sheet Paper Cutting Machine",
      text: "Experience the pinnacle of printing precision with Speedmaster CD 102. Where speed meets finesse, delivering vibrant colors and unmatched quality on every sheet."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [textKey, setTextKey] = useState(0);

  const handleSlideChange = (swiper) => {
    setTextKey((prev) => prev + 1);
    setActiveIndex(swiper.activeIndex);
  };

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 }
  };

  return (
    <div className="bg-[#36393A]">
      <div className="bg-[#36393A]">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col gap-3">
            <button
              className="button-58 flex transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
              href=""
            >
              <span className="text-btn flex gap-2 items-center">Machines</span>
              <span className="pb-3">Machines</span>
            </button>
            <div className="flex flex-col md:flex-row justify-between">
              <div className="w-auto md:w-[630px]">
                <p className="text-2xl lg:text-[48px] leading-[140%] font-semibold text-white">
                  Innovation in Printing - Our Cutting-Edge Equipments
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-auto md:w-[500px] lg:w-[600px]">
          <div className="flex p-4 flex-col justify-end">
            <AnimatePresence mode="wait">
              <motion.div
                key={textKey}
                initial="initial"
                animate="animate"
                exit="exit"
                variants={variants}
                transition={{ duration: 0.5 }}
              >
                <p className="text-white text-left text-[28px] font-semibold">
                  {items[activeIndex].title}
                </p>
                <p className="text-[#ADACAC] text-left text-xl font-normal">
                  {items[activeIndex].text}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={30}
          onSlideChange={handleSlideChange}
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
              slidesPerView: 1,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
            1280: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
            1536: {
              slidesPerView: 1.5,
              spaceBetween: 0,
            },
          }}
          modules={[Pagination, Navigation]}
          className="mySwiper !bg-[#36393A] !pb-24 !pt-16"
        >
          <div className="absolute left-1/2 -translate-x-[50%] bottom-[0px] z-20">
            <SwiperNavButtons />
          </div>
          <SwiperSlide className="!p-3 lg:!p-0 !bg-[#36393A]">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="rounded-[10px] w-[300px] h-[300px] lg:w-[550px] lg:h-[400px] overflow-hidden relative group">
                <Image src={project1} className="w-full h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!p-3 lg:!p-0 !bg-[#36393A]">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="rounded-[10px] w-[300px] h-[300px] lg:w-[550px] lg:h-[400px] overflow-hidden relative group">
                <Image src={machine1} className="w-full h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!p-3 lg:!p-0 !bg-[#36393A]">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="rounded-[10px] w-[300px] h-[300px] lg:w-[550px] lg:h-[400px] overflow-hidden relative group">
                <Image src={machine2} className="w-full h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!p-3 lg:!p-0 !bg-[#36393A]">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="rounded-[10px] w-[300px] h-[300px] lg:w-[550px] lg:h-[400px] overflow-hidden relative group">
                <Image src={machine3} className="w-full h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="!p-3 lg:!p-0 !bg-[#36393A]">
            <div className="flex flex-col lg:flex-row gap-10">
              <div className="rounded-[10px] w-[300px] h-[300px] lg:w-[550px] lg:h-[400px] overflow-hidden relative group">
                <Image src={machine4} className="w-full h-full object-cover" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
