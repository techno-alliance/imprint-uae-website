import React from "react";
import Image from "next/image";
import landing from "@/public/images/landing_img.png";
import christmas from "@/public/images/Christmas stars.svg";
import TextVideo from "./TextVideo";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="max-w-screen-xl mx-auto relative 2xl:h-[950px] h-full lg:h-full flex flex-col gap-6">
        <div className="px-5 lg:px-10 2xl:px-0 flex flex-col gap-6">
          <div className="flex flex-col pt-24 gap-4 relative text-left xs:text-left">
            <div className="text-[#C6C6C6] text-sm lg:text-lg">
              Unleash Your Vision
            </div>
            <div className="font-bold text-white text-4xl xss:text-5xl xs:text-[46px] sm:text-[48px] md:text-[50px] sm:leading-[48px] md:leading-[50px] lg:text-[76px] lg:leading-[76px] 2xl:text-8xl flex gap-10">
              <div className="flex flex-col">
                {" "}
                <h1>Your Ultimate Offset</h1>
                <div className="flex items-center gap-2">
                  <div className="text-[#1265D7]">Printing</div>
                  <TextVideo />
                  Partner
                </div>
              </div>
              <div className="hidden sm:block">
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
            </div>
            {/* <div className="font-bold text-white text-xl md:text-4xl lg:text-5xl lg:leading-[76px] 2xl:text-6xl flex gap-10">
              <div className="flex flex-col">
                {" "}
                <h1>Imprint Press for</h1>
                <div className="flex items-center gap-2">
                  <div className="text-[#1265D7]">make a lasting</div>
                  <TextVideo />
                  impression
                </div>  
              </div>
              <div className="hidden sm:block">
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
            </div> */}
          </div>
          <div className="lp_center flex flex-col gap-5 md:gap-0 md:flex-row justify-between items-start lg:items-center">
            <div className="flex gap-10 md:gap-0">
              <div className="two_circle flex sm:w-1/2 sm:flex-row gap-12 items-center">
                <div className="circles flex relative">
                  <div className="circle1 bg-[#1265D7] w-14 h-14 rounded-full"></div>
                  <div className="circle2 bg-[#93B2DF] w-14 h-14 rounded-full absolute left-4"></div>
                  <div className="circle2 bg-[#D3E5FF] w-14 h-14 rounded-full absolute left-8"></div>
                </div>
                <div className="text-white flex flex-col text-sm font-[500]">
                  <span>15,000+</span>
                  <span className="whitespace-nowrap">satisfied clients</span>
                </div>
              </div>
              <div className="xmas_star w-14 block sm:hidden">
                <Image className="w-full" src={christmas} alt="" />
              </div>
            </div>
            <div className=" text-[#5C5858] block 2xl:text-xl w-full md:w-[40%]">
              <span>
                We’re pioneers, passionately delivering offset solutions to over
                a thousand clients, right now and every day.
              </span>
            </div>
          </div>
        </div>
        <div className="bottam_lp_img bottam_lp_img_desktop hidden md:hidden portrait:hidden landscape:block sm:block w-full px-5 lg:px-10 2xl:px-0 relative -bottom-[166px] h-[400px] lg:h-full">
          <div className="relative">
            <div className="flex overflow-hidden rounded-[45px]">
              <Image
                className="w-full h-[60vh] lg:h-[80vh] 2xl:h-[60vh]"
                src={landing}
                alt=""
              />
            </div>
            <div className="rounded-3xl lg:rounded-[20px] border-[5px] border-[rgba(255,_255,_255,_0.10)] bg-[rgba(3,_4,_3,_0.40)] backdrop-blur-[31px] absolute -top-[10%] left-[3%] w-[345px] lg:w-[210px] p-4 lg:p-7">
              <div className="flex flex-col gap-2">
                <span className="text-sm font-[500] text-white">
                  Imprint Printing
                </span>
                <span className="text-sm text-white">
                Having started as a small, limited capacity unit, Imprint has now become a leading press in the UAE known for its cutting-edge technologies, quality-driven workforce and customer centric approach.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="bottam_lp_img bottam_lp_img_mobile_screen h-[100px] block md:block portrait:block landscape:hidden sm:hidden relative overflow-hidden rounded-t-3xl">
          <div className="relative">
            <div className="flex">
              <Image
                className="w-full h-[20vh] object-cover"
                src={landing}
                alt=""
              />
            </div>
            <div className="layer_bottom_lp_img absolute left-[50%] w-[90%] p-4 lg:p-7 top-[15%] -translate-x-[50%] text-center">
              <span className="text-sm text-white md:text-2xl">
                Imprint Printing Press is not just any ordinary printing company
                - we are the foremost provider of varied{" "}
              </span>
            </div>
            <div className="layer_bottom_lp_img rounded-2xl bg-[#FFFFFF66] absolute left-[50%] w-[90%] p-4 lg:p-7 bottom-[15%] -translate-x-[50%]">
              <div className="flex flex-col gap-2">
                <span className="text-sm md:text-2xl font-[500] text-white">
                  Imprint Printing
                </span>
                <span className="text-sm w-full md:text-2xl text-white">
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
