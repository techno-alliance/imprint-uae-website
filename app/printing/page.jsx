import React from "react";
import Image from "next/image";
import printing from "/public/Images/printing2.png";
import envelop from "/public/Images/envelop.png";
import Link from "next/link";
import brochure from "/public/Images/brochure.png";
import business from "/public/Images/business.png";
import book1 from "/public/Images/books1.png";
import flyers from "/public/Images/flyers.png";
import signage from "/public/Images/signage.png";
import poster from "/public/Images/poster.png";
import stationary from "/public/Images/stationary.png";
import catalog from "/public/Images/catalog.png";

const page = () => {
  return (
    <div>
      <section className="pt-[72px] h-[100vh]">
        <div className="w-full h-full overflow-hidden relative">
          <Image
            className="w-[100%] h-[100%] object-cover object-center"
            src={printing}
          ></Image>
          <div className="absolute right-36 top-20">
            <p className="text-[#fff] opacity-65 text-[110px] font-semibold">
              Printing
            </p>
            <p className="text-[#fff] opacity-65 text-[22px] font-normal w-[450px]">
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
                className="button-58 transition duration-300 p-2 w-max rounded-full text-xs px-4 text-white"
                href=""
              >
                <span className="text-btn">Order Now</span>
                <span>Order Now</span>
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
            <p className="text-[#000] text-[40px] lg:text-[48px] font-bold leading-none lg:leading-normal">More Explore our <br /> Latest <span className="text-[#0092D1]">Collections</span> </p>
            <div className="flex flex-col justify-center items-center gap-10 lg:flex-row lg:justify-between">
              <div className="flex gap-5 lg:gap-10 items-center">
                <div className="flex flex-col gap-5 lg:gap-10">
                  <p className=" text-[16px] lg:text-[26px] font-medium">
                    Flyers
                  </p>
                  <p className="text-[12px] lg:text-[20px] text-[#676666] font-normal">Imprint printing press is the </p>
                </div>
                <div className="w-auto h-auto lg:w-[240px] lg:h-[200px] overflow-hidden ">
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
                  <p className="text-[12px] lg:text-[20px] text-[#676666] font-normal">Imprint printing press is the </p>
                </div>
                <div className="w-auto h-auto lg:w-[240px] lg:h-[200px] overflow-hidden ">
                  <Image
                    className="w-[100%] h-[100%] object-cover object-center"
                    src={signage}
                  ></Image>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-5">
            <div className="flex flex-col h-full group">
              <div className="w-[100%] md:w-[210px] md:h-[200px] lg:w-full h-full lg:h-[250px] overflow-hidden">
                <Image
                  src={stationary}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
                <p className="text-[#000] text-[16px] lg:text-[24px] font-bold">Stationery</p>
             
              <p className="text-[14px] lg:text-[20px] font-medium py-3 pr-10">
              Imprint printing press is the foremost provider....
              </p>
            </div>
            <div className="flex flex-col h-full group">
              <div className="w-[100%] md:w-[210px] md:h-[200px] lg:w-full h-full lg:h-[250px] overflow-hidden">
                <Image
                  src={catalog}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-[#000] text-[16px] lg:text-[24px] font-bold">Catalogs</p>
              <p className="text-[14px] lg:text-[20px] font-medium py-3 pr-10">
              Imprint printing press is the foremost provider....
              </p>
            </div>
            <div className="flex flex-col h-full group">
              <div className="w-[100%] md:w-[210px] md:h-[200px] lg:w-full h-full lg:h-[250px] overflow-hidden">
                <Image
                  src={poster}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="text-[#000] text-[16px] lg:text-[24px] font-bold">Posters</p>
              <p className="text-[14px] lg:text-[20px] font-medium py-3 pr-10">
              Imprint printing press is the foremost provider....
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
