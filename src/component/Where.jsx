
import React from 'react'
import WhereImg from '../assets/where.png'
const Where = () => {
  return (
      <div className='bg-yellow-400 flex justify-between  xa:px-10 px-3' id='where'>

        <div className='md:w-1/2 w-4/5 xa:pl-25 md:pl-10 pl-5 py-10'>
          <h1 className='xa:text-8xl xb:text-5xl text-3xl font-montserrat lg:mb-5' >Where?</h1>

          <p className='lg:mt-5 mt-2 flex flex-col lg:gap-3 xa:text-xl xb:text-[15px] text-[12px]  font-montserratLight'>
          The first TJI meet was flagged off on 13th May 2024, the second one was held on the 8th of August 2024 and the third on the 29th of July 2025, all of them in Mumbai at the Ginger Hotel, Santacruz Airport. Participation was from leading retailers across the country who came from almost 20 cities of India. Each session comprises a mix of seminars, panel discussions and demonstrative learnings in the area of Design, Investment and Values in the jewellery industry.
          As the energy continues to grow, there could be TJI meet-ups happening across the different parts of the country even amidst b2b jewellery shows.
          </p>
        </div>

        <div className='md:w-1/2 w-1/3 md:relative absolute right-0'>
          <img src={WhereImg} className='w-full' alt="" />
        </div>
      </div>
  )
}

export default Where