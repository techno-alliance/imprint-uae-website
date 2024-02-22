import React from "react";
import Image from "next/image";
import printing from "/public/images/printing2.png";
import envelop from "/public/images/envelop.png";
import Link from "next/link";
import brochure from "/public/images/brochure.png";
import business from "/public/images/business.png";
import book1 from "/public/images/books1.png";
import flyers from "/public/images/flyers.png";
import signage from "/public/images/signage.png";
import poster from "/public/images/poster.png";
import stationary from "/public/images/stationary.png";
import catalog from "/public/images/catalog.png";
import premium from "/public/images/premium.png";
import brochure1 from "/public/images/brochure1.png";
import business1 from "/public/images/business1.png";
import magazine from "/public/images/magazine1.png";
import { GoArrowUpRight } from "react-icons/go";

const page = () => {
  return (
    <div>
      <section className="pt-[72px] h-[100vh]">
        <div className="w-full h-full overflow-hidden relative">
          <Image
            className="w-[100%] h-[100%] object-cover object-center"
            src={printing}
          ></Image>
          <div className="absolute lg:right-36 top-20">
            <p className="text-[#fff] opacity-65 text-[50px] lg:text-[110px] font-semibold">
              Printing
            </p>
            <p className="text-[#fff] opacity-65 text-[22px] font-normal w-auto lg:w-[450px]">
              we offer a comprehensive range of printing solutions tailored to
              meet your unique needs.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class=" max-w-screen-xl px-12 py-20 mx-auto flex flex-col gap-20">
          <div className="flex flex-col-reverse justify-between gap-1 lg:gap-20 text-center lg:text-start md:flex-row lg:flex-row">
            <div class="flex flex-col justify-center gap-5 md:basis-2/5 md:min-w-2/5 md:m-0 lg:basis-1/2 lg:min-w-1/2 lg:m-0">
              <h1 class="mt-16 text-[50px] lg:text-[7.5rem] lg:mt-0 text-[#0092D1] font-bold leading-none flex flex-col">
                Food
                <span className="text-[40px] lg:text-[100px] font-light text-[#000]">
                  Packaging{" "}
                </span>
              </h1>
              <p class="text-[16px] lg:text-[22px] font-normal">
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
            <div class="img_appear md:basis-2/5 md:min-w-2/5 md:m-0 lg:basis-1/2 lg:min-w-1/2 lg:m-0 overflow-hidden h-full md:h-[450px]">
              <Image
                src={envelop}
                className="w-[100%] h-[100%] object-cover object-center"
              ></Image>
            </div>
          </div>
          <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-5">
            <div className="flex flex-col h-full group">
              <div className="w-[100%] md:w-[200px] lg:w-[300px] h-full md:h-[200px] lg:h-[200px] overflow-hidden">
                <Image
                  src={brochure}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <p className="text-[16px] font-medium py-3">Brochures</p>
            </div>
            <div className="flex flex-col h-full group">
              <div className="w-[100%] md:w-[200px] lg:w-[300px] h-full md:h-[200px] lg:h-[200px] overflow-hidden">
                <Image
                  src={business}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <p className="text-[16px] lg:text-[24px] font-medium py-3">
                Business Card
              </p>
            </div>
            <div className="flex flex-col h-full group">
              <div className="w-[100%] md:w-[200px] lg:w-[300px] h-full md:h-[200px] lg:h-[200px] overflow-hidden">
                <Image
                  src={book1}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <p className="text-[16px] lg:text-[24px] font-medium py-3">
                Books & Booklets
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto px-12 py-20">
          <div className="flex flex-col gap-16">
            <p className="text-[#000] text-[40px] lg:text-[48px] font-bold leading-none lg:leading-normal">
              More Explore our <br /> Latest{" "}
              <span className="text-[#0092D1]">Collections</span>{" "}
            </p>
            <div className="flex flex-col justify-center items-center gap-10 md:flex-row lg:flex-row lg:justify-between">
              <div className="flex gap-5 lg:gap-10 items-center">
                <div className="flex flex-col gap-5 lg:gap-10">
                  <p className=" text-[16px] lg:text-[26px] font-medium">
                    Flyers
                  </p>
                  <p className="text-[12px] lg:text-[20px] text-[#676666] font-normal">
                    Imprint printing press is the{" "}
                  </p>
                </div>
                <div className="w-auto h-auto md:w-[240px] md:h-[200px] lg:w-[240px] lg:h-[200px] overflow-hidden ">
                  <Image
                    className="w-[100%] h-[100%] object-cover object-center"
                    src={flyers}
                  ></Image>
                </div>
              </div>
              <div className="flex gap-5 lg:gap-10 items-center">
                <div className="flex flex-col gap-5 lg:gap-10">
                  <p className="text-[14px] lg:text-[26px] font-medium">
                    Flyers
                  </p>
                  <p className="text-[12px] lg:text-[20px] text-[#676666] font-normal">
                    Imprint printing press is the{" "}
                  </p>
                </div>
                <div className="w-auto h-auto md:w-[240px] md:h-[200px] lg:w-[240px] lg:h-[200px] overflow-hidden ">
                  <Image
                    className="w-[100%] h-[100%] object-cover object-center"
                    src={signage}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-5">
              <div className="flex flex-col h-full group">
                <div className="w-[100%] md:h-[200px] lg:w-full h-full lg:h-[250px] overflow-hidden">
                  <Image
                    src={stationary}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <p className="text-[#000] text-[16px] lg:text-[24px] font-bold">
                  Stationery
                </p>

                <p className="text-[14px] lg:text-[20px] font-medium py-3 pr-10">
                  Imprint printing press is the foremost provider....
                </p>
              </div>
              <div className="flex flex-col h-full group">
                <div className="w-[100%]  md:h-[200px] lg:w-full h-full lg:h-[250px] overflow-hidden">
                  <Image
                    src={catalog}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-[#000] text-[16px] lg:text-[24px] font-bold">
                  Catalogs
                </p>
                <p className="text-[14px] lg:text-[20px] font-medium py-3 pr-10">
                  Imprint printing press is the foremost provider....
                </p>
              </div>
              <div className="flex flex-col h-full group">
                <div className="w-[100%]  md:h-[200px] lg:w-full h-full lg:h-[250px] overflow-hidden">
                  <Image
                    src={poster}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-[#000] text-[16px] lg:text-[24px] font-bold">
                  Posters
                </p>
                <p className="text-[14px] lg:text-[20px] font-medium py-3 pr-10">
                  Imprint printing press is the foremost provider....
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="h-[100vh] overflow-hidden relative">
          <Image
            className="w-full h-full object-cover object-center"
            src={premium}
          ></Image>
          <div className="absolute left-10 lg:left-20 top-10">
            <p className="text-[#28AAE3] text-[50px] lg:text-[110px] font-bold flex flex-col gap-2 leading-none">
              Premium{" "}
              <span className="text-[#fff] text-[44px] lg:text-[64px] font-semibold">
                Quality Printing
              </span>{" "}
              <span className="text-[44px] lg:text-[64px]"> Services</span>
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto px-12 py-20">
          <div className="flex flex-col-reverse justify-between gap-1 lg:gap-20 text-center lg:text-start lg:flex-row">
            <div class="flex flex-col justify-center gap-5 md:basis-2/5 md:min-w-2/5 md:m-0 lg:basis-1/2 lg:min-w-1/2 lg:m-0">
              <p class="mt-16 text-[24px] lg:text-[48px] lg:mt-0 text-[#000] font-medium leading-none lg:leading-[62px]">
              The Pro Range Printing Solutions
              </p>
              <p class="text-[16px] lg:text-[22px] font-normal">
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
            <div class="md:basis-2/5 md:min-w-2/5 md:m-0 lg:basis-1/2 lg:min-w-1/2 lg:m-0 overflow-hidden h-full md:h-[450px]">
            <p class="mt-16 text-[50px] lg:text-[110px] lg:mt-16 text-[#000] font-bold leading-none lg:leading-[104px]">
            Print With The 
                <span className="text-[40px] lg:text-[110px] font-bold text-[#0092D1]">
                Best
                </span>
              </p>
            </div>
          </div>
          <div className="pt-10 flex flex-col md:flex-row lg:flex-row justify-between gap-5">
              <div className="flex flex-col h-full group">
                <div className="w-[100%] md:h-[200px] lg:w-full h-full lg:h-[350px] overflow-hidden">
                  <Image
                    src={brochure1}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                <p className="text-[#000] text-[16px] lg:text-[24px] font-bold">
                Brochures
                </p>

                <p className="text-[14px] lg:text-[20px] font-medium py-3 pr-10 text-[#676666]">
                  Imprint printing press is the foremost provider....
                </p>
              </div>
              <div className="flex flex-col h-full group">
                <div className="w-[100%] md:h-[200px] lg:w-full h-full lg:h-[200px] overflow-hidden">
                  <Image
                    src={business1}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-[#000] text-[16px] lg:text-[24px] font-bold">
                Business Cards
                </p>
                <p className="text-[14px] lg:text-[20px] font-medium py-3 pr-10 text-[#676666]">
                  Imprint printing press is the foremost provider....
                </p>
              </div>
              <div className="flex flex-col h-full group">
                <div className="w-[100%] md:h-[200px] lg:w-full h-full lg:h-[250px] overflow-hidden">
                  <Image
                    src={magazine}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-[#000] text-[16px] lg:text-[24px] font-bold">
                Magazines
                </p>
                <p className="text-[14px] lg:text-[20px] font-medium py-3 pr-10 text-[#676666]">
                  Imprint printing press is the foremost provider....
                </p>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default page;
