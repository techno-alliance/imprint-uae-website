'use client'
import { PageName } from "@/components/New/PageName";
import React from "react";
import production from "@/public/images/bentopageimages/production/production.png";
import Image from "next/image";
import MovingImage from "@/components/New/MovingImage";
import { BentoGrid } from "@/components/New/BentoGrid";
import { TwoColumnSection } from "@/components/New/TwoColumnSection";
import MakeCall from "@/components/New/MakeCall";
import { Section3rd } from "@/components/New/Section3rd";
import PageSlider from "@/components/New/PageSlider";

import bento1 from "@/public/images/bentopageimages/production/bento1.png";
import bento2 from "@/public/images/bentopageimages/production/bento2.png";
import bento3 from "@/public/images/bentopageimages/production/bento3.png";
import bento4 from "@/public/images/bentopageimages/production/bento4.png";
import bento5 from "@/public/images/bentopageimages/production/bento5.png";
import bento6 from "@/public/images/bentopageimages/production/bento6.png";

// Slider Images 
import slide1 from "@/public/images/bentopageimages/production/Slider/slide1.png";
import slide2 from "@/public/images/bentopageimages/production/Slider/slide2.png";
import slide3 from "@/public/images/bentopageimages/production/Slider/slide3.png";
import slide4 from "@/public/images/bentopageimages/production/Slider/slide4.png";



// Two Column First Section
const bentoImages = [
  {
    image1: bento1,
    title: "We Print Paper Products Of Any Formats",
    subtitle:
      "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
    image2: bento2,
    title2: "Paper box",
    subtitle2:
      "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
  },
];
// Bento Section 3 Layout
const bentoImages2 = [
  {
    image1: bento3,
    image2: bento4,
    image3: bento5,
  },
];

const sliderdata = [
  {
    title: "FreshSeal Food Wraps",
    description: "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
    image: slide1
  },
  {
    title: "FreshSeal Food Wraps",
    description: "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
    image: slide2
  },
  {
    title: "FreshSeal Food Wraps",
    description: "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
    image: slide3
  },
  {
    title: "FreshSeal Food Wraps",
    description: "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
    image: slide4
  },
]
const page = () => {
  return (
    <div className="text-white flex flex-col gap-[120px]">
      <PageName pagename="From Ideas to Execution, We’ve Got Your Press Production Covered." image={production} description="It's more than just words and pictures; we provide expertise in design, production, and quality to achieve the best results in printing press production."/>
      <div className="max-w-screen-xl mx-auto w-full">
        <MovingImage />
      </div>

      <div className=" max-w-screen-xl mx-auto flex flex-col gap-[120px] px-10 2xl:px-0 w-full">
        <TwoColumnSection
          header="The Pro Range "
          headercolor="Printing Solutions"
          description="Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today.."
          bentoImages={bentoImages}
        />
        {/* <MakeCall className="w-full px-0" /> */}
        <BentoGrid
          header="Premium Quality Printing   "
          headercolor="Services"
          description="Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today.."
          bentoImages={bentoImages2}
        />
        <Section3rd
          header="Hight Quality  "
          headercolor="Production"
          description="Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today.."
          image={bento6}
        />
        <PageSlider
          header="More explore-Our "
          headercolor="Latest Packaging Collection"
          description="Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today.."
          sliderdata={sliderdata}
        />
         {/* <MakeCall className="w-full px-0" /> */}
      </div>
    </div>
  );
};

export default page;
