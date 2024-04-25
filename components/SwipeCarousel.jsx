import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const imgs = [
  "/images/bag.png",
  "/images/gift.png",
  "/images/card.png",
  "/images/flyers.png",
];

const slideTexts = [
  "Packaging",
  "Printing",
  "Production",
  "Prent",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const TWEEN_OPTIONS = {
  type: "tween",
  duration: 0.5, // Duration of the animation in seconds
  ease: "easeInOut", // Easing function for the animation
};

export const SwipeCarousel = () => {
  const [imgIndex, setImgIndex] = useState(0);
  const [currentText, setCurrentText] = useState(slideTexts[0]);


  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => (pv === imgs.length - 1 ? 0 : pv + 1));
        // setCurrentText(slideTexts[(imgIndex + 1) % slideTexts.length]);

      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, [dragX]);
  useEffect(() => {
    setCurrentText(slideTexts[imgIndex]);
  }, [imgIndex]);

  const handleNext = () => {
    setImgIndex((prevIndex) =>
      prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
    );
    setCurrentText(slideTexts[(imgIndex + 1) % slideTexts.length]);

  };

  const handlePrev = () => {
    setImgIndex((prevIndex) =>
      prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
    );
    setCurrentText(slideTexts[(imgIndex - 1) % slideTexts.length]);

  };

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
      setCurrentText(slideTexts[(imgIndex + 1) % slideTexts.length]);

    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
      setCurrentText(slideTexts[(imgIndex - 1) % slideTexts.length]);

    }
  };

  return (
    <div className="relative overflow-hidden">
      <div className="bg-black w-[100px] h-[135vh] absolute left-0 z-10 flex flex-col justify-end">
      <p className="text-white text-[60px] rotate-[270deg] text-center font-semibold uppercase">{currentText}</p>
        <div className="flex flex-col pb-[270px]">
          <button
            className=" text-white text-[40px] m-0 text-center cursor-pointer"
            onClick={handlePrev}
          >
            &lt;
          </button>
         
          <button
            className=" text-white text-[40px] m-0 text-center cursor-pointer"
            onClick={handleNext}
          >
            &gt;
          </button>
        </div>
       
           
       
      </div>
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={TWEEN_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing w-[100%] h-screen pl-8"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>
      {/* Right Arrow Button */}

      {/* <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} /> */}
      {/* <GradientEdges /> */}
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
             
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="aspect-video w-screen shrink-0 bg-neutral-800 object-cover "
          >
            
          </motion.div>
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="mt-4 flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-[2px] w-[10px] transition-colors ${
              idx === imgIndex ? "bg-neutral-50" : "bg-neutral-500"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-r from-neutral-950/50 to-neutral-950/0" />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] bg-gradient-to-l from-neutral-950/50 to-neutral-950/0" />
    </>
  );
};
