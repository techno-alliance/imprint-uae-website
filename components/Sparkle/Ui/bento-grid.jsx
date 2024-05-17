import { cn } from "@/util/cn";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";

export const BentoGrid = ({ className, children }) => {
  return (
    <div className="bg-black py-2">
      <div className="max-w-screen-xl mx-auto px-5 lg:px-10 2xl:px-0">
        <div className="flex flex-col justify-center items-center lg:items-start gap-3">
          <button
            className="button-58 flex transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
            href=""
          >
            <span className="text-btn flex gap-2 items-center">
              Our service
            </span>
            <span className="pb-3">Our service</span>
          </button>
          <div className="flex flex-col md:flex-row justify-between gap-5 lg:gap-20">
            <div className="w-auto md:w-[630px]">
              <p className="text-2xl text-center lg:text-left lg:text-[48px] leading-[140%] font-semibold text-white">
                Produce Stunning Printing For Your Business
              </p>
            </div>
            <div className="flex justify-center items-center w-auto lg:w-[400px]">
              {/* <p className="text-[#DADADA] text-center lg:text-left text-sm lg:text-xl font-normal leading-[160%]">
                Imprint printing press is the foremost provider of varied offset
                printing solutions to more than a thousand clients today..
              </p> */}
            </div>
          </div>
        </div>
      </div>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 rounded-xl gap-4 max-w-screen-xl mx-auto py-10 lg:py-20 px-5 lg:px-10 2xl:px-0",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};
export const BentoGridItem = ({
  className,
  //   title,
  //   description,
  //   header,
  image,
  //   icon
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const textArray = ["Food Packaging", "Printing", "Production"];
  useEffect(() => {
    let intervalId;

    if (isHovered) {
      intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % textArray.length);
      }, 1000); // Change text every 2 seconds (2000 milliseconds)
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isHovered, textArray.length]);
  return (
    <div
      className={cn(
        "h-auto relative md:h-[390px] row-span-1 overflow-hidden rounded-[20px] justify-between flex flex-col group",
        className,
      )}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      
        <Image
          src={image}
          layout="responsive"
          width={100}
          height={100}
          className="object-cover object-center"/>
        
      {/* <div className={cn("absolute flex justify-center items-center bottom-0 w-full bg-black/10 h-[50px] md:h-[170px] ",
      {"transition-transform duration-300": isHovered }
      )}
      style={{
        transform: `translateY(${isHovered ? "0%" : "100%"})` // Translate content from bottom to top
      }}
      
      >
        <p className={cn("text-center text-transparent text-2xl md:text-[64px] leading-[160%] font-normal",{"text-white transition-transform duration-300": isHovered})}>{textArray[currentIndex]}</p>
      </div> */}
    </div>
  );
};
