import React from 'react'

const MakeCall = () => {
  return (
    <div className='flex justify-between items-center max-w-screen-xl mx-auto py-20 px-10'>
        <div className='flex flex-col gap-2'>
            <p className='text-white'>Printing Projects</p>
            <p className='text-white'>For Collaboration ?</p>
        </div>
        <div className='h-[1px] bg-[#737373] w-[240px]'/>
        <div>
            <p className='text-white'>Looking For Office</p>
            <p className='text-white'>Our Office Address</p>
        </div>
        <div className='h-[1px] bg-[#737373] w-[240px]'/>
        <button
            className="button-58 flex justify-center items-center transition duration-300 py-2 w-max rounded-full text-[16px] lg:text-[20px] px-4 text-white"
            href=""
          >
            <span className="text-btn flex gap-2 items-center">
              Our service
            </span>
            <span className="pb-3">Our service</span>
        </button>
    </div>
  )
}

export default MakeCall