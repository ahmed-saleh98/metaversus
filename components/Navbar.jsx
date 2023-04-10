'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '@/styles';
import { navVariants } from '@/utils/motion';

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    const navBar = document.querySelector('.navbar');
    const navIcon = document.querySelector('.navIcon');
    document.onclick = (e) => {
      e.target !== navBar && e.target !== navIcon ? setIsNavOpen(false) : null;
    };
  }, []);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`${styles.xPaddings} py-6 z-50 fixed w-full backdrop-blur-sm`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white uppercase">
          metaversus
        </h2>
        <div className="relative navbar">
          <img
            src="/menu.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain cursor-pointer navIcon "
            onClick={() => setIsNavOpen((prev) => !prev)}
          />
          <nav className=" absolute -right-2 top-10">
            <ul
              className={`${
                isNavOpen ? 'h-[488px] w-[300px]' : 'w-0 h-0'
              } flex flex-col text-lg font-medium rounded-3xl
            text-[#fff] whitespace-nowrap  bg-[#000000a1] 
            backdrop-blur-sm overflow-hidden transition-all duration-500`}
            >
              <li>
                <a className={`${styles.navLink} `} href="#home">
                  Home
                </a>
              </li>
              <li>
                <a className={`${styles.navLink}`} href="#about">
                  About
                </a>
              </li>
              <li>
                <a className={`${styles.navLink}`} href="#explore">
                  Explore Worlds
                </a>
              </li>
              <li>
                <a className={`${styles.navLink}`} href="#how-it-works">
                  How It Works
                </a>
              </li>
              <li>
                <a className={`${styles.navLink}`} href="#what's-new">
                  What's new
                </a>
              </li>
              <li>
                <a className={`${styles.navLink}`} href="#people">
                  People On The World
                </a>
              </li>
              <li>
                <a className={`${styles.navLink}`} href="#insight">
                  Insight
                </a>
              </li>
              <li>
                <a className={`${styles.navLink}`} href="#feedback">
                  Feedback
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
