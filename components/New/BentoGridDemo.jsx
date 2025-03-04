import React from "react";
import { BentoGrid, BentoGridItem } from "../Sparkle/Ui/bento-grid";
import { motion } from "framer-motion";
import Image from "next/image";

// This is the component you should use in your app
export function BentoGridDemo() {
  return (
    <BentoGrid className="group">
      {items.map((item, i) => (
        <ModifiedBentoGridItem
          key={i}
          image={item.image}
          text={item.text}
          className={i === 0 || i === 3 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
}

// Modified version of your BentoGridItem with animation
function ModifiedBentoGridItem({
  className,
  image,
  text
}) {
  // This directly integrates with your existing BentoGridItem structure
  return (
    <div
      className={`h-auto relative md:h-[390px] row-span-1 overflow-hidden rounded-[20px] justify-between flex flex-col group ${className || ""}`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0.8 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ 
          duration: 1,
          ease: "easeOut"
        }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-full h-full"
      >
        <Image
          src={image}
          layout="responsive"
          width={100}
          height={100}
          className="object-cover object-center"
        />
      </motion.div>
      
      <div className="absolute flex justify-center items-center bottom-0 w-full bg-black/10 h-[50px] md:h-[170px] backdrop-filter backdrop-blur-md">
        <p className="text-center text-white text-2xl md:text-[64px] leading-[160%] font-normal">{text}</p>
      </div>
    </div>
  );
}

const items = [
  {
    image: "/images/paperfood.png",
    text: "Packaging"
  },
  {
    image: "/images/printing.png",
    text: "Printing"
  },
  {
    image: "/images/paperfood3.png",
    text: "Production"
  },
];