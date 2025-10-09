import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import Logo from "../assets/Logo Part.png"
import MainLogo from "../assets/Logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseLargeLine } from "react-icons/ri";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const scrollTo = (id) => {
  const target = document.getElementById(id);
  if (target) {
    const topOffset = target.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  }
};



const links = [
  { name: 'why', id: 'why' },
  { name: 'what', id: 'what' },
  { name: 'who', id: 'who' },
  { name: 'who all', id: 'whoAll' },
  { name: 'when', id: 'when' },
  { name: 'where', id: 'where' },
];

const Mobile = () => {
  const naviate = useNavigate()
  const [open, setOpen] = useState(false);

  // close the drawer when we cross the desktop breakpoint
  useEffect(() => {
    const onResize = () => window.innerWidth >= 992 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // yellow-wipe animation helpers
  const handleBackground = e => {
    const t = e.currentTarget;
    t.style.transition = "background-size .5s ease";
    t.style.backgroundImage = "linear-gradient(#f1c232,#f1c232)";
    t.style.backgroundRepeat = "no-repeat";
    t.style.backgroundSize = "100% 0";
    t.style.color = "white";
    requestAnimationFrame(() => (t.style.backgroundSize = "100% 100%"));
  };
  const resetBackground = e => {
    const t = e.currentTarget;
    t.style.transition = "background-size .5s ease";
    t.style.backgroundSize = "100% 0";
    t.style.color = "#232120";
  };

  return (
    <div className="xxmd:hidden ml-auto sm:mr-10 mr-5 my-auto">
      <GiHamburgerMenu
        className="sm:text-3xl text-2xl sm:mt-6 mt-11 cursor-pointer"
        onClick={() => setOpen(!open)}
      />

      {/* drawer */}
      <div
        id="navMobile"
        className={`fixed pb-5 top-0 right-0 h-screen md:w-[50%] w-[100%] z-50 transform
        ${open ? "translate-x-0" : "translate-x-full"}
        transition-transform duration-300 flex flex-col font-gotham
        bg-black/90 backdrop-blur-sm overflow-y-auto`}
      >
        <RiCloseLargeLine
          className="text-white text-3xl absolute top-0 right-0 mt-12 mr-10 cursor-pointer"
          onClick={() => setOpen(false)}
        />

        <div className="mt-28 pl-10 flex flex-col gap-4 uppercase">
          {links.map(({ name, id }) => (
            <h1
              key={name}
              className="text-black lg:text-5xl sm:text-3xl text-xl
                  py-4 pl-2 font-semibold bg-yellow-400 hover:bg-black
                  relative overflow-hidden px-5 cursor-pointer
                  transition-all duration-300 ease-in-out
                  bg-gradient-to-r from-black to-black bg-no-repeat
                  bg-[length:0%_100%] hover:bg-[length:100%_100%]
                  hover:text-yellow-400"
              onMouseEnter={handleBackground}
              onMouseLeave={resetBackground}
              onClick={() => {                      // scroll *and* close drawer
                scrollTo(id);
                setOpen(false);
              }}
            >
              {name}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};


const Navbar = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setCurrentSlide((s) => (s + 1) % 2),
      3000
    );
    return () => clearTimeout(timer);
  }, [currentSlide]);

  const highlight = (e, on) => {
    const t = e.currentTarget;
    t.style.transition = 'background-size .5s ease';
    t.style.backgroundImage = 'linear-gradient(#f1c232,#f1c232)';
    t.style.backgroundRepeat = 'no-repeat';
    t.style.backgroundSize = on ? '100% 100%' : '100% 0';
    t.style.color = on ? 'white' : '#232120';
  };

  return (
    <div className='relative -top-36 z-50'>
      <img src={Logo} className="md:block hidden z-20 w-1/2 absolute top-0" alt="" />

      {/* bar */}
      <div className="fixed z-10 top-0 w-full bg-white flex items-center justify-between pb-5 text-2xl font-montserratLight">
        <img src={MainLogo} className="lg:h-20 sm:h-18 h-14 ml-2 sm:mt-5 mt-10" alt="" />

        {/* desktop links */}
        <div className="hidden xxmd:flex sm:mt-7 mt-10 ">
          {links.map(({ name, id }) => (
            <h1
              key={name}
              className="px-6 py-2 mx-1 cursor-pointer …"
              onMouseEnter={(e) => highlight(e, true)}
              onMouseLeave={(e) => highlight(e, false)}
              onClick={() => scrollTo(id)}
            >
              {name}
            </h1>
          ))}
        </div>

        {/* mobile hamburger */}
        <Mobile />
      </div>
    </div>
  );
};

export default Navbar;