import Image from "next/image";
import React from "react";
import logo from "/public/images/logo_full_gray.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#000] relative pt-32">
      <div className="max-w-screen-xl mx-auto px-12 py-12">
        <div className="flex flex-col lg:flex-row justify-between gap-56">
          <div className="flex flex-col justify-between gap-10">
            <div className="flex flex-col gap-5">
              <div className="w-[100px]">
                <Image
                  className="w-[100%] h-[100%] object-cover object-center"
                  src={logo}
                ></Image>
              </div>
              <div>
                <p className="text-white">GET IN TOUCH</p>
                <p className="text-gray-400">youremail@gmail.com</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-white">LOCATION</p>
              <p className="text-gray-400">
                Near Ajman Private School Ajman - United Arab
              </p>
              <p className="text-gray-400">Emirates</p>
            </div>
            <div className="text-gray-400">
              <p className="text-white">FOLLOW</p>
              <p>LINKEDIN</p>
              <p>INSTAGRAM</p>
              <p>MEDIUM</p>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-white text-4xl text-[76px] font-medium leading-[145%]">
              Print with Precision, Connect with Ease
            </p>
            <div>
              <button className="button-57 bg-[#5a767d] transition duration-300 hover:bg- p-3 w-max rounded-full text-xs px-4 m-auto sm:m-0">
                <span className="text-btn">SEND MAIL</span>
                <span>SEND MAIL</span>
              </button>
              <button className="button-57" role="button"></button>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
              <Link href="/" className="text-white text-center">
                Home
              </Link>
              <Link href="/printing" className="text-white text-center">
                Printing
              </Link>
              <Link href="/packaging" className="text-white text-center">
                Packaging
              </Link>
              <Link href="/production" className="text-white text-center">
                Production
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-between pt-20">
            <p className="text-white text-center">TERMS & CONDITIONS</p>
            <p className="text-white text-center">2024 Copyright. All right reserved</p>
            <p className="text-white text-center">PRIVACY POLICY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
