import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { GoArrowUpRight } from "react-icons/go";
import project1 from "@/public/images/printingnew.png"
import project2 from "@/public/images/foodpackaging.png"
import project3 from "@/public/images/paperproduction.png"
import project4 from "@/public/images/flyerbrochure.png"
import project5 from "@/public/images/paperkraft.png"


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '@/app/styles.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { SwiperNavButtons } from './SwiperNavButtons';

export default function App() {
  return (
    <>
    <div className='bg-black'>
    <div className="">
        <div className="flex flex-col justify-center items-center lg:items-start gap-3">
          <button
            className="button-58 flex transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
            href=""
          >
            <span className="text-btn flex gap-2 items-center">
              Our service
            </span>
            <span className="pb-3">Our service</span>
          </button>
          <div className="flex flex-col md:flex-row justify-between gap-5 lg:gap-20">
            <div className="w-auto lg:w-[630px]">
              <p className="text-[36px] lg:text-[48px] text-center lg:text-left leading-[140%] font-semibold text-white">
                Produce Stunning Printing For Your Business
              </p>
            </div>
            <div className="flex justify-center items-center w-auto lg:w-[400px] pb-5">
              {/* <p className="text-[#DADADA] text-center lg:text-left text-xl font-normal leading-[160%]">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // centeredSlides={true}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        breakpoints={{

          320:{
            slidesPerView:1,
            spaceBetween:0,
          }, 
  
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
  
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
  
          1024:{
            slidesPerView:3,
            spaceBetween:10,
          },
  
          1280: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
  
          1536:{
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper !pt-24"
      >
        <div className='absolute lg:right-0 lg:translate-x-[0%] top-[0px] z-20 translate-x-[50%] right-1/2'>
        <SwiperNavButtons/>
        </div>
        <SwiperSlide className='!p-3 lg:!p-0 !bg-black'>
          <div className='rounded-[10px] !w-full !h-[250px] lg:!w-[450px] lg:!h-[550px] !overflow-hidden !relative group'>
          <Image src={project1} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Printing</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center py-3 px-5 backdrop-filter backdrop-blur-lg bg-white/20 rounded-[10px] transition-all duration-300  opacity-0 group-hover:opacity-100'>
              <p className='text-[28px] font-normal text-white'>Business Cards</p>
              <p className='text-[28px] font-normal text-white'><GoArrowUpRight/></p>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!p-3 lg:!p-0 !bg-black'>
          <div className='rounded-[10px] !w-full !h-[250px] lg:!w-[450px] lg:!h-[550px] !overflow-hidden !relative group'>
          <Image src={project2} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Packaging</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center backdrop-filter backdrop-blur-lg py-3 px-5 bg-white/20 rounded-[10px] transition-all duration-300 opacity-0 group-hover:opacity-100'>
              <p className='text-[28px] font-normal text-white'>Food Packaging</p>
              <p className='text-[28px] font-normal text-white'><GoArrowUpRight/></p>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!p-3 lg:!p-0 !bg-black'>
          <div className='rounded-[10px] !w-full !h-[250px] lg:!w-[450px] lg:!h-[550px] !overflow-hidden !relative group'>
          <Image src={project3} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Production</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center py-3 px-5 backdrop-filter backdrop-blur-lg bg-white/20 rounded-[10px] transition-all duration-300 opacity-0 group-hover:opacity-100'>
              <p className='text-[28px] font-normal text-white'>Paper Production</p>
              <p className='text-[28px] font-normal text-white'><GoArrowUpRight/></p>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!p-3 lg:!p-0 !bg-black'>
          <div className='rounded-[10px] !w-full !h-[250px] lg:!w-[450px] lg:!h-[550px] !overflow-hidden !relative group'>
          <Image src={project4} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Printing</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center py-3 px-5 backdrop-filter backdrop-blur-lg bg-white/20 rounded-[10px] transition-all duration-300 opacity-0 group-hover:opacity-100'>
              <p className='text-[28px] font-normal text-white'>Flyer brochure</p>
              <p className='text-[28px] font-normal text-white'><GoArrowUpRight/></p>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!p-3 lg:!p-0 !bg-black'>
          <div className='rounded-[10px] !w-full !h-[250px] lg:!w-[450px] lg:!h-[550px] !overflow-hidden !relative group'>
          <Image src={project5} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Production</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center py-3 px-5 backdrop-filter backdrop-blur-lg bg-white/20 rounded-[10px] transition-all duration-300 opacity-0 group-hover:opacity-100'>
              <p className='text-[28px] font-normal text-white'>Paper kraft box</p>
              <p className='text-[28px] font-normal text-white'><GoArrowUpRight/></p>
            </div>
          </div>
          </div>
        </SwiperSlide>
  
      </Swiper>
    </>
  );
}
