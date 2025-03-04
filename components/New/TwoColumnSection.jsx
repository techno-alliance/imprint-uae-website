import Image from "next/image";
import React from "react";
import { PiArrowUpRight } from "react-icons/pi";
import { motion } from "framer-motion";

// Animated Image component with scale-up effect on scroll
const AnimatedImage = ({ src, alt, className }) => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0.8 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ 
        duration: 0.8,
        ease: "easeOut"
      }}
      viewport={{ once: false, amount: 0.3 }}
      className="w-full h-full"
    >
      <Image
        src={src}
        alt={alt}
        className={className || "w-full h-full object-cover object-center"}
      />
    </motion.div>
  );
};

export const TwoColumnSection = ({
  header = "",
  headercolor = "",
  description = "",
  bentoImages,
}) => {
  return (
    <div className="flex flex-col gap-16 justify-center">
      <div className="flex flex-col gap-3 justify-between">
        <div
          className=" h-9 md:h-10 rounded-full p-2.5 text-sm md:text-base border border-[#2E2E2E] bg-[#1A1A1A] text-primary vh-center w-[123px] "
        >
          Category
        </div>
        <div className="flex flex-col gap-3 lg:flex-row justify-between ">
          <div className="text-2xl md:text-[48px] leading-[140%]">
            <p>{header}</p>
            <p className="gradient-text font-semibold">{headercolor}</p>
          </div>
          {/* <p className="text-sm md:text-[16px] font-normal md:w-[400px] xl:w-[540px] pt-2">
            {description}
          </p> */}
        </div>
      </div>

      <div className="grid gap-6 lg:gap-40 grid-cols-6 w-full justify-between">
        <div className="col-span-6 md:col-span-3 w-full flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-2xl md:text-[32px] leading-[140%] font-semibold">
              {bentoImages[0].title}
            </p>
            <p className="text-sm md:text-[20px] font-normal text-[#DADADA] leading-[160%]">
              {bentoImages[0].subtitle}
            </p>
            <a
              href=""
              className="text-sm md:text-[20px] font-normal text-[#DADADA] pt-5 flex items-center gap-2"
            >
              Choose Now <PiArrowUpRight />
            </a>
          </div>
          <div className="w-full h-[450px] md:h-[700px] rounded-[20px] overflow-hidden">
            <AnimatedImage
              src={bentoImages[0].image1}
              alt="bento"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 w-full flex flex-col gap-8">
          <div className="w-full h-[450px] md:h-[700px] rounded-[20px] overflow-hidden">
            <AnimatedImage
              src={bentoImages[0].image2}
              alt="bento"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl md:text-[32px] leading-[140%] font-semibold">
              {bentoImages[0].title2}
            </p>
            <p className="text-sm md:text-[20px] font-normal text-[#DADADA] leading-[160%]">
              {bentoImages[0].subtitle2}
            </p>
            <a
              href=""
              className="text-sm md:text-[20px] font-normal text-[#DADADA] pt-5 flex items-center gap-2"
            >
              Choose Now <PiArrowUpRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};