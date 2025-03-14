"use client";
import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import { ImLocation } from "react-icons/im";
import { LuPhone } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { useRef } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
import Image from "next/image";
import location from "@/public/images/location.png";
import { PiEnvelopeSimpleLight } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { FiArrowUpRight } from "react-icons/fi";
import { BsSend } from "react-icons/bs";
import { GrCircleQuestion } from "react-icons/gr";
import { Formik } from "formik";
import SignUpForm from "@/components/New/SignUpForm";

export default function Page() {
  return (
    <div className="bg-black">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0 flex flex-col gap-[120px]">
        <div className="pt-40">
          <div className="flex flex-col gap-12">
            <div className=" h-9 md:h-10 rounded-full p-2.5 text-sm md:text-base border border-[#2E2E2E] bg-[#1A1A1A] text-primary vh-center w-[123px]">
              Contact Us
            </div>
            <p className="text-white text-2xl lg:text-6xl w-auto lg:w-[800px]">
              Have question or want to get in touch with us
            </p>
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="149"
                  height="24"
                  viewBox="0 0 149 24"
                  fill="none"
                >
                  <rect
                    x="4.72412"
                    y="0.531891"
                    width="11"
                    height="21"
                    transform="rotate(13 4.72412 0.531891)"
                    fill="#28AAE3"
                  />
                  <rect
                    x="26.9438"
                    y="0.531891"
                    width="11"
                    height="21"
                    transform="rotate(13 26.9438 0.531891)"
                    fill="#28AAE3"
                  />
                  <rect
                    x="49.1636"
                    y="0.531891"
                    width="11"
                    height="21"
                    transform="rotate(13 49.1636 0.531891)"
                    fill="#28AAE3"
                  />
                  <rect
                    x="71.3833"
                    y="0.531891"
                    width="11"
                    height="21"
                    transform="rotate(13 71.3833 0.531891)"
                    fill="#28AAE3"
                  />
                  <rect
                    x="93.603"
                    y="0.531891"
                    width="11"
                    height="21"
                    transform="rotate(13 93.603 0.531891)"
                    fill="#28AAE3"
                  />
                  <rect
                    x="115.823"
                    y="0.531891"
                    width="11"
                    height="21"
                    transform="rotate(13 115.823 0.531891)"
                    fill="#28AAE3"
                  />
                  <rect
                    x="138.042"
                    y="0.531891"
                    width="11"
                    height="21"
                    transform="rotate(13 138.042 0.531891)"
                    fill="#28AAE3"
                  />
                </svg>
              </div>
              <p className="text-white text-sm lg:text-xl w-auto lg:w-[800px]">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-between flex-col lg:flex lg:flex-row gap-20">
          <div className="flex flex-col justify-between gap-5">
            <div className="flex flex-col">
              <p className="text-[#080C2E] text-[23px] lg:text-[46px] font-semibold dark:text-white">
                Contact Information
              </p>
              <p className="text-white text-sm">
                Fill out the form below and one of our friendly team members
                will get back to you shortly
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="text-white">Follow us on social media</p>
                <div className="flex gap-5 items-center">
                  <Link
                    href="https://www.instagram.com/imprint.printing/"
                    target="_blank"
                    className="w-[28px] h-[28px] lg:w-[50px] lg:h-[50px] text-[#d62976] text-[16px] lg:text-3xl p-2 bg-[#2E2E2E] flex justify-center items-center rounded-full"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/imprint-printing-press-l-l-c-77ba09102/"
                    target="_blank"
                    className="w-[28px] h-[28px] lg:w-[50px] lg:h-[50px] text-[#0077B5] text-[16px] lg:text-3xl p-2 bg-[#2E2E2E] flex justify-center items-center rounded-full"
                  >
                    <FaLinkedinIn />
                  </Link>
                  <Link
                    href="https://www.facebook.com/p/Imprint-Printing-Press-LLC-100069427084378/"
                    target="_blank"
                    className="w-[28px] h-[28px] lg:w-[50px] lg:h-[50px] text-[#1877F2] text-[16px] lg:text-3xl p-2 bg-[#2E2E2E] flex justify-center items-center rounded-full"
                  >
                    <FaFacebookF />
                  </Link>
                  {/* <div className="w-[28px] h-[28px] lg:w-[50px] lg:h-[50px] text-white text-[16px] lg:text-3xl p-2 bg-[#2E2E2E] flex justify-center items-center rounded-full">
                    <FaXTwitter />
                  </div>
                  <div className="w-[28px] h-[28px] lg:w-[50px] lg:h-[50px] text-white text-[16px] lg:text-3xl p-2 bg-[#2E2E2E] flex justify-center items-center rounded-full">
                    <RiYoutubeLine />
                  </div> */}
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="bg-[#1E1E1E] p-[18px] rounded-[10px] border border-[rgba(255,_255,_255,_0.10)]">
                  <div>
                    <p className="text-white">Office hours</p>
                    <p className="text-white">8:00 am - 6:00 pm</p>
                  </div>
                </div>
                <a
                  href="mailto:someone@example.com"
                  className="bg-[#1E1E1E] flex justify-between items-center p-[18px] rounded-[10px] border border-[rgba(255,_255,_255,_0.10)]"
                >
                  <div>
                    <p className="text-white text-left">
                      you can email us here{" "}
                    </p>
                    <p className="text-white">info@imprintuae.net</p>
                  </div>
                  <div className="text-white text-2xl">
                    <FiArrowUpRight />
                  </div>
                </a>
                <a
                  href="tel:+97167052100"
                  className="bg-[#1E1E1E] flex justify-between items-center p-[18px] rounded-[10px] border border-[rgba(255,_255,_255,_0.10)]"
                >
                  <div>
                    <p className="text-white text-left">Give us a call on</p>
                    <p className="text-white">+97167052100</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <SignUpForm />
        </div>
        <div>
          <div className="flex flex-col gap-6 rounded-[20px] p-4 bg-[#1E1E1E]">
            <div className="w-full h-[200px] lg:h-[370px] rounded-[10px] border border-[#404040] overflow-hidden">
              {/* <Image
                className="object-cover object-center w-full h-full"
                src={location}
              /> */}
              <iframe
                width="100%"
                height="600"
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3604.1186223709838!2d55.49122789497259!3d25.400839600867403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f580a9b6eba8f%3A0x48c973c177f11612!2sImprint%20Printing%20Press!5e0!3m2!1sen!2sin!4v1715338542679!5m2!1sen!2sin"
              ></iframe>
            </div>
            <div className="w-full flex flex-row justify-between items-center gap-6">
              <div>
                <p className="gradient-text text-[16px] lg:text-[32px] font-semibold">
                  Imprint <span className="text-white">Printing Press</span>
                </p>
                <p className="text-white/60 text-sm lg:text-2xl font-light">
                  Address : near Ajman Private School - Al Jerf 2 - Ajman -
                  United Arab Emirates
                </p>
              </div>
              <div>
                <a
                  target="_blank"
                  href="https://www.google.com/maps/place/Imprint+Printing+Press/@25.4008118,55.4914179,17z/data=!3m1!4b1!4m6!3m5!1s0x3e5f580a9b6eba8f:0x48c973c177f11612!8m2!3d25.4008118!4d55.4914179!16s%2Fg%2F1yj2mg6mt?entry=ttu"
                  className="gradient-text text-sm lg:text-xl"
                >
                  View Map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
