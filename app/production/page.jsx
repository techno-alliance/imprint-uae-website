import React from "react";
import Image from "next/image";
import production from "/public/Images/production.jpg"

const page = () => {
  return (
    <div>
      <section className="pt-[72px] h-[100vh]">
        <div className="w-full h-full overflow-hidden relative">
          <Image
            className="w-[100%] h-[100%] object-cover object-center"
            src={production}
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
      <section className="pt-36">
        <div className="max-w-screen-xl mx-auto px-12 py-20">
          <div className="flex justify-between">
            <div className="flex flex-col justify-center gap-5 w-[500px]">
              <p className="text-[#111] text-[22px] lg:text-[32px] font-semibold">
                The Pro Range Printing Solutions
              </p>
              <p className="text-[#111] text-[16px] lg:text-[22px] font-light">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p>
            </div>
            <div className="flex flex-col justify-center gap-5 w-[600px]">
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
      </section>
    </div>
  );
};

export default page;
