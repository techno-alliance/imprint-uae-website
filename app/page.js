import Image from "next/image";
import logo from "/public/Images/logo_full_gray.svg";
// import stars from "/public/Images/Christmas-stars.png";
// import landing from "/public/Images/landing_img.png";
// import Slider from "@/components/Slider";

// import  "/constants/main"
// import ImageScroll from "@/components/ImageScroll";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main class="main" id="scroll-container">
        <header>
          <nav
            id="navbar"
            class="navbar visible fixed top-0 left-0 flex items-center justify-between gap-[20px] w-full h-[72px] transition duration-300 pl-5 pr-5 sm:pl-10 sm:pr-10 md:pl-24 md:pr-24 z-50 backdrop-filter backdrop-blur-lg bg-opacity-50"
          >
            <div class="logo_animation">
              <div class="header_logo flex gap-2 justify-center items-center ">
                <Link href="/packaging">
                  <Image src={logo} className="w-[100px]"></Image>
                </Link>
              </div>
            </div>
            <Navbar />
          </nav>
        </header>
{/* 
        <section class="section panal section_1 relative overflow-hidden bg-white white-bg">
          <div class="min-h-screen h-full">
            <div class="pl-5 pr-5 sm:pl-10 sm:pr-10 md:pl-24 md:pr-24">
              <div class="lp_title flex flex-col pt-24 gap-4 relative text-center xs:text-left">
                <span class="lptitle_span text-[#C6C6C6] text-sm lg:text-lg">
                  Unleash Your Vision
                </span>
                <span class="lptitle_span font-bold text-4xl xss:text-5xl xs:text-[46px] sm:text-[48px] md:text-[50px] sm:leading-[48px] md:leading-[50px] lg:text-[76px] lg:leading-[76px] 2xl:text-8xl flex gap-8">
                  <span class="xs:whitespace-pre-line">
                    {" "}
                    <span>Your Ultimate Offset</span>
                    <span class="text-[#1265D7]">Printing</span> Partner
                  </span>
                  <div class="xmas_star w-16 hidden sm:block">
                    <Image class="w-full" src={stars} alt=""></Image>
                  </div>
                </span>
              </div>
              <div class="lp_center pt-12 pb-[55vh] sm:pt-8 sm:pb-[30%] flex justify-between items-center">
                <div class="two_circle flex sm:w-1/2 sm:flex-row gap-12 items-center">
                  <div class="circles flex relative">
                    <div class="circle1 bg-[#1265D7] w-14 h-14 rounded-full"></div>
                    <div class="circle2 bg-[#93B2DF] w-14 h-14 rounded-full absolute left-4"></div>
                    <div class="circle2 bg-[#D3E5FF] w-14 h-14 rounded-full absolute left-8"></div>
                  </div>
                  <div class="text-cir flex flex-col text-sm font-[500]">
                    <span>15,000+</span>
                    <span>Satisfied client</span>
                  </div>
                </div>
                <div class="xmas_star w-14 block sm:hidden">
                  <Image class="w-full" src={stars} alt=""></Image>
                </div>
                <div class="w-1/2 sm:w-2/5 text-[#5C5858] hidden sm:block 2xl:text-xl">
                  <span>
                    Imprint printing press is the foremost provider of varied
                    offset printing solutions to more than a thousand clients
                    today..
                  </span>
                </div>
              </div>
            </div>
            <div class="bottam_lp_img bottam_lp_img_desktop hidden md:hidden portrait:hidden landscape:block sm:block absolute -bottom-12 md:-bottom-12 left-1/2 -translate-x-1/2 -translate-y-0 w-full pl-5 pr-5 sm:pl-10 sm:pr-10 md:pl-24 md:pr-24">
              <div class="relative">
                <div class="flex overflow-hidden rounded-[45px]">
                  <Image class="w-full" src={landing} alt="image"></Image>
                </div>
                <div class="layer_bottom_lp_img rounded-3xl lg:rounded-[20px] backdrop-blur-[31px] absolute -top-[10%] left-[3%] w-[345px] lg:w-[210px] p-4 lg:p-7">
                  <div class="flex flex-col gap-2">
                    <span class="text-sm font-[500] text-black">
                      Imprint Printing
                    </span>
                    <span class="text-sm text-black">
                      Imprint Printing Press is not just any ordinary printing
                      company - we are the foremost provider of varied{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="bottam_lp_img bottam_lp_img_mobile_screen block md:block portrait:block landscape:hidden sm:hidden bottom-0 h-[50vh] overflow-hidden rounded-t-3xl absolute">
              <div class="relative">
                <div class="flex">
                  <Image
                    class="w-full h-[50vh] object-cover"
                    src={landing}
                    alt="image"
                  ></Image>
                </div>
                <div class="layer_bottom_lp_img absolute left-[50%] w-[90%] p-4 lg:p-7 top-[15%] -translate-x-[50%] text-center">
                  <span class="text-sm text-white md:text-2xl">
                    Imprint Printing Press is not just any ordinary printing
                    company - we are the foremost provider of varied{" "}
                  </span>
                </div>
                <div class="layer_bottom_lp_img rounded-2xl bg-[#FFFFFF66] absolute left-[50%] w-[90%] p-4 lg:p-7 bottom-[15%] -translate-x-[50%]">
                  <div class="flex flex-col gap-2">
                    <span class="text-sm md:text-2xl font-[500] text-white">
                      Imprint Printing
                    </span>
                    <span class="text-sm md:text-2xl text-white">
                      Imprint Printing Press is not just any ordinary printing
                      company - we are the foremost provider of varied{" "}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        {/* <div className="bg-[#141414]">
          <div className="max-w-screen-xl mx-auto py-10">
            <ImageScroll />
          </div>
        </div>
        <section class="section panal section_3">
          <div class="min-h-screen h-full bg-black text-white flex flex-col gap-8">
            <Slider />
          </div>
        </section> */}
      </main>
    </div>
  );
}
