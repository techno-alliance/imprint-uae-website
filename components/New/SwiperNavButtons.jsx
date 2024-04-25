import React from 'react';
import { useSwiper } from 'swiper/react';
import { MdChevronLeft } from "react-icons/md";
import { MdChevronRight } from "react-icons/md";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btns flex gap-5">
      <button onClick={() => swiper.slidePrev()}><MdChevronLeft/></button>
      <button onClick={() => swiper.slideNext()}><MdChevronRight/></button>
    </div>
  );
};
