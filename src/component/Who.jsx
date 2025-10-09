import React from 'react'
import whoImg from "../assets/who.png"
const Who = () => {
  return (
    <div className='bg-gray-300 flex justify-between  xa:px-10 px-3' id='who'>

      <div className='md:w-1/2 xa:pl-25 md:pl-10 pl-5 py-10'>
        <h1 className='xa:text-8xl xb:text-5xl text-3xl font-montserrat lg:mb-5'>who?</h1>
        <h1 className='xa:text-5xl xb:text-3xl text-xl font-montserrat sm:mt-0 ra:mt-0 mt-16 lg:mb-5'>NAVIN SADARANGANI</h1>
        <h1 className='xa:text-4xl xb:text-2xl text-xl font-montserratLight'>founder of</h1>
        <h1 className='xa:text-5xl xb:text-3xl text-2xl font-montserratLight max-w-[70%]'>THE JEWELLERY IVANGELYST</h1>

        <p className='lg:mt-5 mt-2 flex flex-col lg:gap-3 xa:text-xl xb:text-[15px] text-[12px]  font-montserratLight max-w-[70%]'>
          Navin has spent more than 3 decades in the jewellery industry, of which the first 13 years were with the Rosy Blue Group owned Intergold. From handling the International Sales of Japan in SEEPZ, to setting up the country’s first platinum jewellery factory, later moving out to set up Intergold in Retail (now Orra), and then Hammer Plus Jewellery for wholesale domestic distribution, he has forayed across many facets of the industry. This experience is what made good his stand to start NYUZ….
        </p>
        <p className='lg:mt-5 mt-2 flex flex-col lg:gap-3 xa:text-xl xb:text-[15px] text-[12px]  font-montserratLight '>
          He is also Co-Founder of Association of Trainers, Founder of CLUBJIO (Club Jeweller Inside Out), and also Co-owner of a tv stars cricket team that plays at BCL called Pune Anmol Ratn. During covid times, Navin has created an identity THE JEWELLERY IVANGELYST, a real world knowledge platform that talks of Design, Values and Investment in the jewellery industry.
        </p>
      </div>

      <div className='md:w-1/2 w-1/3 md:relative  absolute ra:right-0 right-[10%]'>
        <img src={whoImg} className='' alt="" />
      </div>
    </div>
  )
}

export default Who
