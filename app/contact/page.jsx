"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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


// import { Resend } from 'resend';
export default function Page() {
  const [message, setMessage] = useState("");
  const formRef = useRef(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleFocus = () => {};
  const handleBlur = () => {};
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        "service_vj5cq8l",
        "template_9jhjori",
        {
          // from_name:form.name,
          // to_name:"Abishek",
          // from_email:form.email,
          // to_email:"anilabishek@gmail.com",
          // message:form.message
          name: form.name,
          email: form.email,
          message: form.message,
        },
        "NVhsrWDzPJVBQJFu4"
      )
      .then(() => {
        setIsLoading(false);

        setForm({ name: "", email: "", message: "" });
      })
      .then(
        (result) => {
          if (result.status === 200) {
            setMessage(`
              <div className="flex flex-col justify-center items-center gap-2">
                <span className="text-[#E5B250] text-center">
                  Thanks for getting in touch. Our team will contact you within
                  48 hours.
                </span>
              </div>
            `);
          }
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      )
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  // const resend = new Resend('re_78nHJ5um_DjUZhJbZKqi3ht8tbVpaQYq8');

  // resend.emails.send({
  //   from: 'onboarding@resend.dev',
  //   to: 'anilabishek15@gmail.com',
  //   subject: 'Hello World',
  //   html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
  // });
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
        <div>
          <div className="flex flex-col gap-6 rounded-[20px] p-4 bg-[#1E1E1E]">
            <div className="w-full h-[200px] lg:h-[370px] rounded-[10px] border border-[#404040] overflow-hidden">
              <Image
                className="object-cover object-center w-full h-full"
                src={location}
              />
            </div>
            <div className="w-full flex flex-row justify-between items-center gap-6">
              <div>
                <p className="gradient-text text-[16px] lg:text-[32px] font-semibold">
                  Imprint{" "}
                  <span className="text-white">Printing Press L.L.C</span>
                </p>
                <p className="text-white/60 text-sm lg:text-2xl font-light">
                  Address : Ajam, U.A.E P.O. Box. 22628
                </p>
              </div>
              <div>
                <p className="gradient-text text-sm lg:text-xl">View Map</p>
              </div>
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
                Fill out the from below and one of our friendly team members
                will get back to you shortly
              </p>
            </div>
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <p className="text-white">Follow us on social media</p>
                <div className="flex justify-between items-center">
                  <div className="w-[28px] h-[28px] lg:w-[50px] lg:h-[50px] text-white text-[16px] lg:text-3xl p-2 bg-[#2E2E2E] flex justify-center items-center rounded-full">
                    <FaInstagram />
                  </div>
                  <div className="w-[28px] h-[28px] lg:w-[50px] lg:h-[50px] text-white text-[16px] lg:text-3xl p-2 bg-[#2E2E2E] flex justify-center items-center rounded-full">
                    <FaLinkedinIn />
                  </div>
                  <div className="w-[28px] h-[28px] lg:w-[50px] lg:h-[50px] text-white text-[16px] lg:text-3xl p-2 bg-[#2E2E2E] flex justify-center items-center rounded-full">
                    <FaFacebookF />
                  </div>
                  <div className="w-[28px] h-[28px] lg:w-[50px] lg:h-[50px] text-white text-[16px] lg:text-3xl p-2 bg-[#2E2E2E] flex justify-center items-center rounded-full">
                    <FaXTwitter />
                  </div>
                  <div className="w-[28px] h-[28px] lg:w-[50px] lg:h-[50px] text-white text-[16px] lg:text-3xl p-2 bg-[#2E2E2E] flex justify-center items-center rounded-full">
                    <RiYoutubeLine />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-5">
                <div className="bg-[#1E1E1E] p-[18px] rounded-[10px] border border-[rgba(255,_255,_255,_0.10)]">
                  <div>
                    <p className="text-white">Office hours</p>
                    <p className="text-white">9:00 am -6:00 pm</p>
                  </div>
                </div>
                <button className="bg-[#1E1E1E] flex justify-between items-center p-[18px] rounded-[10px] border border-[rgba(255,_255,_255,_0.10)]">
                  <div>
                    <p className="text-white text-left">
                      your can email us here{" "}
                    </p>
                    <p className="text-white">imprintuae@gmail.com</p>
                  </div>
                  <div className="text-white text-2xl">
                    <FiArrowUpRight />
                  </div>
                </button>
                <button className="bg-[#1E1E1E] flex justify-between items-center p-[18px] rounded-[10px] border border-[rgba(255,_255,_255,_0.10)]">
                  <div>
                    <p className="text-white text-left">Give us a call on</p>
                    <p className="text-white">+97123466789</p>
                  </div>
                  <div className="text-white text-2xl">
                    <FiArrowUpRight />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-end">
            <form
              class="flex flex-col gap-8 bg-[#1E1E1E] rounded-[20px] p-8"
              onSubmit={handleSubmit}
            >
              <div class="flex flex-col lg:flex-row justify-between gap-6">
                <div class="w-full">
                  <label
                    class="block tracking-wide text-gray-700 text-xs font-semibold mb-2 dark:text-[#fff]"
                    for="grid-first-name"
                  >
                    {" "}
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="w-full text-gray-700 bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight focus:outline-1 outline-[#000]"
                    id="grid-first-name"
                    type="text"
                    name="name"
                    placeholder="Enter First Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div class="w-full ">
                  <label
                    class="block tracking-wide text-[#fff] text-xs font-semibold mb-2"
                    for="grid-last-name"
                  >
                    Last Name<span className="text-red-500">*</span>
                  </label>
                  <input
                    class=" w-full text-gray-700 bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight focus:outline-1 outline-[#000]"
                    id="grid-last-name"
                    type="text"
                    name="name"
                    placeholder="Enter last Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div class="flex flex-col lg:flex-row justify-between gap-6">
                <div class="w-full ">
                  <label
                    class="block tracking-wide text-[#fff] text-xs font-semibold mb-2"
                    for="grid-email"
                  >
                    Email<span className="text-red-500">*</span>
                  </label>
                  <input
                    class=" w-full text-gray-700 bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight focus:outline-1 outline-[#000]"
                    id="grid-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div class="w-full ">
                  <label
                    class="block tracking-wide text-[#fff] text-xs font-semibold mb-2"
                    for="grid-email"
                  >
                    Phone Number<span className="text-red-500">*</span>
                  </label>
                  <input
                    class=" w-full text-gray-700 bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight focus:outline-1 outline-[#000]"
                    id="grid-email"
                    type="email"
                    name="email"
                    placeholder="Enter your Phone Number"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>
              <div class="w-full ">
                <label
                  class="block tracking-wide text-[#fff] text-xs font-semibold mb-2"
                  for="grid-last-name"
                >
                  Subject<span className="text-red-500">*</span>
                </label>
                <input
                  class=" w-full text-gray-700 bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight focus:outline-1 outline-[#000]"
                  id="grid-last-name"
                  type="text"
                  name="name"
                  placeholder="Enter your Subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>
              <div class="w-full ">
                <label
                  class="block tracking-wide text-gray-700 text-xs font-semibold mb-2 dark:text-[#fff]"
                  for="grid-message"
                >
                  Message
                </label>
                <textarea
                  class="appearance-none block w-full bg-[#232323] border border-[rgba(255,_255,_255,_0.10)] rounded-[10px] p-4 leading-tight focus:outline-1 outline-[#000]"
                  id="grid-message"
                  type="text"
                  name="message"
                  placeholder=""
                  required
                  value={form.message}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              {/* <button
                className=" py-2 w-max rounded-full px-4 text-white"
                type="submit"
                disabled={isLoading}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                {isLoading ? "Sending" : "Submit"}
                
              </button> */}
              <div className="flex justify-center">
                <button
                  className="button-57 flex justify-center items-center gap-3 transition duration-300 py-1 w-max rounded-full text-[16px] lg:text-[20px] px-1 pr-4 text-white"
                  href=""
                >
                  <div className="bg-black rounded-full w-12 h-12 text-2xl text-white flex justify-center items-center">
                    <BsSend />
                  </div>
                  <span className="text-btn flex gap-2 items-center">
                    Send Message
                  </span>

                  <span className="pb-3">Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div
          className="flex flex-col lg:flex-row justify-between items-center gap-6 p-10 rounded-[20px] backdrop-filter backdrop-blur-[25px] border border-[#262626]"
          style={{
            background:
              "linear-gradient(153deg, #1E1E1E 66.5%, #03354B 102.1%)",
          }}
        >
          <div>
            <p className="text-white text-[32px] font-bold">
              We’re Here to Assist You
            </p>
            <p className="w-auto lg:w-[500px] text-[#DADADA] text-[16px]">
              Imprint Printing Press is not just any ordinary printing company -
              we are the foremost provider of varied offset printing solutions
              to more than a thousand clients today.
            </p>
          </div>
          <div className="flex justify-center">
            <button
              className="button-57 flex justify-center items-center gap-3 transition duration-300 py-1 w-max rounded-full text-[16px] lg:text-[20px] px-1 pr-4 text-white"
              href=""
            >
              <div className="bg-black rounded-full w-12 h-12 text-2xl text-white flex justify-center items-center">
                <GrCircleQuestion />
              </div>
              <span className="text-btn flex gap-2 items-center">
              Ask any question
              </span>

              <span className="pb-3">Ask any question</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
