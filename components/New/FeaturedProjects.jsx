import React, { useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import cover1 from "@/public/images/cover1.jpg";
import cover2 from "@/public/images/cover2.jpg";
import cover3 from "@/public/images/cover3.jpg";
import cover4 from "@/public/images/cover4.jpg"

const FeaturedProjects = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const details = gsap.utils.toArray(".desktopContentSection:not(:first-child)");
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)");

    gsap.set(photos, {
      yPercent: 101
    });

    const allPhotos = gsap.utils.toArray(".desktopPhoto");

    ScrollTrigger.create({
      trigger: ".project_gallery",
      start: "top top",
      end: "bottom bottom",
      pin: ".right_pro"
    });

    details.forEach((detail, index) => {
      let headline = detail.querySelector("h1");
      let animation = gsap.timeline().to(photos[index], { yPercent: 0 }).set(allPhotos[index], { autoAlpha: 0 });
      ScrollTrigger.create({
        trigger: headline,
        animation: animation,
        scrub: true,
        markers: false
      });
    });

    gsap.utils.toArray(".mobilePhoto").forEach((container) => {
      let image = container.querySelector(".mobilePhoto Image");
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 120%",
          toggleActions: "play none none reverse"
        }
      });

      tl.set(container, { autoAlpha: 1 });
      tl.from(container, {
        duration: 3,
        yPercent: 100,
        skewX: 0.1,
        scale: 1,
        ease: "expo"
      });
      tl.from(image, {
        duration: 3,
        yPercent: -100,
        skewX: 0.1,
        scale: 1.5,
        ease: "expo"
      }, 0);
    });

    gsap.utils.toArray(".desktopContentSection").forEach((elem) => {
      let headline = elem.querySelector("h1");
      var color = elem.getAttribute('data-color');
    //   var curser = elem.getAttribute('curser-color');

      ScrollTrigger.create({
        trigger: headline,
        scrub: true,
        onEnter: () => gsap.to('body', { backgroundColor: color, duration: 1.4 }),
        onEnterBack: () => gsap.to('body', { backgroundColor: color, duration: 1.4 })
      });
    });
  }, []);

  return (
    <section className="section panal section_4 white-bg">
      <div className="pt-20 sm:pt-60 white-bg">
        <div className="h-full px-3 sm:px-20 lg:px-44">
          <div className="section_header text-center sm:text-left pb-10 sm:pb-40 text-4xl sm:text-6xl">
            <h2 className="flex flex-col">
              Featured
              <span>Projects</span>
            </h2>
          </div>
          <div className="project_gallery flex">
            <div className="left_pro w-1/2 hidden sm:block">
                <div class="desktopContent m-auto w-4/5">
                  <div class="desktopContentSection min-h-screen flex flex-col justify-center" curser-color="#ff5800"
                    data-color='#ffece2'>
                    <div class="project_head mt-5 sm:mt-0">
                      <h1 class="md:text-[1.5vw] text-xl font-bold mb-5">Imprint Project 1</h1>
                    </div>
                    <div class="project_data inline text-xl md:text-[2.58vw] my-8 md:leading-[133%] leading-[150%]">
                      <p class="">Imprint Printing Press is not just any ordinary printing
                        company.</p>
                    </div>
                    <div class="tag my-7 text-[#6f6f6f] sm:text-[1.16vw]  tracking-[0.04375em] leading-[156%]">
                      <span>web, mobile, product</span>
                    </div>
                  </div>
                  <div class="desktopContentSection min-h-screen flex flex-col justify-center" curser-color="#00ffa7"
                    data-color='#e2fff5'>
                    <div class="project_head mt-5 sm:mt-0">
                      <h1 class="md:text-[1.5vw] text-xl font-bold mb-5">Imprint Project 2</h1>
                    </div>
                    <div class="project_data inline text-xl md:text-[2.58vw] my-8 md:leading-[133%] leading-[150%]">
                      <p class="">Imprint Printing Press is not just any ordinary printing
                        company.</p>
                    </div>
                    <div class="tag my-7 text-[#6f6f6f] sm:text-[1.16vw]  tracking-[0.04375em] leading-[156%]">
                      <span>web, mobile, product</span>
                    </div>
                  </div>
                  <div class="desktopContentSection min-h-screen flex flex-col justify-center" curser-color="#ff003a"
                    data-color='#ffe0e7'>
                    <div class="project_head mt-5 sm:mt-0">
                      <h1 class="md:text-[1.5vw] text-xl font-bold mb-5">Imprint Project 3</h1>
                    </div>
                    <div class="project_data inline text-xl md:text-[2.58vw] my-8 md:leading-[133%] leading-[150%]">
                      <p class="">Imprint Printing Press is not just any ordinary printing
                        company.</p>
                    </div>
                    <div class="tag my-7 text-[#6f6f6f] sm:text-[1.16vw]  tracking-[0.04375em] leading-[156%]">
                      <span>web, mobile, product</span>
                    </div>
                  </div>
                  <div class="desktopContentSection min-h-screen flex flex-col justify-center" curser-color="#ffc200"
                    data-color='#fff9e6'>
                    <div class="project_head mt-5 sm:mt-0">
                      <h1 class="md:text-[1.5vw] text-xl font-bold mb-5">Imprint Project 4</h1>
                    </div>
                    <div class="project_data inline text-xl md:text-[2.58vw] my-8 md:leading-[133%] leading-[150%]">
                      <p class="">Imprint Printing Press is not just any ordinary printing
                        company.</p>
                    </div>
                    <div class="tag my-7 text-[#6f6f6f] sm:text-[1.16vw]  tracking-[0.04375em] leading-[156%]">
                      <span>web, mobile, product</span>
                    </div>
                  </div>

                </div>
            </div>
            <div className="right_pro sm:h-screen sm:w-1/2 flex flex-col sm:justify-center h-auto w-full items-center sm:items-start">
              <div
                  class="desktopPhotos w-[25vw] h-[40vw] m-auto rounded-2xl relative overflow-hidden hidden sm:block">
                  <div class="desktopPhoto overflow-hidden absolute w-full h-full">
                    <Image class="w-full" src={cover1}/>
                  </div>
                  <div class="desktopPhoto overflow-hidden absolute w-full h-full">
                    <Image class="w-full" src={cover2}/>
                  </div>
                  <div class="desktopPhoto overflow-hidden absolute w-full h-full">
                    <Image class="w-full" src={cover3}/>
                  </div>
                  <div class="desktopPhoto overflow-hidden absolute w-full h-full">
                    <Image class="w-full" src={cover4}/>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
