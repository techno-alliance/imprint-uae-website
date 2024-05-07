import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";

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

      <div className="grid grid-cols-1 md:grid-cols-9 md:grid-rows-6 gap-4 2xl:gap-8 h-full md:h-[807px] w-full">
        <div className="rounded-[20px] col-span-9 row-span-6 md:col-span-4 md:row-span-6 overflow-hidden relative group">
          <Image
            src={bentoImages[0].image1}
            alt="bento"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute inset-0 w-full h-full opacity-0 transition-all duration-300 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(181deg, rgba(0, 0, 0, 0) 10.09%, rgb(0, 0, 0) 138.48%), 50% center #d3d3d300;",
            }}
          />
          <div className="absolute bottom-5 right-5 translate-y-[80px] group-hover:translate-y-0 transition-all duration-300">
            <button
              className="button-57 flex justify-center items-center gap-5 transition duration-300 py-1 w-max rounded-full text-[16px] lg:text-[20px] px-1 pr-4 text-white"
              href=""
            >
              <div className="bg-black rounded-full w-12 h-12 text-white flex justify-center items-center">
                <FaPhone />
              </div>
              <span className="text-btn flex gap-2 items-center">
                Make an enquiry?
              </span>

              <span className="pb-3">Make an enquiry?</span>
            </button>
          </div>
        </div>
        <div className="rounded-[20px] col-span-9 row-span-6 md:col-span-5 md:row-span-3 md:col-start-5 overflow-hidden relative group">
          <Image
            src={bentoImages[0].image2}
            alt="bento"
            className="w-full h-full object-cover object-center"
          />
           <div
            className="absolute inset-0 w-full h-full opacity-0 transition-all duration-300 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(181deg, rgba(0, 0, 0, 0) 10.09%, rgb(0, 0, 0) 138.48%), 50% center #d3d3d300;",
            }}
          />
          <div className="absolute bottom-5 right-5 translate-y-[80px] group-hover:translate-y-0 transition-all duration-300">
            <button
              className="button-57 flex justify-center items-center gap-5 transition duration-300 py-1 w-max rounded-full text-[16px] lg:text-[20px] px-1 pr-4 text-white"
              href=""
            >
              <div className="bg-black rounded-full w-12 h-12 text-white flex justify-center items-center">
                <FaPhone />
              </div>
              <span className="text-btn flex gap-2 items-center">
                Make an enquiry?
              </span>

              <span className="pb-3">Make an enquiry?</span>
            </button>
          </div>
        </div>
        <div className="rounded-[20px] col-span-9 row-span-6 md:col-span-5 md:row-span-3 md:col-start-5 md:row-start-4 overflow-hidden relative group">
          <Image
            src={bentoImages[0].image3}
            alt="bento"
            className="w-full h-full object-cover object-center"
          />
           <div
            className="absolute inset-0 w-full h-full opacity-0 transition-all duration-300 group-hover:opacity-100"
            style={{
              background:
                "linear-gradient(181deg, rgba(0, 0, 0, 0) 10.09%, rgb(0, 0, 0) 138.48%), 50% center #d3d3d300;",
            }}
          />
          <div className="absolute bottom-5 right-5 translate-y-[80px] group-hover:translate-y-0 transition-all duration-300">
            <button
              className="button-57 flex justify-center items-center gap-5 transition duration-300 py-1 w-max rounded-full text-[16px] lg:text-[20px] px-1 pr-4 text-white"
              href=""
            >
              <div className="bg-black rounded-full w-12 h-12 text-white flex justify-center items-center">
                <FaPhone />
              </div>
              <span className="text-btn flex gap-2 items-center">
                Make an enquiry?
              </span>

              <span className="pb-3">Make an enquiry?</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
