// Banner.jsx
import React, { useEffect, useState } from 'react';
import Banner1 from '../assets/Banner/banner1.jpg';
import newBanner1 from '../assets/Banner/newBanner1.jpg';
import newBanner2 from '../assets/Banner/newBanner2.jpg';
import newBanner3 from '../assets/Banner/newBanner3.jpg';
import Banner2 from '../assets/Banner/banner2.jpg';
import Banner3 from '../assets/Banner/banner3.jpg';
import Banner4 from '../assets/Banner/banner4.jpg';
import Banner5 from '../assets/Banner/banner5.jpg';
import Banner6 from '../assets/Banner/banner6.jpg';
import Banner7 from '../assets/Banner/banner7.jpg';
import Banner8 from '../assets/Banner/banner8.jpg';

const banners = [newBanner1, newBanner2, newBanner3, Banner1, Banner2, Banner3, Banner4, Banner5, Banner6, Banner7, Banner8];

export const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []); // run once

  return (
    <section className="relative w-full mt-36 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {banners.map((image, index) => (
          <div key={index} className="relative flex-shrink-0 w-full">
            <img src={image} alt={`Banner ${index + 1}`} className="w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Banner;