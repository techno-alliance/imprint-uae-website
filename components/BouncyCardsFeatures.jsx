import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import stars from "@/public/images/star.svg"
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";


export const BouncyCardsFeatures = () => {
  return (
    <section className="mx-auto max-w-screen-xl px-12 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Testimonial
        </h2>
        {/* <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Learn more
        </motion.button> */}
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
      <div className="mb-4 grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-4 rounded-none !bg-black">
          <CardTitle>
            Imprint
          </CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 bg-white p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-black">
            Imprint Printing Press is not just any ordinary printing company - we are the foremost provider of varied offset printing solutions 
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-8 rounded-none !bg-black">
          <CardTitle>Do another thing</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 bg-white p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-black">
            Imprint Printing Press is not just any ordinary printing company - we are the foremost provider of varied offset printing solutions 
            </span>
          </div>
        </BounceCard>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <BounceCard className="col-span-12 md:col-span-8 rounded-none !bg-black">
          <CardTitle>And this too</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 bg-white p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-black">
            Imprint Printing Press is not just any ordinary printing company - we are the foremost provider of varied offset printing solutions 
            </span>
          </div>
        </BounceCard>
        <BounceCard className="col-span-12 md:col-span-4 rounded-none !bg-black">
          <CardTitle>And finally this</CardTitle>
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 bg-white p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
            <span className="block text-center font-semibold text-black">
            Imprint Printing Press is not just any ordinary printing company - we are the foremost provider of varied offset printing solutions 
            </span>
          </div>
        </BounceCard>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};