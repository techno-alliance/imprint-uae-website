import Image from "next/image";
import React from "react";

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
          className=" h-9 md:h-10 rounded-full p-2.5 text-sm md:text-base border border-[#2E2E2E] bg-[#1A1A1A] text-primary vh-center w-[123px]
"
        >
          Category
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

      <div className="grid gap-6 lg:gap-40 grid-cols-6 w-full justify-between">
        <div className="col-span-6 md:col-span-3 w-full flex flex-col gap-8">
          <div className="flex flex-col gap-3">
            <p className="text-2xl md:text-[32px] leading-[140%] font-semibold">
              {bentoImages[0].title} Food Packaging
            </p>
            <p className="text-sm md:text-[20px] font-normal text-[#DADADA]">
              {bentoImages[0].subtitle} Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..
            </p>
            <a
              href=""
              className="text-sm md:text-[20px] font-normal text-[#DADADA] pt-5"
            >
              Choose Now
            </a>
          </div>
          <div className="w-full h-[700px] rounded-[20px] overflow-hidden">
            <Image
              src={bentoImages[0].image1}
              alt="bento"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
        <div className="col-span-6 md:col-span-3 w-full flex flex-col gap-8">
          <div className="w-full h-[700px] rounded-[20px] overflow-hidden">
            <Image
              src={bentoImages[0].image3}
              alt="bento"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="flex flex-col gap-3">
            <p className="text-2xl md:text-[32px] leading-[140%] font-semibold">
              {bentoImages[0].title2} Food Packaging
            </p>
            <p className="text-sm md:text-[20px] font-normal text-[#DADADA]">
              {bentoImages[0].subtitle2} Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..
            </p>
            <a
              href=""
              className="text-sm md:text-[20px] font-normal text-[#DADADA] pt-5"
            >
              Choose Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
