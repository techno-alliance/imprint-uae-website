import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { GoArrowUpRight } from "react-icons/go";


const Example = () => {
  return (
    <div className="bg-black">
      <div className="flex pt-10 items-center justify-center">
      <p className="text-[#fff] text-[50px] lg:text-[64px] font-bold  leading-none">Featured <span className="text-[#208FED] text-[50px] lg:text-[110px]">Projects</span> </p>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
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
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        {/* <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p> */}
      </div>
    </div>
  );
};

export default Example;

const cards = [
  {
    url: "/images/project1.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/images/project2.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/images/project3.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/images/project4.png",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/images/project5.png",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/images/project6.png",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/images/simple.png",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/images/business.png",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/images/sidepack.png",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/images/signage.png",
    title: "Title 7",
    id: 7,
  },
  {
    url: "/images/sidebox.png",
    title: "Title 7",
    id: 7,
  },
];