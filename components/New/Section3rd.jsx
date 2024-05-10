import Image from "next/image";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { PiArrowUpRight } from "react-icons/pi";
import Link from "next/link";

export const Section3rd = ({
  header = "",
  headercolor = "",
  description = "",
  image,
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
          <div className="flex flex-col gap-6">
            {/* <p className="text-sm md:text-[16px] font-normal md:w-[400px] xl:w-[540px] pt-2">
              {description}
            </p> */}
            <Link
              className="mt-6 button-57 flex justify-center items-center gap-5 transition duration-300 py-1 w-max rounded-full text-[16px] lg:text-[20px] px-1 pr-4 text-white"
              href="/contact"
            >
              <div className="bg-black rounded-full w-12 h-12 text-white flex justify-center items-center">
                <FaPhone />
              </div>
              <span className="text-btn flex gap-2 items-center">
                Make an enquiry?
              </span>

              <span className="pb-3">Make an enquiry?</span>
            </Link>
          </div>
        </div>
      </div>

     <div className="rounded-[20px] overflow-hidden w-full h-[250px] md:h-[559px]">
       <Image
         src={image}
         alt="bento"
         className="w-full h-full object-cover object-center"
       />
     </div>
    </div>
  );
};
