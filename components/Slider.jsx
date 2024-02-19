"use client"
import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
// import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";
// import Slider from "../public/images/slider-img/slider01.jpg"

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});

const sliderData = [
  {
    img: "https://d1qwl4ymp6qhug.cloudfront.net/Images%20for%20blog/Trifold.jpg",
    location: "Switzerland Alps",
    description:
      "The journey to Machu Picchu typically starts in the mountain city of Cusco, which was the capital city of the Inca Empire",
    title: "Brochure",
  },
  {
    img: "https://images.ctfassets.net/cma41nsiygxr/4619cg8KLsEs572NHIgyV/2e9c0c2df0f79dfacd1e1b7f58604ab5/pack_cartoncino_01_d.jpg",
    title: "Packaging",
    description:
      "The earth's geological history opens before your eyes in a mile-deep chasm",
    location: "Arizona",
  },
  {
    img: "https://m.printposters.in/file/downloadGallary/1601185766368_sTANDEE.jpg",
    title: "Standee",
    description: "Wild animals in their natural environment, luxury safari lodges",
    location: "Kenya",
  },
  {
    img: "https://ik.imagekit.io/panmac/tr:f-auto,w-740,pr-true//bcd02f72-b50c-0179-8b4b-5e44f5340bd4/fc0a6bb9-f67f-4b66-902e-462e02cbb662/Must-reads-50-best-books-of-all-time.jpg",
    title: "Books",
    description:
      "A stunning ancient jungle city with hundreds of intricately constructed temples",
    location: "Cambodia",
  },
  {
    img: "https://thumbs.dreamstime.com/z/more-sight-concept-use-enticing-reader-client-to-expect-content-offer-39767161.jpg",
    title: "More",
    description:
      "Tropical beaches, volcano hikes, ancient temples, and friendly people",
    location: "Indonesia",
  },
];
const initData = sliderData[0];

export default function Home() {
  const [data, setData] = useState(sliderData.slice(1));
  const [transitionData, setTransitionData] = useState(sliderData[0]);
  const [currentSlideData, setCurrentSlideData] = useState({
    data: initData,
    index: 0,
  });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          {/* <Header /> */}
          <div className="flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className="col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className="col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}
