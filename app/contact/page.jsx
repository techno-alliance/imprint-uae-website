"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { ImLocation } from "react-icons/im";
import { LuPhone } from "react-icons/lu";
import { IoMdMail } from "react-icons/io";
import { useRef } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";
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
      .then((result) => {
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
      <div className="max-w-screen-xl mx-auto px-32">
        <div className="flex justify-between flex-col lg:flex lg:flex-row gap-20 pt-40">
          <div className="flex flex-col justify-between items-center">
            <form class="flex flex-col" onSubmit={handleSubmit}>
              <div class=" mb-2">
                <div class="w-full md:w-1/2 mb-6 md:mb-0">
                  <label
                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 dark:text-[#fff]"
                    for="grid-first-name"
                  >
                    {" "}
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    class="w-full text-gray-700 border rounded-[3px] py-1 px-2 mb-3 leading-tight focus:outline-1 outline-[#000] focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
                <div class="w-full ">
                  <label
                    class="block uppercase tracking-wide text-[#fff] text-xs font-bold mb-2"
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
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
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
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                  />
                </div>
              </div>

              <button
                className=" py-2 w-max rounded-full px-4 text-white" type="submit"
                
                disabled={isLoading}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                {isLoading ? "Sending" : "Submit"}
                {/* <span className="text-btn flex gap-2 items-center">
                  {isLoading ? "Sending" : "Submit"}
                  <GoArrowUpRight className="text-[26px]" />
                </span> */}
                {/* <span className="pb-3">
                  {isLoading ? "Sending" : "Submit"}
                  <GoArrowUpRight className="text-[26px]" />
                </span> */}
              </button>
            </form>
            <div className="mt-5">{message}</div>
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
  );
}
