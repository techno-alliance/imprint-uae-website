import Image from 'next/image'
import React from 'react'
import logo from "/public/Images/logo_full_gray.svg"

const Footer = () => {
  return (
    <footer className='bg-[#2E3537]'>
        <div className='max-w-screen-xl mx-auto px-12 py-12'>
            <div className='flex flex-col lg:flex-row justify-between gap-10 lg:gap-0 items-center'>
            <div className='flex flex-col gap-5'>
                <div className='w-[100px]'>
                    <Image className='w-[100%] h-[100%] object-cover object-center' src={logo}></Image>
                </div>
                <div>
                    <p>GET IN TOUCH</p>
                    <p>youremail@gmail.com</p>
                </div>
                <div>
                    <p>LOCATION</p>
                    <p>Near Ajman Private School Ajman - United Arab</p>
                    <p>Emirates</p>
                </div>
                <div>
                    <p>FOLLOW</p>
                    <p>LINKEDIN</p>
                    <p>INSTAGRAM</p>
                    <p>MEDIUM</p>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <p className='text-[50px] w-auto lg:w-[450px] text-[#fff]'>We're commited to providing you</p>
                <div>
                <button className="bg-gray-300 text-[12px] items-center text-[#fff] rounded-[42px] px-5 py-3">
                  SEND MAIL
                </button>
                </div>
                <div>
                    <p>TERMS & CONDITIONS</p>
                    <p>PRIVACY POLICY</p>
                </div>
            </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer