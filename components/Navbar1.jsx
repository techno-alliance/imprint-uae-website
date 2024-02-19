import React from 'react'
import logo from "/public/Images/logo_full_gray.svg"
import Image from 'next/image'

const Navbar1 = () => {
  return (
    <header>
        <nav
          id="navbar"
          className="navbar visible fixed top-0 left-0 flex items-center justify-between gap-[20px] w-full h-[72px] transition duration-300 pl-5 pr-5 sm:pl-10 sm:pr-10 md:pl-24 md:pr-24 z-50 backdrop-filter backdrop-blur-lg bg-opacity-50"
        >
          <div className="logo_animation">
            <div className="header_logo flex gap-2 justify-center items-center ">
              <Image
                className="w-[100px]"
                width={100}
                height={50}
                src={logo}
                alt=""
              ></Image>
            </div>
          </div>
          <div className="nav_items menu-bar sm:flex items-center gap-8 text-md hidden">
            <ul className="nav_items sm:flex items-center gap-8 text-md hidden">
              <li>
                <a
                  className="nav__links  text-gray-500 h-[72px] grid place-items-center hover:text-[#1265D7] transition-all duration-200"
                  href="/packaging"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  className="nav__links text-gray-500 h-[72px] grid place-items-center hover:text-[#1265D7] transition-all duration-200"
                  href="/printing"
                >
                  Works
                </a>
              </li>
              <li>
                <a
                  className="nav__links text-gray-500 h-[72px] grid place-items-center hover:text-[#1265D7] transition-all duration-200"
                  href=""
                >
                  Contact Us
                </a>
              </li>
              <a
                className="button-58 transition duration-300 p-2 w-max rounded-full text-xs px-4 text-white"
                href=""
              >
                <span className="text-btn">Let's Talk</span>
                <span>Let's Talk</span>
              </a>
            </ul>
          </div>
          <div className="menu sm:hidden">
            <button
              className="nav-tgl"
              id="nav-tgl"
              type="button"
              aria-label="toggle menu"
            >
              <span aria-hidden="true"></span>
            </button>
            <nav className="nav">
              <div
                className="side_viewer flex text-white justify-center items-center text-4xl"
                id="side_viewer"
              >
                <ul className="flex flex-col gap-6">
                  <li className="link">About</li>
                  <li className="link">Works</li>
                  <li className="link">Contact Us</li>
                  <li className="link">Lets Talk</li>
                </ul>
              </div>
            </nav>
          </div>
        </nav>
      </header>
  )
}

export default Navbar1