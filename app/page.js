"use client";

import Hero from "@/components/New/Hero";
import MovingImage from "@/components/New/MovingImage";
import { BentoGridDemo } from "@/components/New/BentoGridDemo";
import MakeCall from "@/components/New/MakeCall";
import Slider from "@/components/New/Slider"
import Slider2 from "@/components/New/Slider2"
import FeaturedProjects from "@/components/New/FeaturedProjects";
import FeaturedProjects1 from "@/components/New/FeaturedProjects1";
import Testimonial from "@/components/New/Testimonial";
import Blog from "@/components/New/Blog";

export default function Home() {
  // const container = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: container,
  //   offset: ["start start", "end end"],
  // });

  return (
    <div className="pt-[20px] md:pt-[60px]">
      <Hero />
      <div className="bg-black py-20">
        <MovingImage />
      </div>
      <BentoGridDemo />
      <section className="bg-black">
        <div className="max-w-screen-xl mx-auto px-10 py-10">
        <div className="flex flex-col gap-4 justify-center items-center">
        <button
            className="button-58 flex transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-5 text-white"
            href=""
          >
            <span className="text-btn flex gap-2 items-center">About</span>
            <span className="pb-3">About</span>
          </button>
          <p className="text-5xl text-white font-semibold text-center">
             Why? <span className="text-[#5ACEF1] font-bold">IMPRINT</span>
          </p>
          <p className="text-[17px] text-white font-normal text-center w-auto md:w-[600px]">
          Imprint printing press is the foremost provider of varied offset printing solutions to more than a thousand clients today..
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-20">
          <div className="p-9 bg-[#1A1A1A] rounded-[10px] flex flex-col lg:flex-row justify-center items-center">
            <div className="flex gap-5">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  opacity={0.6}
                >
                  <path
                    d="M25.0074 6.25066C29.6097 6.25066 33.3407 9.98161 33.3407 14.584C33.3407 15.7182 33.1151 16.7963 32.707 17.7786C29.2882 18.1447 26.057 19.9142 23.9249 22.848C21.3016 22.5078 19.059 20.9478 17.7869 18.748C17.0795 17.5246 16.674 16.1048 16.674 14.584C16.674 9.98161 20.405 6.25066 25.0074 6.25066ZM37.0147 18.0683C37.3355 16.9613 37.5074 15.7918 37.5074 14.584C37.5074 7.68043 31.9109 2.08399 25.0074 2.08398C18.1038 2.08398 12.5074 7.68043 12.5074 14.584C12.5074 15.7919 12.6792 16.9614 13.0001 18.0684C11.8811 18.3442 10.7824 18.7801 9.73647 19.3839C3.75781 22.8357 1.70937 30.4805 5.16114 36.4592C8.61293 42.438 16.2578 44.4863 22.2364 41.0347C23.2824 40.4307 24.2093 39.6972 25.0074 38.8659C25.8057 39.6972 26.7324 40.4305 27.7782 41.0344C33.757 44.4861 41.4018 42.4378 44.8537 36.459C48.3053 30.4805 46.257 22.8355 40.2782 19.3838C39.2324 18.7799 38.1337 18.344 37.0147 18.0683ZM27.4122 35.2805C28.8047 32.1365 28.888 28.4532 27.4135 25.1399C29.0197 23.0378 31.4918 21.8757 34.0328 21.874C35.4457 21.8732 36.878 22.2319 38.1949 22.9922C42.1807 25.2934 43.5464 30.3901 41.2451 34.3757C38.9439 38.3615 33.8474 39.7272 29.8616 37.4259C28.8795 36.859 28.0589 36.1249 27.4122 35.2805ZM23.6843 27.0151C24.7016 29.4572 24.4718 32.1792 23.2026 34.3807C22.4968 35.6049 21.4701 36.6657 20.1531 37.4261C16.1674 39.7274 11.0708 38.3617 8.7696 34.3759C6.46841 30.3901 7.83403 25.2936 11.8198 22.9924C12.802 22.4253 13.8484 22.0815 14.903 21.9438C16.9296 24.7215 20.0777 26.6353 23.6843 27.0151Z"
                    fill="#FFF"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-white text-xl">Localfu fulfillment</p>
                <p className="text-white text-sm opacity-[0.6]">
                  Get speed and consistency—our global in-house and partner
                  facilities offer competitive shipping rates and consistent
                  quality.
                </p>
              </div>
            </div>
          </div>
          <div className="p-9 bg-[#1A1A1A] rounded-[10px] flex flex-col lg:flex-row justify-center items-center">
            <div className="flex gap-5">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  opacity={0.6}
                >
                  <path
                    d="M35.4219 4.16602C36.5725 4.16602 37.5052 5.09874 37.5052 6.24935V14.5827H43.7552C44.9058 14.5827 45.8385 15.5154 45.8385 16.666V27.7583C45.4646 27.2421 45.0404 26.7466 44.5658 26.2721C43.6748 25.381 42.71 24.6673 41.6719 24.131V18.7493H8.33854V35.416H12.5052V33.3327C12.5052 32.1821 13.438 31.2494 14.5885 31.2494H25.409C25.3558 31.4437 25.3081 31.6404 25.2654 31.8389C24.3696 32.4316 23.576 33.1775 22.8852 34.0764C22.5527 34.5091 22.2608 34.9556 22.0094 35.416H16.6719V41.666H20.9513C21.1777 43.1908 21.7452 44.5796 22.6542 45.8327H14.5885C13.438 45.8327 12.5052 44.9 12.5052 43.7494V39.5827H6.25521C5.1046 39.5827 4.17188 38.65 4.17188 37.4994V16.666C4.17188 15.5154 5.1046 14.5827 6.25521 14.5827H12.5052V6.24935C12.5052 5.09874 13.438 4.16602 14.5885 4.16602H35.4219ZM33.3385 8.33268H16.6719V14.5827H33.3385V8.33268ZM16.6719 20.8327V24.9994H10.4219V20.8327H16.6719ZM43.7552 34.3744C43.7552 30.3473 40.4906 27.0827 36.4635 27.0827C32.4365 27.0827 29.1719 30.3473 29.1719 34.3744L29.179 34.5879C26.7706 35.2658 25.0052 37.4785 25.0052 40.1035C25.0052 43.1504 27.3838 45.6419 30.3854 45.8223L30.7344 45.8327H42.1927L42.5417 45.8223C45.5433 45.6419 47.9219 43.1504 47.9219 40.1035C47.9219 37.4791 46.1575 35.2671 43.7521 34.5896L43.7552 34.3744ZM33.3529 34.0733C33.5044 32.4887 34.8392 31.2494 36.4635 31.2494C38.0879 31.2494 39.4227 32.4887 39.5742 34.0733L39.5885 34.3744V37.7494C41.0385 38.1637 42.0415 38.4454 42.5971 38.5944C43.4306 38.8177 43.9252 39.6744 43.7019 40.5079C43.5158 41.2025 42.8898 41.6619 42.204 41.6664H30.7231C30.0373 41.6619 29.4112 41.2025 29.2252 40.5079C29.0017 39.6744 29.4965 38.8177 30.33 38.5944C30.824 38.4619 31.6712 38.2248 32.8717 37.8825L33.3385 37.7494V34.3744L33.3529 34.0733Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-white text-xl">Localfu fulfillment</p>
                <p className="text-white text-sm opacity-[0.6]">
                  Get speed and consistency—our global in-house and partner
                  facilities offer competitive shipping rates and consistent
                  quality.
                </p>
              </div>
            </div>
          </div>
          <div className="p-9 bg-[#1A1A1A] rounded-[10px] flex flex-col lg:flex-row justify-center items-center">
            <div className="flex gap-5">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  opacity={0.6}
                >
                  <path
                    d="M20.848 4.38282C17.928 3.43757 14.7537 4.75238 13.3574 7.4855L11.6787 10.7713C11.4792 11.1617 11.1617 11.4792 10.7713 11.6787L7.4855 13.3574C4.75237 14.7537 3.43758 17.928 4.38281 20.8479L5.51918 24.3583C5.65421 24.7754 5.65421 25.2246 5.51918 25.6417L4.38281 29.1521C3.43758 32.0721 4.75239 35.2463 7.4855 36.6425L10.7713 38.3213C11.1617 38.5208 11.4792 38.8383 11.6787 39.2288L13.3574 42.5144C14.7537 45.2475 17.928 46.5623 20.848 45.6171L24.3584 44.4808C24.7755 44.3458 25.2245 44.3458 25.6415 44.4808L29.152 45.6171C32.072 46.5623 35.2463 45.2475 36.6426 42.5144L38.3213 39.2288C38.5207 38.8383 38.8382 38.5208 39.2286 38.3213L42.5145 36.6425C45.2476 35.2463 46.5624 32.0721 45.6172 29.1521L44.4807 25.6417C44.3457 25.2246 44.3457 24.7754 44.4807 24.3583L45.6172 20.8479C46.5624 17.9279 45.2476 14.7537 42.5145 13.3574L39.2286 11.6787C38.8382 11.4792 38.5207 11.1617 38.3213 10.7713L36.6426 7.4855C35.2463 4.75238 32.072 3.43757 29.152 4.38282L25.6415 5.51917C25.2245 5.65419 24.7755 5.65419 24.3584 5.51917L20.848 4.38282ZM17.0679 9.38117C17.5333 8.47013 18.5914 8.03188 19.5647 8.34694L23.0751 9.48332C24.3263 9.88838 25.6736 9.88838 26.9249 9.48332L30.4353 8.34694C31.4086 8.03188 32.4667 8.47013 32.9322 9.38117L34.6109 12.667C35.2092 13.8382 36.1617 14.7908 37.333 15.3891L40.6188 17.0678C41.5299 17.5333 41.9682 18.5914 41.653 19.5647L40.5167 23.0752C40.1115 24.3265 40.1115 25.6735 40.5167 26.9248L41.653 30.4352C41.9682 31.4085 41.5299 32.4667 40.6188 32.9321L37.333 34.6108C36.1617 35.2092 35.2092 36.1619 34.6109 37.3329L32.9322 40.6188C32.4667 41.5298 31.4086 41.9681 30.4353 41.6529L26.9249 40.5167C25.6736 40.1117 24.3263 40.1117 23.0751 40.5167L19.5647 41.6529C18.5914 41.9681 17.5333 41.5298 17.0679 40.6188L15.3891 37.3329C14.7908 36.1619 13.8382 35.2092 12.667 34.6108L9.38118 32.9321C8.47014 32.4667 8.03187 31.4085 8.34695 30.4352L9.48333 26.9248C9.88837 25.6735 9.88837 24.3265 9.48333 23.0752L8.34695 19.5647C8.03187 18.5914 8.47014 17.5333 9.38118 17.0678L12.667 15.3891C13.8382 14.7908 14.7908 13.8382 15.3891 12.667L17.0679 9.38117ZM14.0825 24.4946L22.9213 33.3333L37.6528 18.602L34.7065 15.6557L22.9213 27.4408L17.0287 21.5481L14.0825 24.4946Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-white text-xl">Localfu fulfillment</p>
                <p className="text-white text-sm opacity-[0.6]">
                  Get speed and consistency—our global in-house and partner
                  facilities offer competitive shipping rates and consistent
                  quality.
                </p>
              </div>
            </div>
          </div>
          <div className="p-9 bg-[#1A1A1A] rounded-[10px] flex flex-col lg:flex-row justify-center items-center">
            <div className="flex gap-5">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  opacity={0.6}
                >
                  <g opacity="0.6">
                    <path
                      d="M4.1875 10.6281C4.1875 11.8349 4.66687 12.9922 5.52017 13.8455C6.37346 14.6988 7.53077 15.1781 8.7375 15.1781C9.94423 15.1781 11.1015 14.6988 11.9548 13.8455C12.8081 12.9922 13.2875 11.8349 13.2875 10.6281C13.2875 9.4214 12.8081 8.26408 11.9548 7.41079C11.1015 6.5575 9.94423 6.07812 8.7375 6.07812C7.53077 6.07812 6.37346 6.5575 5.52017 7.41079C4.66687 8.26408 4.1875 9.4214 4.1875 10.6281Z"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.9125 21.2163C15.4539 20.1413 14.7595 19.1832 13.8807 18.4128C13.0019 17.6424 11.9611 17.0793 10.8354 16.7653C9.70973 16.4513 8.52781 16.3943 7.37712 16.5986C6.22642 16.8028 5.13633 17.2632 4.1875 17.9455"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M36.7109 10.6281C36.7109 11.8349 37.1903 12.9922 38.0436 13.8455C38.897 14.6988 40.0543 15.1781 41.2609 15.1781C42.4678 15.1781 43.6251 14.6988 44.4784 13.8455C45.3316 12.9922 45.8109 11.8349 45.8109 10.6281C45.8109 9.4214 45.3316 8.26408 44.4784 7.41079C43.6251 6.5575 42.4678 6.07812 41.2609 6.07812C40.0543 6.07812 38.897 6.5575 38.0436 7.41079C37.1903 8.26408 36.7109 9.4214 36.7109 10.6281Z"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M34.0938 21.2163C34.5523 20.1413 35.2467 19.1832 36.1254 18.4128C37.0044 17.6424 38.045 17.0793 39.1706 16.7653C40.2965 16.4513 41.4783 16.3943 42.629 16.5986C43.7798 16.8028 44.8698 17.2632 45.8188 17.9455"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.0469 8.51458C18.0469 9.42754 18.2267 10.3316 18.5761 11.175C18.9255 12.0185 19.4375 12.7849 20.0831 13.4305C20.7287 14.076 21.4951 14.5881 22.3384 14.9375C23.182 15.2869 24.0859 15.4667 24.999 15.4667C25.912 15.4667 26.8159 15.2869 27.6595 14.9375C28.5028 14.5881 29.2692 14.076 29.9149 13.4305C30.5603 12.7849 31.0724 12.0185 31.4217 11.175C31.7711 10.3316 31.9511 9.42754 31.9511 8.51458C31.9511 7.60162 31.7711 6.6976 31.4217 5.85415C31.0724 5.01067 30.5603 4.24427 29.9149 3.59871C29.2692 2.95317 28.5028 2.44106 27.6595 2.09169C26.8159 1.74232 25.912 1.5625 24.999 1.5625C24.0859 1.5625 23.182 1.74232 22.3384 2.09169C21.4951 2.44106 20.7287 2.95317 20.0831 3.59871C19.4375 4.24427 18.9255 5.01067 18.5761 5.85415C18.2267 6.6976 18.0469 7.60162 18.0469 8.51458Z"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M37.023 23.875C35.4989 22.2004 33.6418 20.8625 31.5707 19.9469C29.4997 19.0315 27.2601 18.5586 24.9959 18.5586C22.7316 18.5586 20.492 19.0315 18.421 19.9469C16.3499 20.8625 14.4929 22.2004 12.9688 23.875"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M33.239 28.8672C33.2046 31.0301 32.3213 33.0928 30.7796 34.6101C29.2379 36.1274 27.1615 36.9778 24.9983 36.9778C22.8352 36.9778 20.7589 36.1274 19.2172 34.6101C17.6755 33.0928 16.7922 31.0301 16.7578 28.8672"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M44.5709 28.8594V31.9573L41.0292 32.6656C40.6205 34.3827 39.9359 36.0221 39.0021 37.5198L41.0209 40.5281L36.6459 44.9031L33.6396 42.8844C32.1415 43.8262 30.4988 44.5154 28.7771 44.924L28.0771 48.4469H21.9105L21.2084 44.924C19.4874 44.515 17.8453 43.826 16.3479 42.8844L13.3333 44.8948L8.95833 40.5198L10.9771 37.5115C10.0426 36.0137 9.35731 34.3744 8.94792 32.6573L5.40625 31.949V28.8594"
                      stroke="white"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-white text-xl">Localfu fulfillment</p>
                <p className="text-white text-sm opacity-[0.6]">
                  Get speed and consistency—our global in-house and partner
                  facilities offer competitive shipping rates and consistent
                  quality.
                </p>
              </div>
            </div>
          </div> 
          <div className="p-9 bg-[#1A1A1A] rounded-[10px] flex flex-col lg:flex-row justify-center items-center">
            <div className="flex gap-5">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  opacity={0.6}
                >
                  <path
                    d="M9.3776 15.9446V34.0567L25.0026 43.1027L40.6276 34.0567V15.9446L25.0026 6.89857L9.3776 15.9446ZM25.0026 2.08398L44.7943 13.5423V36.459L25.0026 47.9173L5.21094 36.459V13.5423L25.0026 2.08398ZM13.5421 20.7728L22.9193 26.2017V36.7194H27.0859V26.2017L36.463 20.7729L34.3755 17.1669L25.0026 22.5934L15.6298 17.1669L13.5421 20.7728Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-white text-xl">Localfu fulfillment</p>
                <p className="text-white text-sm opacity-[0.6]">
                  Get speed and consistency—our global in-house and partner
                  facilities offer competitive shipping rates and consistent
                  quality.
                </p>
              </div>
            </div>
          </div>
          <div className="p-9 bg-[#1A1A1A] rounded-[10px] flex flex-col lg:flex-row justify-center items-center">
            <div className="flex gap-5">
              <div className="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  fill="none"
                  opacity={0.6}
                >
                  <path
                    d="M43.7474 24.2614V43.7494C43.7474 44.9 42.8147 45.8327 41.6641 45.8327H8.33073C7.18015 45.8327 6.2474 44.9 6.2474 43.7494V24.2614C4.95081 22.7925 4.16406 20.8627 4.16406 18.7493V6.24935C4.16406 5.09877 5.09681 4.16602 6.2474 4.16602H43.7474C44.898 4.16602 45.8307 5.09877 45.8307 6.24935V18.7493C45.8307 20.8627 45.0441 22.7925 43.7474 24.2614ZM39.5807 26.8202C38.9149 26.9914 38.2168 27.0827 37.4974 27.0827C35.0084 27.0827 32.7743 25.9914 31.2474 24.2614C29.7205 25.9914 27.4864 27.0827 24.9974 27.0827C22.5084 27.0827 20.2744 25.9914 18.7474 24.2614C17.2204 25.9914 14.9863 27.0827 12.4974 27.0827C11.778 27.0827 11.0799 26.9914 10.4141 26.8202V41.666H39.5807V26.8202ZM29.1641 18.7493C29.1641 17.5988 30.0968 16.666 31.2474 16.666C32.398 16.666 33.3307 17.5988 33.3307 18.7493C33.3307 21.0506 35.1961 22.916 37.4974 22.916C39.7986 22.916 41.6641 21.0506 41.6641 18.7493V8.33268H8.33073V18.7493C8.33073 21.0506 10.1962 22.916 12.4974 22.916C14.7986 22.916 16.6641 21.0506 16.6641 18.7493C16.6641 17.5988 17.5968 16.666 18.7474 16.666C19.898 16.666 20.8307 17.5988 20.8307 18.7493C20.8307 21.0506 22.6961 22.916 24.9974 22.916C27.2986 22.916 29.1641 21.0506 29.1641 18.7493Z"
                    fill="#fff"
                  />
                </svg>
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-white text-xl">Localfu fulfillment</p>
                <p className="text-white text-sm opacity-[0.6]">
                  Get speed and consistency—our global in-house and partner
                  facilities offer competitive shipping rates and consistent
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
     <section className="bg-black">
     <MakeCall/>
     </section>
      <section className="py-20">
      <Slider/>
      </section>
      {/* <FeaturedProjects1/> */}
      <section className="bg-black py-20">
      <div className="max-w-screen-xl mx-auto">
      <Testimonial/>
      </div>
      </section>
      <Slider2/>
      <Blog/>
      
    </div>
  );
}
