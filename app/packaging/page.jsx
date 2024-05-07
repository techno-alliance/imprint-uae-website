import { PageName } from "@/components/New/PageName";
import React from "react";
import packaging from "@/public/images/pageimages/packaging.png";
import Image from "next/image";
import MovingImage from "@/components/New/MovingImage";
import { BentoGrid } from "@/components/New/BentoGrid";

import bento1 from "@/public/images/bentopageimages/packaging/bento1.png";
import bento2 from "@/public/images/bentopageimages/packaging/bento2.png";
import bento3 from "@/public/images/bentopageimages/packaging/bento3.png";
import { TwoColumnSection } from "@/components/New/TwoColumnSection";

const bentoImages = [
  {
    image1: bento1,
    image2: bento2,
    image3: bento3,
  },
];
// const bentoImages2 = [
//   {
//     image1: bento1,
//     title: "Fresh Packaging Solutions",
//     subtitle: "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
//   },
//   {
//     image2: bento3,
//     title2: "Fresh Packaging Solutions",
//     subtitle2: "Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..",
//   },
// ];
const page = () => {
  return (
    <div className="text-white flex flex-col gap-[120px]">
      <PageName pagename="Packaging" image={packaging} />
      <div className="max-w-screen-xl mx-auto w-full">
        <MovingImage />
      </div>

      <div className=" max-w-screen-xl mx-auto flex flex-col gap-[120px] px-10">
        <TwoColumnSection
          header="Sealed with Quality-Our "
          headercolor="Food Packaging"
          description="Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today.."
          bentoImages={bentoImages}
        />
        <BentoGrid
          header="Elegance in Every Package-Our"
          headercolor="Cosmetic Solutions"
          description="Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today.."
          bentoImages={bentoImages}
        />
      </div>
    </div>
  );
};

export default page;
