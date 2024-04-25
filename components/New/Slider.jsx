import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import box from "@/public/images/pad.png"
import { GoArrowUpRight } from "react-icons/go";


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
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        // loop={true}
        // pagination={{
        //   clickable: true,
        // }}
        // navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <div className='absolute right-[80px] top-[0px] z-20'>
        <SwiperNavButtons/>
        </div>
        <SwiperSlide className='rounded-[10px] !w-[514px] !h-[605px] !overflow-hidden !relative group'>
          <Image src={box} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Printing</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center bg-transparent transition-transform duration-300 py-3 px-5 rounded-[10px] group-hover:bg-white/20'>
              <p className='text-transparent text-[28px] font-normal group-hover:text-white'>Printing</p>
              <p className='text-transparent text-[28px] font-normal group-hover:text-white'><GoArrowUpRight/></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-[10px] !w-[514px] !h-[605px] !overflow-hidden !relative'>
          <Image src={box} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Printing</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center bg-white/20 py-3 px-5 rounded-[10px]'>
              <p className='text-white text-[28px] font-normal'>Printing</p>
              <p className='text-white text-[28px] font-normal'><GoArrowUpRight/></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-[10px] !w-[514px] !h-[605px] !overflow-hidden !relative'>
          <Image src={box} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Printing</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center bg-white/20 py-3 px-5 rounded-[10px]'>
              <p className='text-white text-[28px] font-normal'>Printing</p>
              <p className='text-white text-[28px] font-normal'><GoArrowUpRight/></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className='rounded-[10px] !w-[514px] !h-[605px] !overflow-hidden !relative'>
        <Image src={box} className='w-full h-full object-cover'/>
          <div className='absolute top-0 right-0 p-5'>
            <div className='flex justify-center items-center bg-white py-2 px-4 rounded-full'>
              <p className='text-black text-[16px] font-semibold'>Printing</p>
            </div>
          </div>
          <div className='absolute bottom-0 p-5 w-full'>
            <div className='flex w-full justify-between items-center bg-white/20 py-3 px-5 rounded-[10px]'>
              <p className='text-white text-[28px] font-normal'>Printing</p>
              <p className='text-white text-[28px] font-normal'><GoArrowUpRight/></p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
  
      </Swiper>
    </>
  );
}
