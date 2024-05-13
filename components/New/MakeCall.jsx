import React from 'react'
import { FaPhone } from "react-icons/fa6";
import Link from 'next/link';

const MakeCall = () => {
  return (
    <div className='flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between items-center max-w-screen-xl mx-auto w-full'>
        {/* <div className='flex flex-col gap-2'>
            <p className='text-white'>Printing Projects</p>
            <p className='text-white'>For Collaboration ?</p>
        </div> */}
        <div className='h-[1px] bg-[#737373] w-[240px]'/>
        {/* <div>
            <p className='text-white'>Looking For Office</p>
            <p className='text-white'>Our Office Address</p>
        </div> */}
        <div className='h-[1px] bg-[#737373] w-[240px]'/>
        <Link
            className="button-57 flex justify-center items-center gap-5 transition duration-300 py-1 w-max rounded-full text-[16px] lg:text-[20px] px-1 pr-4 text-white"
            href="/contact"
          >
            <div className='bg-black rounded-full w-12 h-12 text-white flex justify-center items-center'>
            <FaPhone />
            </div>
            <span className="text-btn flex gap-2 items-center">
            Make a Call?
            </span>
            
            <span className="pb-3">Make a Call?</span>
        </Link>
    </div>
  )
}

export default MakeCall