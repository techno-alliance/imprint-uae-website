import React from "react";
import Image from "next/image";
import production from "/public/images/production.jpg";
import avatar from "/public/images/avatar.jpg";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import freeflyer from "/public/images/freeflyer.png";
import simple from "/public/images/simple.png";
import sidepack from "/public/images/sidepack.png";
import icecream from "/public/images/icecream.png";
import paper from "/public/images/paper.png";
import { FiSend } from "react-icons/fi";
import ProductHero from "@/components/ProductHero"

// import Carousel from "@/components/Carousel"

const page = () => {
  return (
    <div>
      <ProductHero/>
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
      <section className="bg-[#000]">
        <div className="h-[100vh] overflow-hidden relative">
          <Image
            className="w-full lg:w-[50%] h-full object-cover object-center"
            src={sidepack}
          ></Image>
          <div className="absolute right-20 top-10">
            <p className="text-[#28AAE3] text-[50px] lg:text-[110px] font-bold flex flex-col gap-2 leading-none">
              Premium{" "}
              <span className="text-[#fff] text-[26px] lg:text-[64px] font-semibold">
                Quality Printing
              </span>{" "}
              <span className="text-[26px] lg:text-[64px]"> Services</span>
            </p>
          </div>
        </div>
      </section>
      <section className="h-[150vh]">
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
            <div className="absolute right-[10px] md:right-0 lg:right-0 -bottom-[200px] md:-bottom-[10px] lg:-bottom-[200px] w-[200px] md:w-[300px] lg:w-[400px] h-auto lg:h-[450px] overflow-hidden">
              <Image
                className="w-full h-full object-cover object-center"
                src={freeflyer}
              ></Image>
            </div>
            <div className="absolute left-0 -bottom-[390px] md:-bottom-[355px] lg:-bottom-[500px] w-[200px] md:w-[300px] lg:w-[400px] h-auto lg:h-[450px] overflow-hidden">
              <Image
                className="w-full h-full object-cover object-center"
                src={simple}
              ></Image>
            </div>
            <div className="flex flex-col gap-2 absolute right-0 -bottom-[650px] md:-bottom-[350px] lg:-bottom-[510px] w-auto md:w-[300px] lg:w-[400px]">
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
      <section className="pt-96 md:pt-60 lg:pt-80">
        <div className="max-w-screen-xl mx-auto px-12 py-20">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="bg-[#393939] w-full h-full flex flex-col gap-1 p-10">
              <p className="text-[#fff] text-[30px] lg:text-[100px] font-semibold">
                Production
              </p>
              <p className="text-[#fff] text-[16px] lg:text-[40px] font-normal">
                We Print Paper Products Of Any Formats
              </p>
              <div className="w-full lg:w-[420px] h-full ">
                <Image
                  className="w-full h-full object-cover object-center"
                  src={icecream}
                ></Image>
              </div>
              <Link
                className="button-58 transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
                href=""
              >
                <span className="text-btn flex gap-2 items-center">
                  Explore More
                  <GoArrowUpRight className="text-[26px]" />
                </span>
                <span className="pb-3">
                  Explore More
                  <GoArrowUpRight className="text-[26px]" />
                </span>
              </Link>
            </div>
            <div className="flex flex-col gap-5">
              <div className="bg-[#CCD0D3] w-full lg:w-[439px] h-full p-5 py-14 relative">
                <p className="text-[#0A0A0A] text-[24px] lg:text-[40px] font-semibold">
                  See Our Services
                </p>
                  <div className="w-[100px] md:w-[200px] lg:w-[300px] absolute right-10 md:top-0 lg:top-10 h-full hidden md:block">
                    <Image
                      className="w-full h-full object-cover object-center"
                      src={paper}
                    ></Image>
                  </div>
                  <div className="absolute bottom-3 lg:bottom-10">
                  <GoArrowUpRight className="text-[40px] lg:text-[56px]" />
                  </div>
              </div>
              <div className="bg-[#28AAE3] w-full lg:w-[439px] flex flex-col justify-between h-full p-5">
                <div className="flex justify-between">
                <p className="text-[#fff] text-[20px] font-semibold">
                  See Our Services
                </p>
                <FiSend className="text-[20px] lg:text-[40px] text-white" />
                </div>
                <div>
                  <p className="text-[#fff] text-[24px] lg:text-[48px] font-bold">Contact Us</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
