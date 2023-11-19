import React from 'react'
import QR_image from '../images/image-qr-code.png'
import content from '../Content.js'
const Card = () => {
  return (
    // card
    <div className='flex flex-col items-center rounded-[30px] p-[18px] bg-white mx-[25px] md:w-[50%] lg:w-[40%]'>
        {/* img section */}
        <div className='rounded flex items-center justify-center'>
            <img alt='QR-Code' src={QR_image} className='rounded-[13px]' />
        </div>
        {/* description */}
        <div className='font-display text-center pt-[25px] pb-[25px] px-[6px] xl:w-[80%]'>
            <h1 className='font-bold text-[25px] text-gray-800 leading-7 xl:text-[30px]'>{content.Header}</h1>
            <p className='pt-[17px] text-[17px] text-gray-500 xl:text-[20px]'>{content.Description}</p>
        </div>
    </div>
  )
}

export default Card