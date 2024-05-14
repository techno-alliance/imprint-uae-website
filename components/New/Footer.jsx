import Image from "next/image";
import React from "react";
import logo from "/public/images/logo_full_gray.svg";
import Link from "next/link";
import { PiEnvelopeSimpleLight } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="bg-[#000] relative pt-32">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-56">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col justify-center items-center lg:items-start gap-5">
              <div className="w-[100px]">
                <Image
                  className="w-[100%] h-[100%] object-cover object-center"
                  src={logo}
                ></Image>
              </div>
              <div>
                <p className="text-white text-center md:text-left">
                  GET IN TOUCH
                </p>
                <p className="text-gray-400 text-center md:text-left">
                  imprintuae@gmail.com
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white text-center md:text-left">LOCATION</p>
              <p className="text-gray-400 text-center md:text-left">
                Near Ajman Private School, Ajman -
              </p>
              <p className="text-gray-400 text-center md:text-left">United Arab Emirates</p>
            </div>
            <div className="text-gray-400">
              <p className="text-white text-center md:text-left">FOLLOW</p>
              <p className="text-center md:text-left">LINKEDIN</p>
              <p className="text-center md:text-left">INSTAGRAM</p>
              <p className="text-center md:text-left">MEDIUM</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white text-2xl lg:text-[76px] font-medium leading-[145%] text-center lg:text-left">
              Print with Precision, Connect with Ease
            </p>
            <div className="flex justify-center lg:justify-start">
              <Link
                className="button-57 flex justify-center items-center gap-3 transition duration-300 py-1 w-max rounded-full text-[16px] lg:text-[20px] px-1 pr-4 text-white"
                href="mailto:someone@example.com"
              >
                <div className="bg-black rounded-full w-12 h-12 text-2xl text-white flex justify-center items-center">
                  <PiEnvelopeSimpleLight />
                </div>
                <span className="text-btn flex gap-2 items-center">
                  Send a Mail
                </span>

                <span className="pb-3">Send a Mail</span>
              </Link>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <Link href="/" className="text-[#DADADA]/50 hover:text-white text-center">
                Home
              </Link>
              <Link href="/printing" className="text-[#DADADA]/50 hover:text-white text-center">
                Printing
              </Link>
              <Link href="/packaging" className="text-[#DADADA]/50 hover:text-white text-center">
                Packaging
              </Link>
              <Link href="/production" className="text-[#DADADA]/50 hover:text-white text-center">
                Production
              </Link>
              <Link href="/contact" className="text-[#DADADA]/50 hover:text-white text-center">
                Contact us
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between pt-10 lg:pt-20">
          <p className="text-white text-sm lg:text-[16px] text-center">TERMS & CONDITIONS</p>
          <p className="text-white text-sm lg:text-[16px] text-center">
            2024 Copyright. All right reserved
          </p>
          <p className="text-white text-sm lg:text-[16px] text-center">PRIVACY POLICY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
