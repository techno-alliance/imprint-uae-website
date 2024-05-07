import Image from "next/image";
import React from "react";

export const BentoGrid = ({
  header = "",
  headercolor = "",
  description = "",
  bentoImages,
}) => {
  return (
    <div className="flex flex-col gap-6 items-center justify-center">
      <div className="flex flex-col gap-3 items-center justify-center">
        <div
          className=" h-9 md:h-10 rounded-full p-2.5 text-sm md:text-base border border-[#2E2E2E] bg-[#1A1A1A] text-primary vh-center w-[123px]
"
        >
          Category
        </div>
        <div className="text-2xl md:text-[48px] leading-[140%] text-center">
          <p>{header}</p>
          <p className="gradient-text font-semibold">{headercolor}</p>
        </div>
        <p className="text-[14px] md:text-[16px] font-normal md:w-[540px] text-center">
          {description}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-9 md:grid-rows-6 gap-6 md:gap-10 h-full md:h-[807px] w-full">
        <div className="bg-green-500 rounded-[20px] col-span-9 row-span-6 md:col-span-4 md:row-span-6 overflow-hidden">
          <Image
            src={bentoImages[0].image1}
            alt="bento"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="bg-green-500 rounded-[20px] col-span-9 row-span-6 md:col-span-5 md:row-span-3 md:col-start-5 overflow-hidden">
          <Image
            src={bentoImages[0].image2}
            alt="bento"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="bg-green-500 rounded-[20px] col-span-9 row-span-6 md:col-span-5 md:row-span-3 md:col-start-5 md:row-start-4 overflow-hidden">
          <Image
            src={bentoImages[0].image3}
            alt="bento"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};
