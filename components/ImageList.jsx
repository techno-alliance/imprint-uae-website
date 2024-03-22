"use client";
import React from "react";
import { Parallax } from "@/components/Parallax";
import Image from "next/image";

const ImageList = () => {
 
  return (
    <>
      <Parallax speed={1} className="self-start">
        <Image
        src="/images/cosmetic.png"
          width={100}
          height={400}
          priority
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-2} className="self-end overflow-hidden">
        <Image
          src={"/images/cosmetic2.png"}
          alt="Image"
          width={600}
          height={400}
          priority
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-1} className="self-center">
        <Image
          src={"/images/gift.png"}
          alt="Image"
          width={400}
          height={600}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-1} className="self-start">
        <Image
          src={"/images/Box1.png"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-2} className="self-end">
        <Image
          src={"/images/books1.png"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={2} className="self-start">
        <Image
          src={"/images/catalog.png"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-1} className="self-center">
        <Image
          src={"/images/bag.png"}
          alt="Image"
          width={400}
          height={600}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={1} className="self-end">
        <Image
          src={"/images/card.png"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
        />
      </Parallax>

      <Parallax speed={-12} className="self-start">
        <Image
          src={"/images/cover.png"}
          alt="Image"
          width={600}
          height={400}
          sizes="50vw"
          id="last-image"
        />
      </Parallax>

      <Parallax speed={-1} className="self-center">
        <Image
          src={"/images/brochure.png"}
          alt="Image"
          width={400}
          height={600}
          sizes="50vw"
        />
      </Parallax>
    </>
  );
};

export default ImageList;