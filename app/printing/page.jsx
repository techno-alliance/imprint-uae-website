import React from 'react'
import Image from 'next/image'
import printing from "/public/Images/printing2.png"

const page = () => {
  return (
    <section>
        <div className='w-full h-full overflow-hidden relative'>
            <Image className='w-[100%] h-[100%] object-cover object-center' src={printing}></Image>
            <div className='absolute right-0 top-0'>
                <p className='text-[#fff] text-[110px] font-semibold'>Printing</p>
                <p className='text-[#fff] text-[22px] font-normal w-[400px]'>we offer a comprehensive range of printing solutions tailored to meet your unique needs.</p>
            </div>
        </div>
    </section>
  )
}

export default page