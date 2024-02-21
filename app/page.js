"use client";
import styles from "/components/style.module.scss";
import Text3d from "/components/Text3d";
import { useRef, useEffect } from "react";
import ZoomParallex from "/components/ZoomParallex.jsx"
import Image from "next/image";
import pad from "/public/images/pad.png"
import card from "/public/images/card.png"
import Link from "next/link";

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
        <p className="text-[64px] text-[#000] font-semibold leading-none">Your Unlimited <span className="text-[#0092D1] text-[110px] font-bold">Printing</span> <span className="font-bold text-[110px]">Partner</span></p>
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
      <section className="bg-[#030D15]">
        <div className="max-w-screen-xl mx-auto px-12">
          <div className="flex flex-col lg:flex-row gap-5 lg:gap-0 justify-between py-10">
          <p className="text-[#fff] text-[20px] lg:text-[28px] font-semibold">Imprint's Commitment to Delivering Exceptional Print Quality</p>
          <Link
                className="button-58 transition duration-300 py-4 w-max rounded-full text-[20px] px-8 text-white"
                href=""
              >
                <span className="text-btn ">Explore</span>
                <span className="pb-4">Explore</span>
              </Link>
          </div>
          <div className="flex">
          <div className="">
          <Image className="w-full h-full object-cover object-center" src={pad}></Image>
          </div>
          <div>
          <Image className="w-full h-full object-cover object-center" src={card}></Image>
          </div>
          </div>
        </div>
      </section>
     
    </div>
  );
}
