"use client";
// import styles from "/components/style.module.scss";
// import Text3d from "/components/Text3d";
// import { useRef, useEffect } from "react";
import ZoomParallex from "/components/ZoomParallex.jsx"
import Image from "next/image";
import pad from "/public/images/pad.png"
import card from "/public/images/card.png"
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
// import card from "/public/images/project1.png"
// import card from "/public/images/project1.png"


export default function Home() {
  // const plane = useRef(null);
  // const maxRotate = 45;

  // const manageMouseMove = (e) => {
  //   const x = e.clientX / window.innerWidth;
  //   const y = e.clientY / window.innerHeight;
  //   const perspective = window.innerWidth * 4;
  //   const rotateX = maxRotate * x - maxRotate / 2;
  //   const rotateY = (maxRotate * y - maxRotate / 2) * -1;
  //   plane.current.style.transform = `perspective(${perspective}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg)`;
  // };

  return (
    <div className="pt-20">
      <section className="max-w-screen-xl mx-auto px-12">
        <p className="text-[40px] lg:text-[64px] text-[#000] font-semibold leading-none">Your Unlimited <span className="text-[#0092D1] text-[50px] lg:text-[110px] font-bold">Printing</span> <span className="font-bold text-[50px] lg:text-[110px]">Partner</span></p>
      </section>
       <div className="pt-20">
       <ZoomParallex/>
       </div>
      {/* <div
        onMouseMove={(e) => {
          manageMouseMove(e);
        }}
        className={styles.container}
      >
        <div ref={plane} className={styles.body}>
          <Text3d primary={"Turning"} secondary={"Turning"} />
          <Text3d primary={"Space"} secondary={"Space"} />
          <Text3d primary={"Into"} secondary={"Into"} />
          <Text3d primary={"Shapes"} secondary={"Shapes"} />
        </div>
      </div> */}
      <section className="bg-[#030D15] h-[100vh]">
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between py-10">
          <p className="text-[#fff] text-[20px] lg:text-[28px] font-semibold">Imprint's Commitment to Delivering Exceptional Print Quality</p>
          <Link
                className="button-58 transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
                href=""
              >
                <span className="text-btn flex gap-2 items-center">
                  Explore More
                  <GoArrowUpRight className="text-[26px]" />
                </span>
                <span className="pb-3">
                  Explore More
                  <GoArrowUpRight className="text-[26px]" />
                </span>
              </Link>
          </div>
          <div className="flex pt-10">
          <div className="">
          <Image className="w-full h-full object-cover object-center" src={pad}></Image>
          </div>
          <div>
          <Image className="w-full h-full object-cover object-center" src={card}></Image>
          </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-5 border-b-[1px] border-[#CBCBCB] p-5 group hover:bg-[#0092D1] duration-300">
              <p className="text-[#000] text-[44px] font-bold group-hover:text-[#fff]">We Print Your Vision into Reality</p>
            </div>                                                                        
            <div className="flex flex-col gap-5 border border-t-0 border-[#CBCBCB] p-10 group hover:bg-[#0092D1] duration-300">
              <p className="text-[#000] text-[24px] font-bold group-hover:text-[#fff]">We Print Your Vision into Reality</p>
              <p className="text-[#676666] text-[10px] font-normal group-hover:text-[#fff]">Imprint Printing Press is not just any ordinary printing company - we are the foremost provider of varied offset printing solutions to more than a thousand clients today. Our commitment to delivering exceptional quality prints, timely delivery, and excellent customer service has made us the go-to choice for businesses of all sizes.</p>
            </div>
            <div className="flex flex-col gap-5 border-b-[1px] border-[#CBCBCB] p-10 group hover:bg-[#0092D1] duration-300">
              <p className="text-[#000] text-[24px] font-bold group-hover:text-[#fff]">We Print Your Vision into Reality</p>
              <p className="text-[#676666] text-[10px] font-normal group-hover:text-[#fff]">Imprint Printing Press is not just any ordinary printing company - we are the foremost provider of varied offset printing solutions to more than a thousand clients today. Our commitment to delivering exceptional quality prints, timely delivery, and excellent customer service has made us the go-to choice for businesses of all sizes.</p>
            </div>
            <div className="flex flex-col gap-5  p-10 group hover:bg-[#0092D1]">
              <p className="text-[#676666] text-[10px] font-normal group-hover:text-[#fff]">Imprint Printing Press is not just any ordinary printing company - we are the foremost provider of varied offset printing solutions to more than a thousand clients today. Our commitment to delivering exceptional quality prints, timely delivery, and excellent customer service has made us the go-to choice for businesses of all sizes.</p>
            </div>
            <div className="flex flex-col gap-5 border-r-[1px] border-l-[1px] border-[#CBCBCB] p-10 group hover:bg-[#0092D1] duration-300">
              <p className="text-[#000] text-[24px] font-bold group-hover:text-[#fff]">We Print Your Vision into Reality</p>
              <p className="text-[#676666] text-[10px] font-normal group-hover:text-[#fff]">Imprint Printing Press is not just any ordinary printing company - we are the foremost provider of varied offset printing solutions to more than a thousand clients today. Our commitment to delivering exceptional quality prints, timely delivery, and excellent customer service has made us the go-to choice for businesses of all sizes.</p>
            </div>
            <div className="flex flex-col gap-5 p-10 group hover:bg-[#0092D1] duration-300">
              <p className="text-[#000] text-[24px] font-bold group-hover:text-[#fff]">We Print Your Vision into Reality</p>
              <p className="text-[#676666] text-[10px] font-normal group-hover:text-[#fff]">Imprint Printing Press is not just any ordinary printing company - we are the foremost provider of varied offset printing solutions to more than a thousand clients today. Our commitment to delivering exceptional quality prints, timely delivery, and excellent customer service has made us the go-to choice for businesses of all sizes.</p>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto px-12 py-20 bg-[#000]">
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between py-10">
          <p className="text-[#fff] text-[20px] lg:text-[28px] font-semibold">Imprint's Commitment to Delivering Exceptional Print Quality</p>
          <Link
                className="button-58 transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
                href=""
              >
                <span className="text-btn flex gap-2 items-center">
                  Explore More
                  <GoArrowUpRight className="text-[26px]" />
                </span>
                <span className="pb-3">
                  Explore More 
                  <GoArrowUpRight className="text-[26px]" />
                </span>
              </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="max-w-screen-xl mx-auto px-12 py-20 flex flex-col gap-36">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between gap-5">
            <p className="text-[#000] text-[50px] lg:text-[110px] font-bold flex flex-col gap-2 leading-none">Featured <span className="text-[#208FED]">Projects</span> </p>
            <div className="flex flex-col gap-5">
              <p className="w-auto md:w-[300px] lg:w-[400px]">Imprint Printing Press is not just any ordinary printing company - we are the foremost provider of varied offset printing solutions</p>
              <Link
                className="button-58 transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
                href=""
              >
                <span className="text-btn flex gap-2 items-center">
                  Explore More
                  <GoArrowUpRight className="text-[26px]" />
                </span>
                <span className="pb-3">
                  Explore More
                  <GoArrowUpRight className="text-[26px]" />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden w-full lg:w-[250px] h-[200px]">
                <Image className="w-full h-full object-cover object-center" src={pad}></Image>
              </div>
              <div className="overflow-hidden w-full lg:w-[200px] h-[150px]">
                <Image className="w-full h-full object-cover object-center" src={pad}></Image>
              </div>
            </div>
            <div className="pt-0 lg:pt-20">
              <div className="overflow-hidden w-full h-[300px]">
                <Image className="w-full h-full object-cover object-center" src={pad}></Image>
              </div>
            </div>
            <div className="pt-0 lg:pt-32">
              <div className="overflow-hidden w-full h-[200px]">
                <Image className="w-full h-full object-cover object-center" src={pad}></Image>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden w-full lg:w-[200px] h-[150px]">
                <Image className="w-full h-full object-cover object-center" src={pad}></Image>
              </div>
              <div className="overflow-hidden w-full lg:w-[250px] h-[200px]">
                <Image className="w-full h-full object-cover object-center" src={pad}></Image>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="overflow-hidden w-full lg:w-[250px] h-[200px]">
                <Image className="w-full h-full object-cover object-center" src={pad}></Image>
              </div>
              <div className="overflow-hidden w-full lg:w-[200px] h-[150px]">
                <Image className="w-full h-full object-cover object-center" src={pad}></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
