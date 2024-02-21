import React from "react";
import Image from "next/image";
import production from "/public/images/production.jpg";
import avatar from "/public/images/avatar.jpg";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import freeflyer from "/public/images/freeflyer.png";
import simple from "/public/images/simple.png";

// import Carousel from "@/components/Carousel"

const page = () => {
  return (
    <div>
      <section className="pt-[72px] h-[100vh]">
        <div className="w-full h-full overflow-hidden relative">
          <Image
            className="w-[100%] h-[100%] object-cover object-center"
            src={production}
          ></Image>
          <div className="absolute left-[30px] lg:left-[85px] top-32 lg:top-20">
            <p className="text-[#fff] text-[50px] lg:text-[110px] font-semibold">
              Production
            </p>
            <p className="text-[#fff] text-[16px] lg:text-[22px] font-normal w-[200px] lg:w-[450px]">
              we offer a comprehensive range of printing solutions tailored to
              meet your unique needs.
            </p>
          </div>
          <div className="flex justify-between absolute bottom-[41px] left-[20px] lg:left-[85px]">
            <div className="flex items-center gap-3 lg:gap-11">
              <div className="-space-x-4">
                <Image
                  className="relative z-10 inline object-cover w-[40px] h-[40px] lg:w-[68px] lg:h-[68px] border-[6px] border-white rounded-full"
                  src={avatar}
                  alt="Profileimage"
                ></Image>
                <Image
                  className="relative z-10 inline object-cover w-[40px] h-[40px] lg:w-[68px] lg:h-[68px] border-[6px] border-white rounded-full"
                  src={avatar}
                  alt="Profileimage"
                ></Image>
                <Image
                  className="relative z-10 inline object-cover w-[40px] h-[40px] lg:w-[68px] lg:h-[68px] border-[6px] border-white rounded-full"
                  src={avatar}
                  alt="Profileimage"
                ></Image>
              </div>
              <div>
                <p className="text-[#fff] text-[12px] lg:text-[18px] font-bold">
                  15,000+
                </p>
                <p className="text-[#28AAE3] text-[12px] lg:text-[18px] font-medium">
                  Satisfied client
                </p>
              </div>
            </div>
          </div>
          <div className="absolute right-[30px] lg:right-[85px] bottom-[41px]">
            <button className="text-[#28AAE3] text-[14px] lg:text-[22px] font-normal underline">
              Explore
            </button>
          </div>
        </div>
      </section>
      <section className="pt-5">
        <div className="max-w-screen-xl mx-auto px-12 py-20">
          <div className="flex flex-col lg:flex-row justify-between">
            <div className="flex flex-col justify-center gap-5 w-auto lg:w-[500px]">
              <p className="text-[#111] text-[22px] lg:text-[32px] font-semibold">
                The Pro Range Printing Solutions
              </p>
              <p className="text-[#111] text-[16px] lg:text-[22px] font-light">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p>
            </div>
            <div className="flex flex-col justify-center gap-5 w-auto lg:w-[600px]">
              <p className="text-[#111] text-[24px] lg:text-[48px] font-semibold">
                We Print Paper Products Of Any Formats
              </p>
              <p className="text-[#111] text-[16px] lg:text-[22px] font-light">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p>
            </div>
          </div>
          {/* <div className="flex flex-col justify-between gap-1 lg:gap-20 text-center lg:text-start lg:flex-row">
            <div class="flex flex-col justify-center gap-5 md:basis-2/5 md:min-w-2/5 md:m-0 lg:basis-1/2 lg:min-w-1/2 lg:m-0">
            <p className="text-[#111] text-[22px] lg:text-[32px] font-semibold">
                The Pro Range Printing Solutions
              </p>
              <p className="text-[#111] text-[16px] lg:text-[22px] font-light">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p>
            </div>
            <div class="md:basis-2/5 md:min-w-2/5 md:m-0 lg:basis-1/2 lg:min-w-1/2 lg:m-0 overflow-hidden h-full md:h-[450px]">
            <p className="text-[#111] text-[24px] lg:text-[48px] font-semibold">
                We Print Paper Products Of Any Formats
              </p>
              <p className="text-[#111] text-[16px] lg:text-[22px] font-light">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p>
            </div>
          </div> */}
        </div>
        {/* <Carousel/> */}
      </section>
      <section className="h-[200vh]">
        <div className="max-w-screen-xl mx-auto px-12 py-20">
          <div className="flex justify-center">
            <p className="text-[#0A0A0A] text-[50px] lg:text-[100px] font-semibold text-center flex flex-col gap-2 leading-none">
              Hight Quality <span className="text-[#28AAE3]">Production</span>{" "}
            </p>
          </div>
          <div className="relative pt-20">
            <div className="flex flex-col gap-2 w-auto md:w-[300px] lg:w-[400px]">
              <p className="text-[#000] text-[20px] lg:text-[32px] font-semibold">
                The Pro Range Printing Solutions
              </p>
              <p className="w-auto md:w-[300px] lg:w-[450px] text-[#000] font-normal text-[16px] lg:text-[22px]">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p>
              <Link
                className="button-58 transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
                href=""
              >
                <span className="text-btn flex gap-2 items-center">
                  Order Now
                  <GoArrowUpRight className="text-[26px]" />
                </span>
                <span className="pb-3">
                  Order Now
                  <GoArrowUpRight className="text-[26px]" />
                </span>
              </Link>
            </div>
            <div className="absolute right-[10px] md:right-0 lg:right-0 -bottom-[250px] md:-bottom-[110px] lg:-bottom-[200px] w-[200px] md:w-[300px] lg:w-[400px] h-auto lg:h-[450px] overflow-hidden">
              <Image className="w-full h-full object-cover object-center" src={freeflyer}></Image>
            </div>
            <div className="absolute left-0 -bottom-[750px] md:-bottom-[355px] lg:-bottom-[500px] w-[200px] md:w-[300px] lg:w-[400px] h-auto lg:h-[450px] overflow-hidden">
              <Image className="w-full h-full object-cover object-center" src={simple}></Image>
            </div>
            <div className="flex flex-col gap-2 absolute right-0 -bottom-[520px] md:-bottom-[350px] lg:-bottom-[510px] w-auto md:w-[300px] lg:w-[400px]">
              <p className="text-[#000] text-[20px] lg:text-[32px] font-semibold">
                The Pro Range Printing Solutions
              </p>
              <p className="w-auto md:w-[300px] lg:w-[450px] text-[#000] font-normal text-[16px] lg:text-[22px]">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p>
              <Link
                className="button-58 transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
                href=""
              >
                <span className="text-btn flex gap-2 items-center">
                  Order Now
                  <GoArrowUpRight className="text-[26px]" />
                </span>
                <span className="pb-3">
                  Order Now
                  <GoArrowUpRight className="text-[26px]" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
