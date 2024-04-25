import React from "react";
import Image from "next/image";
import landing from "@/public/images/landing_img.png";
import christmas from "@/public/images/Christmas-stars.png";
import TextVideo from "./TextVideo";


const Hero = () => {
  return (
    <section class="relative overflow-hidden bg-black">
      <div class="min-h-screen h-full">
        <div class="pl-5 pr-5 sm:pl-10 sm:pr-10 md:pl-24 md:pr-24">
          <div class="flex flex-col pt-24 gap-4 relative text-left xs:text-left">
            <span class="text-[#C6C6C6] text-sm lg:text-lg">
              Unleash Your Vision
            </span>
            <span class="font-bold text-white text-4xl xss:text-5xl xs:text-[46px] sm:text-[48px] md:text-[50px] sm:leading-[48px] md:leading-[50px] lg:text-[76px] lg:leading-[76px] 2xl:text-8xl flex gap-10">
              <span class="flex flex-col">
                {" "}
                <span>Your Ultimate Offset</span>
                <p className="flex items-center gap-2">
                  <span class="text-[#1265D7]">Printing</span><span><TextVideo/></span> Partner
                </p>
              </span>
              <div class="hidden sm:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="128"
                  height="128"
                  viewBox="0 0 128 128"
                  fill="none"
                >
                  <g clip-path="url(#clip0_651_163)">
                    <path
                      d="M47.0363 0.997702C40.5418 36.2749 35.277 41.5395 0 48.0339C35.2773 54.5283 40.5418 59.7929 47.0363 95.0701C53.5307 59.7929 58.7953 54.5283 94.0726 48.0339C58.7953 41.5395 53.5305 36.2749 47.0363 0.997702Z"
                      fill="#5ACEF1"
                    />
                    <path
                      d="M98.0871 67.1757C93.9572 89.6106 90.6085 92.959 68.1738 97.0888C90.6085 101.219 93.9572 104.567 98.0871 127.002C102.217 104.567 105.566 101.219 128 97.0888C105.565 92.959 102.217 89.6106 98.0871 67.1757Z"
                      fill="#5ACEF1"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_651_163">
                      <rect width="128" height="128" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </span>
          </div>
          <div class="lp_center pt-12 pb-[55vh] sm:pt-8 sm:pb-[30%] flex justify-between items-center">
            <div class="two_circle flex sm:w-1/2 sm:flex-row gap-12 items-center">
              <div class="circles flex relative">
                <div class="circle1 bg-[#1265D7] w-14 h-14 rounded-full"></div>
                <div class="circle2 bg-[#93B2DF] w-14 h-14 rounded-full absolute left-4"></div>
                <div class="circle2 bg-[#D3E5FF] w-14 h-14 rounded-full absolute left-8"></div>
              </div>
              <div class="text-white flex flex-col text-sm font-[500]">
                <span>15,000+</span>
                <span>Satisfied client</span>
              </div>
            </div>
            <div class="xmas_star w-14 block sm:hidden">
              <Image class="w-full" src={christmas} alt="" />
            </div>
            <div class="w-1/2 sm:w-2/5 text-[#5C5858] hidden sm:block 2xl:text-xl">
              <span>
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </span>
            </div>
          </div>
        </div>
        <div class="bottam_lp_img bottam_lp_img_desktop hidden md:hidden portrait:hidden landscape:block sm:block absolute -bottom-12 md:-bottom-12 left-1/2 -translate-x-1/2 -translate-y-0 w-full pl-5 pr-5 sm:pl-10 sm:pr-10 md:pl-24 md:pr-24">
          <div class="relative">
            <div class="flex overflow-hidden rounded-[45px]">
              <Image class="w-full" src={landing} alt="" />
            </div>
            <div class="rounded-3xl lg:rounded-[20px] backdrop-blur-[31px] absolute -top-[10%] left-[3%] w-[345px] lg:w-[210px] p-4 lg:p-7">
              <div class="flex flex-col gap-2">
                <span class="text-sm font-[500] text-black">
                  Imprint Printing
                </span>
                <span class="text-sm text-black">
                  Imprint Printing Press is not just any ordinary printing
                  company - we are the foremost provider of varied{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="bottam_lp_img bottam_lp_img_mobile_screen block md:block portrait:block landscape:hidden sm:hidden bottom-0 h-[50vh] overflow-hidden rounded-t-3xl absolute">
          <div class="relative">
            <div class="flex">
              <Image class="w-full" src={landing} alt="" />
            </div>
            <div class="layer_bottom_lp_img absolute left-[50%] w-[90%] p-4 lg:p-7 top-[15%] -translate-x-[50%] text-center">
              <span class="text-sm text-white md:text-2xl">
                Imprint Printing Press is not just any ordinary printing company
                - we are the foremost provider of varied{" "}
              </span>
            </div>
            <div class="layer_bottom_lp_img rounded-2xl bg-[#FFFFFF66] absolute left-[50%] w-[90%] p-4 lg:p-7 bottom-[15%] -translate-x-[50%]">
              <div class="flex flex-col gap-2">
                <span class="text-sm md:text-2xl font-[500] text-white">
                  Imprint Printing
                </span>
                <span class="text-sm md:text-2xl text-white">
                  Imprint Printing Press is not just any ordinary printing
                  company - we are the foremost provider of varied{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;