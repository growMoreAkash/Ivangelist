import React from 'react';
import { useEffect } from 'react';

import { useLocation,Link } from 'react-router-dom';
import {
  FaFacebookF, FaTwitter, FaInstagram, FaYoutube,
} from 'react-icons/fa';

import logo from '../assets/Logo white.png';


/* ─────────── route-change scroll-top helper ─────────── */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

export const scrollTo = (id) => {
  const target = document.getElementById(id);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* same section map used in navbar */
const sectionLinks = [
  { label: 'Why', id: 'why' },
  { label: 'What', id: 'what' },
  { label: 'Who', id: 'who' },
  { label: 'Who All', id: 'whoAll' },
  { label: 'When', id: 'when' },
  { label: 'Where', id: 'where' }
];

const Footer = () => (
  <footer className="bg-black text-white font-gotham px-4 sm:px-6 lg:px-8">
    <ScrollToTop />

    {/* ─────────── top bar ─────────── */}
    <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6 py-8">
      <img src={logo} alt="NYUZ logo" className="h-16 sm:h-20" />

      <div className="flex gap-6 text-yellow-400 text-2xl">
        <a href="https://www.facebook.com/profile.php?id=100064128068735" aria-label="Facebook" className="hover:text-white"><FaFacebookF /></a>
        {/* <a href="https://in.linkedin.com/in/navin-sadarangani-372b2b5" aria-label="LinkedIn" className="hover:text-white"><FaTwitter /></a> */}
        <a href="http://instagram.com/thejewelleryivangelyst/" aria-label="Instagram" className="hover:text-white"><FaInstagram /></a>
        {/* <a href="https://www.youtube.com/@nayamain" aria-label="YouTube" className="hover:text-white"><FaYoutube /></a> */}
      </div>
    </div>

    <div className="border-t border-yellow-400" />

    {/* ─────────── body ─────────── */}
    <div className="max-w-screen-xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3 py-10">

      {/* About */}
      <div className="text-base leading-relaxed text-center sm:text-left">
        <p>
          Jewellers, we are united by a shared goal. Each day in our showrooms sees a steady stream of
          customers—from the affluent to the aspiring—making both high-value and middle-value purchases.
          Our experienced sales teams guide them through the buying experience, followed by detailed
          accounting and paperwork processes. While our legacy systems ensure consistency, they often
          leave us running around in circles, offering little room for innovation or growth.
        </p>
      </div>

      {/* Quick links */}
      <div className="text-center sm:text-left">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">Quick links</h3>
        <ul className="flex flex-col sm:space-y-2 gap-2 sm:gap-0">
          {sectionLinks.map(({ label, id }) => (
            <li key={id}>
              <button
                type="button"
                onClick={() => scrollTo(id)}
                className="hover:text-yellow-400 transition"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact us */}
      <div className="text-center sm:text-left">
        <h3 className="text-xl font-bold text-yellow-400 mb-4">Contact Us</h3>
        <address className="not-italic space-y-3 text-base leading-relaxed">
          <div>
            D-707, 7<sup>th</sup> Floor, Crystal Plaza,<br />
            New Link Road, Opp. Infiniti Mall,<br />
            Andheri (W), Mumbai 400 053
          </div>
          <div>Tel: 022-66944369 / 9820342400</div>
          <div>
            Email:&nbsp;
            <a href="mailto:navins@nyuz.com" className="hover:text-yellow-400">
              navins@nyuz.com
            </a>
          </div>
        </address>
      </div>
    </div>

    <div className="border-t border-yellow-400" />

    {/* ─────────── bottom strip ─────────── */}
    <div className="max-w-screen-xl mx-auto text-center py-6 text-sm sm:text-base">
      © 2025 IVANGELYST. All rights reserved.
      <h1 className='text-xl font-semibold'>Design by <Link to="https:/rightclickadvd.com">RightClick</Link> | Development by <Link to="https:/akasuya.com">Akasuya</Link></h1>
    </div>
  </footer>
);

export default Footer;
