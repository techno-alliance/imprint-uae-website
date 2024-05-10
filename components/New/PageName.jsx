import React from "react";
import user1 from "/public/images/user1.png";
import user2 from "/public/images/user2.png";
import Image from "next/image";

const Images = [
    user1,
    user2,
];
export const PageName = ({ pagename, image, description }) => {
  return (
    <div
      className="h-full md:h-[473px] relative pt-[134px] pb-8"
      style={{
        background:
          "linear-gradient(0deg, #141414 0.44%, rgba(20, 20, 20, 0.00) 121.58%)",
      }}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt="packaging"
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className=" flex flex-col max-w-screen-xl mx-auto px-10 2xl:px-0">
        <p className="text-sm md:text-xl">Unleash Your Vision</p>
        <div className="flex items-center gap-3">
          <h1 className="text-2xl md:text-6xl font-semibold">{pagename}</h1>
          {/* <h1 className="text-[36px] md:text-[100px] font-semibold">{pagename}</h1> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="79"
            height="80"
            viewBox="0 0 79 80"
            fill="none"
            className=" size-9 md:size-20"
          >
            <path
              d="M29.0302 1.11577C25.0219 22.8884 21.7725 26.1376 0 30.1459C21.7727 34.1542 25.0219 37.4034 29.0302 59.1761C33.0385 37.4034 36.2877 34.1542 58.0604 30.1459C36.2877 26.1376 33.0383 22.8884 29.0302 1.11577Z"
              fill="white"
            />
            <path
              d="M60.538 41.96C57.9891 55.8065 55.9223 57.8731 42.0759 60.422C55.9223 62.9711 57.9891 65.0377 60.538 78.884C63.0869 65.0377 65.1537 62.9709 78.9999 60.422C65.1533 57.8731 63.0871 55.8065 60.538 41.96Z"
              fill="white"
            />
          </svg>
        </div>
        <div className="flex flex-col md:flex-row justify-between pt-7 md:pt-12 md:items-center gap-6">
          <div className="flex items-center gap-6">
            <div className=" -space-x-2 md:-space-x-8 flex">
              {Images.map((img, i) => (
                <Image
                  key={i}
                  src={img}
                  alt="packaging"
                  className="relative  inline object-cover  rounded-full size-8 md:size-20"
                />
              ))}
            </div>
            <div>
              <p className="text-lg font-bold leading-none md:leading-normal">2000+</p>
              <p className="text-base font-semibold leading-none md:leading-normal">Satisfied Clients</p>
            </div>
          </div>
          <p className="text-sm md:text-xl md:w-[400px] lg:w-[614px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
