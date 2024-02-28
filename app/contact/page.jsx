'use client'
import React, { useState } from "react";
// import emailjs from "@emailjs/browser";
import { ImLocation } from "react-icons/im";
import { LuPhone } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { useRef } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
// import { Resend } from 'resend';

export default function Page() {


// const resend = new Resend('re_78nHJ5um_DjUZhJbZKqi3ht8tbVpaQYq8');

// resend.emails.send({
//   from: 'onboarding@resend.dev',
//   to: 'anilabishek15@gmail.com',
//   subject: 'Hello World',
//   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
// });
  return (
    <div className="bg-black">
        <div className="max-w-screen-xl mx-auto px-12">
        <div className="flex justify-between flex-col lg:flex lg:flex-row gap-20 pt-40">
          <div className="flex flex-col justify-between items-center">
            <form class="flex flex-col">
              <div class=" mb-6">
                <div class="w-full ">
                  <label
                    class="block uppercase tracking-wide text-[#696c70] text-xs font-bold mb-2"
                    for="grid-email"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    class=" w-full text-gray-700 border border-gray-200 rounded-[3px] py-2 px-4 mb-3 leading-tight focus:outline-1 outline-[#000]"
                    id="grid-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>
              <div class=" mb-6">
                <div class="w-full ">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-[#fff]"
                    for="grid-message"
                  >
                    Message
                  </label>
                  <textarea
                    class="appearance-none block w-full text-gray-700 border border-gray-200 rounded-[3px] py-1 px-4 mb-3 leading-tight focus:outline-1 outline-[#000]"
                    id="grid-message"
                    type="text"
                    name="message"
                    placeholder=""
                    required
                   
                  />
                </div>
              </div>
              <div class=" mb-6">
                <div class="w-full ">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-[#fff]"
                    for="grid-details"
                  >
                    Additional Details
                  </label>
                  <textarea
                    class="appearance-none block w-full text-gray-700 border border-gray-200 rounded-[3px] px-4 mb-3 leading-tight focus:outline-1 outline-[#000]"
                    id="grid-details"
                    type="text"
                    name="details"
                    placeholder=""
                  />
                </div>
              </div>
              
              <Link
              className="button-58 transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
              href=""
            >
              <span className="text-btn flex gap-2 items-center">
                Submit
                <GoArrowUpRight className="text-[26px]" />
              </span>
              <span className="pb-3">
                Submit
                <GoArrowUpRight className="text-[26px]" />
              </span>
            </Link>
              
            </form>
            {/* <div className="mt-5">{message}</div> */}
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-10">
              <p className="text-[#080C2E] text-[23px] lg:text-[46px] font-semibold dark:text-white">
                Contact Information
              </p>
              <p className="text-[#080C2E] text-[14px] lg:text-[16px] font-normal leading-[32px] flex items-center gap-3 dark:text-white">
                <span>
                  <ImLocation />
                </span>
                #7th Street, abc , Mauritania North West Africa 425680{" "}
              </p>
              <p className="text-[#080C2E] text-[14px] lg:text-[16px] font-normal leading-[32px] flex items-center gap-3 dark:text-white">
                <span>
                  <LuPhone />
                </span>
                41165116
              </p>
              <p className="text-[#080C2E] text-[14px] lg:text-[16px] font-normal leading-[32px] flex items-center gap-3 dark:text-white">
                <span>
                  <IoMdMail />
                </span>
                mail@dvjnv
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



