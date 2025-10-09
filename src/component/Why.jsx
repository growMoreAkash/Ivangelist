import React from 'react'
import whyImg from '../assets/Why .png'
const Why = () => {
  return (
      <div className='bg-white flex justify-between  xa:px-10 px-3' id='why'>

        <div className='md:w-1/2 xa:pl-25 md:pl-10 pl-5 py-10'>
          <h1 className='xa:text-8xl xb:text-5xl text-3xl font-montserrat lg:mb-5' >why?</h1>
          <h1 className='xa:text-5xl xb:text-3xl text-2xl font-montserratLight'>The objectives of</h1>
          <h1 className='xa:text-5xl xb:text-3xl text-2xl font-montserratLight'>THE JEWELLERY IVANGELYST</h1>

          <ul className='lg:mt-5 mt-2 flex flex-col lg:gap-3 xa:text-xl xb:text-[15px] text-[12px]  font-montserratLight'>
            <li>To get a jeweller to think on and beyond the business of gems and jewellery</li>
            <li>To expose him to happenings in the businesses of the world</li>
            <li> To spark off hidden talent within each one of us</li>
            <li>To get like-minded people to network</li>
            <li>To create a platform that gets mindshare and marketshare in the jewellery industry</li>
          </ul>
        </div>

        <div className='md:w-1/2 w-1/3 md:relative absolute right-0'>
          <img src={whyImg} className='w-full' alt="" />
        </div>
      </div>
  )
}

export default Why
