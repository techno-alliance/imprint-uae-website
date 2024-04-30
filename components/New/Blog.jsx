import React from "react";
import Image from "next/image";
import box1 from "/public/images/business.png";
import box2 from "/public/images/books1.png";
import box3 from "/public/images/brochure1.png";
import Link from "next/link";


const Blog = () => {
  return (
    <section className="max-w-screen-xl mx-auto py-20">
        <div className="flex flex-col gap-10 lg:gap-20">
          <div className="flex flex-col gap-5 justify-center items-center">
          <button
            className="button-58 flex justify-center items-center transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
            href=""
          >
            <span className="text-btn flex gap-2 items-center">
              Our service
            </span>
            <span className="pb-3">Our service</span>
          </button>
            <p className="text-3xl lg:text-5xl font-semibold text-white">Discover latest news here</p>
            <p className="text-lg font-normal text-white/60 w-auto lg:w-[642px] text-center">Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..</p>
          </div>
          <div className="flex flex-col lg:flex-row justify-between gap-5 p-5 lg:p-0">
            <div className="flex flex-col gap-3 h-full group bg-[#1A1A1A] rounded-[10px] p-3">
              <div className="w-[100%] h-full lg:h-[200px] overflow-hidden rounded-[7px]">
                <Image
                  src={box1}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="text-white/60 pt-2 text-sm">
                <p>November 30,2023</p>
              </div>
              <div>
              <p className="text-[24px] font-medium text-white">
              Reliable quality
              </p>
              <p className="text-sm font-medium text-white/60">
              Get speed and consistency—our global in-house and partner facilities offer competitive shipping rates and consistent quality.
              </p>
              </div>
              <Link href="#" className="text-[#28AAE3] pt-5 text-[16px] font-medium w-fit">Read more</Link>
            </div>
            <div className="flex flex-col gap-3 h-full group bg-[#1A1A1A] rounded-[10px] p-3">
              <div className="w-[100%] h-full lg:h-[200px] overflow-hidden rounded-[7px]">
                <Image
                  src={box2}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className=" text-white/60 pt-2 text-sm">
                <p>December 4,2023</p>
              </div>
              <div>
              <p className="text-[24px] font-medium text-white">
              Reliable quality
              </p>
              <p className="text-sm font-medium text-white/60">
              Get speed and consistency—our global in-house and partner facilities offer competitive shipping rates and consistent quality.
              </p>
              </div>
              <Link href="#" className="text-[#28AAE3] pt-5 text-[16px] font-medium w-fit">Read more</Link>
            </div>
            <div className="flex flex-col gap-3 h-full group bg-[#1A1A1A] rounded-[10px] p-3">
              <div className="w-[100%] h-full lg:h-[200px] overflow-hidden rounded-[7px]">
                <Image
                  src={box3}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className=" text-white/60 pt-2 text-sm">
                <p>December 30,2023</p>
              </div>
              <div>
              <p className="text-[24px] font-medium text-white">
              Reliable quality
              </p>
              <p className="text-sm font-medium text-white/60">
              Get speed and consistency—our global in-house and partner facilities offer competitive shipping rates and consistent quality.
              </p>
              </div>
              <Link href="#" className="text-[#28AAE3] pt-5 text-[16px] font-medium w-fit">Read more</Link>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Blog;
