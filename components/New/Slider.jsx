import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import box from "@/public/images/pad.png"
import { GoArrowUpRight } from "react-icons/go";
import project1 from "@/public/images/project1.png"
import project4 from "@/public/images/project4.png"
import book from "@/public/images/books1.png"


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
    <div className="max-w-screen-xl mx-auto px-10">
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
            <div className="flex justify-center items-center w-auto lg:w-[400px]">
              <p className="text-[#DADADA] text-center lg:text-left text-xl font-normal leading-[160%]">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
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
            spaceBetween:30,
          },
  
          1280: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
  
          1536:{
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className='absolute right-[80px] top-[0px] z-20'>
        <SwiperNavButtons/>
        </div>
        <SwiperSlide className='!p-3 lg:!p-0 !bg-black !w-fit'>
          <div className='rounded-[10px] !w-full !h-full lg:!w-[450px] lg:!h-[550px] !overflow-hidden !relative group'>
          <Image src={project1} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Printing</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center bg-transparent py-3 px-5 rounded-[10px] transition-transform duration-300 group-hover:bg-white/20'>
              <p className='text-transparent text-[28px] font-normal transition-transform duration-300 group-hover:text-white'>Printing</p>
              <p className='text-transparent text-[28px] font-normal transition-transform duration-300 group-hover:text-white'><GoArrowUpRight/></p>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!p-3 lg:!p-0 !bg-black !w-fit'>
          <div className='rounded-[10px] !w-full !h-full lg:!w-[450px] lg:!h-[550px] !overflow-hidden !relative group'>
          <Image src={project4} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Printing</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center bg-transparent py-3 px-5 rounded-[10px] transition-transform duration-300 group-hover:bg-white/20'>
              <p className='text-transparent text-[28px] font-normal transition-transform duration-300 group-hover:text-white'>Printing</p>
              <p className='text-transparent text-[28px] font-normal transition-transform duration-300 group-hover:text-white'><GoArrowUpRight/></p>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!p-3 lg:!p-0 !bg-black !w-fit'>
          <div className='rounded-[10px] !w-auto !h-auto lg:!w-[450px] lg:!h-[550px] !overflow-hidden !relative group'>
          <Image src={book} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Printing</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center bg-transparent py-3 px-5 rounded-[10px] transition-transform duration-300 group-hover:bg-white/20'>
              <p className='text-transparent text-[28px] font-normal transition-transform duration-300 group-hover:text-white'>Printing</p>
              <p className='text-transparent text-[28px] font-normal transition-transform duration-300 group-hover:text-white'><GoArrowUpRight/></p>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!p-3 lg:!p-0 !bg-black !w-fit'>
          <div className='rounded-[10px] !w-auto !h-auto lg:!w-[450px] lg:!h-[550px] !overflow-hidden !relative group'>
          <Image src={box} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Printing</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center bg-transparent py-3 px-5 rounded-[10px] transition-transform duration-300 group-hover:bg-white/20'>
              <p className='text-transparent text-[28px] font-normal transition-transform duration-300 group-hover:text-white'>Printing</p>
              <p className='text-transparent text-[28px] font-normal transition-transform duration-300 group-hover:text-white'><GoArrowUpRight/></p>
            </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='!p-3 lg:!p-0 !bg-black !w-fit'>
          <div className='rounded-[10px] !w-auto !h-auto lg:!w-[450px] lg:!h-[550px] !overflow-hidden !relative group'>
          <Image src={box} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Printing</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center bg-transparent py-3 px-5 rounded-[10px] transition-transform duration-300 group-hover:bg-white/20'>
              <p className='text-transparent text-[28px] font-normal transition-transform duration-300 group-hover:text-white'>Printing</p>
              <p className='text-transparent text-[28px] font-normal transition-transform duration-300 group-hover:text-white'><GoArrowUpRight/></p>
            </div>
          </div>
          </div>
        </SwiperSlide>
  
      </Swiper>
    </>
  );
}
