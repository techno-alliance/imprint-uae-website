'use client'
import { PageName } from "@/components/New/PageName";
import React from "react";
import packaging from "@/public/images/bentopageimages/packaging/packaging.png";
import Image from "next/image";
import MovingImage from "@/components/New/MovingImage";
import { BentoGrid } from "@/components/New/BentoGrid";
import { TwoColumnSection } from "@/components/New/TwoColumnSection";
import MakeCall from "@/components/New/MakeCall";
import { Section3rd } from "@/components/New/Section3rd";
import PageSlider from "@/components/New/PageSlider";

import bento1 from "@/public/images/bentopageimages/packaging/bento1.png";
import bento2 from "@/public/images/bentopageimages/packaging/bento2.png";
import bento3 from "@/public/images/bentopageimages/packaging/bento3.png";
import bento4 from "@/public/images/bentopageimages/packaging/bento4.png";
import bento5 from "@/public/images/bentopageimages/packaging/bento5.png";
import bento6 from "@/public/images/bentopageimages/packaging/bento6.jpeg";

// Slider Images 
import slide1 from "@/public/images/bentopageimages/packaging/Slider/slide1.png";
import slide2 from "@/public/images/bentopageimages/packaging/Slider/slide2.png";
import slide3 from "@/public/images/bentopageimages/packaging/Slider/slide3.png";
import slide4 from "@/public/images/bentopageimages/packaging/Slider/slide4.png";

// Bento Section 3 Layout
const bentoImages = [
  {
    image1: bento1,
    image2: bento2,
    image3: bento3,
  },
];

// Two Column First Section
const bentoImages2 = [
  {
    image1: bento4,
    title: "Fresh Packaging Solutions",
    subtitle:
      "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
    image2: bento5,
    title2: "Packaging that Preserves Flavor",
    subtitle2:
      "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
  },
];

const sliderdata = [
  {
    title: "materials and supplies",
    description: "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
    image: slide1
  },
  {
    title: "Different gift boxes",
    description: "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
    image: slide2
  },
  {
    title: "Mystery box collage",
    description: "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
    image: slide3
  },
  {
    title: "Rice Package paper bag",
    description: "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
    image: slide4
  },
]
const page = () => {
  return (
    <div className="text-white flex flex-col gap-[120px]">
      <PageName title="Packaging" pagename="Let our Packaging tell your brand stories" image={packaging} description="We're the specialised ones making your product excel in the market. from concept to creation, we ensure your product grabs cent percent attention." />
      <div className="max-w-screen-xl mx-auto w-full">
        <MovingImage />
      </div>

      <div className=" max-w-screen-xl mx-auto flex flex-col gap-[120px] px-10 2xl:px-0 w-full">
        <TwoColumnSection
          header="Sealed with Quality-Our "
          headercolor="Food Packaging"
          description="Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today.."
          bentoImages={bentoImages2}
        />
        {/* <MakeCall className="w-full px-0" /> */}
        <BentoGrid
          header="Elegance in Every Package-Our"
          headercolor="Cosmetic Solutions"
          description="Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today.."
          bentoImages={bentoImages}
        />
        <Section3rd
          header="Wrapped with Care-Our "
          headercolor="Gift Packaging Collection"
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
