import React, { useEffect, useState } from 'react'


import Navbar from './component/Navbar'
import Footer from './component/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Banner from './component/Banner';
import WhatComp from './component/What';
import WhyComp from './component/Why';
import WhoComp from './component/Who';
import WhoAllComp from './component/WhoAll';
import WhenComp from './component/When';
import WhereComp from './component/Where';
import RegistrationSection from './component/Registration';
import './App.css'

const Home = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 2);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentSlide]);

  return (

    <div className='w-full h-screen'>
      <Banner />

      <div className='bg-yellow-400 text-black text-center md:px-30 md:py-10 p-5'>
        <h1 className='xa:text-5xl xb:text-3xl text-2xl font-montserrat text-black'>living the jewellery life</h1>
        {/* <h1 className='xa:text-3xl xb:text-xl text-xl font-montserratLight py-4'>a gem of an experience. </h1> */}
        <p className='xa:text-lg xb:text-[15px] text-[12px] font-montserratLight'>As Jewellers, we are united by a shared goal. A typical business day involves
          our trained sales staff managing a steady stream of affluent as well as middle income
          customers visiting our showrooms. Each day plays witness to a chain of high-value and
          middle-value jewellery purchases and the subsequent handling of the paperwork /
          accounting processes that follow it. While our time tested systems serve us well,
          they also tie us down to a mundane daily activity that while seeing a status quo
          maintained, offers very little chance for growth. Over the years, this situation
          can effectively be summed up as ‘running around in circles’</p>
      </div>

      <WhyComp />
      <WhatComp />
      <WhoComp />
      <WhoAllComp />
      <WhenComp />
      {/* <RegistrationSection /> */}
      <WhereComp />

      <Footer />
    </div>
  )
}



const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App